import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Achat } from 'src/app/Models/produit/achat.model';
import { Commande } from 'src/app/Models/produit/commande.model';
import { CommandeElement } from 'src/app/Models/produit/commandeElement.model';
import { PaymentInfo } from 'src/app/Models/produit/paymentInfo.model';
import { AchatService } from 'src/app/services/produit/achat.service';
import { PanierService } from 'src/app/services/produit/panier.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-valider-panier',
  templateUrl: './valider-panier.component.html',
  styleUrls: ['./valider-panier.component.css']
})

export class ValiderPanierComponent implements OnInit {

  validerPanierFormGroup: FormGroup;

  prixTotal: number = 0;
  quantiteTotal: number = 0;

  // on pour acceder aux elements du user connecté
  storage : Storage = sessionStorage;


  //initialisation de Stripe API
  stripe = Stripe(environment.stripePublicKey);

  paymentInfo : PaymentInfo = new PaymentInfo();
  cardElement : any;
  displayError : any ="";

  constructor(private formBuilder: FormBuilder,
    private panierService: PanierService,
    private achatService: AchatService,
    private router: Router
  ) { }

  ngOnInit(): void {

    //creation du formulaire stripe
    this.setupStripePaymentForm();

    //on recupere l'email de l'utilisateur a partir du brower storage que on a mis chez le user service
   //c'est cette ecriture avec JSON.parse que tu mettra quand tu voudra recuperer les infos de l'utilisateur connecté
    // const lemail = JSON.parse(this.storage.getItem("userEmail"));
    const lemail = this.storage.getItem("userEmail");

    this.actualisationPanier();

    //ici dans les formcontrol tu dois penser a revenir mettre les infos de l'utilisateur connecté

    this.validerPanierFormGroup = this.formBuilder.group({
      //client
      client: this.formBuilder.group({
        nom: new FormControl('', [Validators.required, Validators.minLength(3)]),
        prenom: new FormControl('', [Validators.required, Validators.minLength(3)]),
        email: new FormControl(lemail,
          [Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
        adresse: new FormControl('', [Validators.required, Validators.minLength(4)]),
      }),
      //carte de credit
      carteDeCredit: this.formBuilder.group({
        /*
        typeCarte: new FormControl('', [Validators.required]),
        numCarte: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{16}$')]),
        codeSecurite: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{4}$')]),
        */

      })
    });
  }


  //methode pour initialiser le formulaire de paiement stripe 
  setupStripePaymentForm() {
    // get handle to stripe element
    var elements = this.stripe.elements();

    // Create a card element ... and hide zipe-code field
    this.cardElement = elements.create('card', { hidePostalCode: true });

    //add an instance of card UI component into 'card-element' div.
    this.cardElement.mount('#card-element');

    //add an event listener to display any validation errors  in the UI
    this.cardElement.on('change', (event : any) => {

      //get a handle to card element
      this.displayError = document.getElementById('card-errors');
          
      if(event.complete){
        this.displayError = "";
      }else if(event.error){
        //show the error message to customer
        this.displayError.textContent = event.error.message;

      }
    });
  }


  actualisationPanier() {

    // on recupere quantite total
    this.panierService.totalquantite.subscribe(
      data => {
        this.quantiteTotal = data;
      }
    );

    // on recupere le prix total
    this.panierService.totalprix.subscribe(
      (data) => {
        this.prixTotal = data;
      }
    );
    this.panierService.calculerTotalPanier();
  }

  //getter pour le client
  get nom() { return this.validerPanierFormGroup.get('client').get('nom'); }
  get prenom() { return this.validerPanierFormGroup.get('client').get('prenom'); }
  get email() { return this.validerPanierFormGroup.get('client').get('email'); }
  get adresse() { return this.validerPanierFormGroup.get('client').get('adresse'); }

  //getter pour le carte de credit
  
  get typeCarte() { return this.validerPanierFormGroup.get('carteDeCredit').get('typeCarte'); }
  get numCarte() { return this.validerPanierFormGroup.get('carteDeCredit').get('numCarte'); }
  get codeSecurite() { return this.validerPanierFormGroup.get('carteDeCredit').get('codeSecurite'); }
  

  //methode pour valider le panier
  onSubmit() {

    if (this.validerPanierFormGroup.invalid) {
      this.validerPanierFormGroup.markAllAsTouched();
      return;
    }

    //on doit creer la commande
    let commande = new Commande();
    commande.prixTotal = this.prixTotal;
    commande.quantiteTotale = this.quantiteTotal;

    //on doit créer l'element du panier
    const allPanierElements = this.panierService.elementPaniers;
    //on doit creer le commandElement de lelement du panier
    let commandElements  : CommandeElement[] = allPanierElements.map(elementPan => new CommandeElement(elementPan));
    
    // let commandElements: CommandeElement[] = [];
    // for (let i = 0; i < allPanierElements.length; i++) {
    //   commandElements[i] = new CommandeElement(allPanierElements[i]);
    // }
    
    //on doit creer l'achat
    let achat = new Achat();

    //on doit creer remplir l'achat avec le client
    achat.utilisateur = this.validerPanierFormGroup.controls['client'].value;
  
    //on doit creer remplir l'achat avec le commandElement
    achat.commande = commande;
    achat.commandeElements = commandElements;

    // on doit creer le paymentInfo
    this.paymentInfo.amount = Math.round( this.prixTotal * 100);
    this.paymentInfo.currency = "USD";
    this.paymentInfo.receiptEmail = achat.utilisateur.email;

    //si le formulaire est valide on doit passer la commande
    // on créer lordre de payement
    // on confirm le payement
    //- on passe la commande

    if(!this.validerPanierFormGroup.invalid )
      {
      this.achatService.createPaymentIntent(this.paymentInfo).subscribe(
        (PayementIntentResponse) => {
          this.stripe.confirmCardPayment(PayementIntentResponse.client_secret,
            {
              
              payment_method: {
                card: this.cardElement,
                billing_details: {
                  name: this.validerPanierFormGroup.controls['client'].value.nom + " " + this.validerPanierFormGroup.controls['client'].value.prenom,
                  email: this.validerPanierFormGroup.controls['client'].value.email,
                  address: {
                    line1: this.validerPanierFormGroup.controls['client'].value.adresse,
                    city: 'Tunis',
                    state: 'TN',
                    country: 'TN',
                    postal_code: '99351'
                  }
                }
                
              }
            }, { handleActions: false })
            .then((result : any) => {
              if (result.error) {
                // Show error to your customer (e.g., insufficient funds)
                alert(`Il y a une erreur dans le payement : ${result.error.message}`);
              } else{
                // The payment has been processed!
                if (result.paymentIntent.status === 'succeeded') {
                  // Show a success message to your customer
                  alert('Félicitation, votre payement a été effectué avec succès');
                  //on passe la commande
                  this.achatService.passerCommande(achat).subscribe({
                    next: (response : any) => {
                      alert(`Votre commande a été passée avec succès \n Numéro de commande : ${response.numeroSuiviCommande}`);
                      //on vide le panier
                      this.viderPanier();
                    },
                    error: (err : any) => {
                      alert(`Il y a une erreur dans la passation de la commande : ${err}`);
                    }
                  }                    
                  );
                } else{
                  this.validerPanierFormGroup.markAllAsTouched();
                  return;
                }
              }
            });
        }
      );
    }
  }

  viderPanier() {

    //on vide le panier
    this.panierService.elementPaniers = [];
    this.panierService.totalquantite.next(0);
    this.panierService.totalprix.next(0);
    this.panierService.persisterPanierElement();

    //on vide le formulaire
    this.validerPanierFormGroup.reset();

    //on redirige vers la page d'accueil
    this.router.navigateByUrl("/produit");
  }



}
