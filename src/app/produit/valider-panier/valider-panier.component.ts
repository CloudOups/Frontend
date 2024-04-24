import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Achat } from 'src/app/Models/produit/achat.model';
import { Commande } from 'src/app/Models/produit/commande.model';
import { CommandeElement } from 'src/app/Models/produit/commandeElement.model';
import { AchatService } from 'src/app/services/produit/achat.service';
import { PanierService } from 'src/app/services/produit/panier.service';

@Component({
  selector: 'app-valider-panier',
  templateUrl: './valider-panier.component.html',
  styleUrls: ['./valider-panier.component.css']
})

export class ValiderPanierComponent implements OnInit {

  validerPanierFormGroup: FormGroup;

  prixTotal: number = 0;
  quantiteTotal: number = 0;

  constructor(private formBuilder: FormBuilder,
    private panierService: PanierService,
    private achatService: AchatService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.actualisationPanier();

    //ici dans les formcontrol tu dois penser a revenir mettre les infos de l'utilisateur connecté

    this.validerPanierFormGroup = this.formBuilder.group({
      //client
      client: this.formBuilder.group({
        nom: new FormControl('', [Validators.required, Validators.minLength(3)]),
        prenom: new FormControl('', [Validators.required, Validators.minLength(3)]),
        email: new FormControl('',
          [Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
        adresse: new FormControl('', [Validators.required, Validators.minLength(4)]),
      }),
      //carte de credit
      carteDeCredit: this.formBuilder.group({
        typeCarte: new FormControl('', [Validators.required]),
        numCarte: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{16}$')]),
        codeSecurite: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{4}$')]),
      })
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
    console.log("client email : " + this.validerPanierFormGroup.get('client').value);

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

    //appel REST API pour passer la commande via le service achatService
    this.achatService.passerCommande(achat).subscribe({
      next: response => {
        alert(`Votre commande a été passée avec succès \n Numéro de commande : ${response.numeroSuiviCommande}`);

        //vider le panier
        this.viderPanier();
      },
      error: err => {
        alert(`Problème lors du passage de la commande : ${err.message}`);
      }
    } 
    );
  }


  viderPanier() {

    //on vide le panier
    this.panierService.elementPaniers = [];
    this.panierService.totalquantite.next(0);
    this.panierService.totalprix.next(0);

    //on vide le formulaire
    this.validerPanierFormGroup.reset();

    //on redirige vers la page d'accueil
    this.router.navigateByUrl("/produit");
  }



}
