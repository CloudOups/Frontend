import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PanierService } from 'src/app/services/produit/panier.service';

@Component({
  selector: 'app-valider-panier',
  templateUrl: './valider-panier.component.html',
  styleUrls: ['./valider-panier.component.css']
})

export class ValiderPanierComponent implements OnInit{
 
  validerPanierFormGroup :FormGroup;

  prixTotal : number = 0;
  quantiteTotal : number = 0;
 
  constructor( private formBuilder : FormBuilder,
                private panierService : PanierService,
  ){}
 
ngOnInit(): void {

  this.actualisationPanier();

  //ici dans les formcontrol tu dois penser a revenir mettre les infos de l'utilisateur connecté
 
  this.validerPanierFormGroup = this.formBuilder.group({
    //client
    client: this.formBuilder.group({
      nom: new FormControl('',[Validators.required,Validators.minLength(3)]),
      prenom: new FormControl('',[Validators.required,Validators.minLength(3)]),
      email: new FormControl('',
      [Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      adresse: new FormControl('',[Validators.required,Validators.minLength(4)]),
    }),
    //carte de credit
      carteDeCredit: this.formBuilder.group({
        typeCarte:  new FormControl('',[Validators.required]),
        numCarte:  new FormControl('',[Validators.required,Validators.pattern('^[0-9]{16}$')]),
        codeSecurite:  new FormControl('',[Validators.required,Validators.pattern('^[0-9]{4}$')]),
    })
  });
}
  actualisationPanier() {
    
    // on recupere quantite total
      this.panierService.totalquantite.subscribe(
      data => {this.quantiteTotal = data;
      console.log("QUANTITE TOTAL CHECKOUT : "+this.quantiteTotal);
      }
    );

    // on recupere le prix total
    this.panierService.totalprix.subscribe(
      (data) => {this.prixTotal = data;

      console.log("PRIX TOTAL CHECKOUT : "+this.prixTotal);
      }
    );
    this.panierService.calculerTotalPanier();
  }

//getter pour le client
get nom(){return this.validerPanierFormGroup.get('client').get('nom');}
get prenom(){return this.validerPanierFormGroup.get('client').get('prenom');}
get email(){return this.validerPanierFormGroup.get('client').get('email');}
get adresse(){return this.validerPanierFormGroup.get('client').get('adresse');}

//getter pour le carte de credit
get typeCarte(){return this.validerPanierFormGroup.get('carteDeCredit').get('typeCarte');}
get numCarte(){return this.validerPanierFormGroup.get('carteDeCredit').get('numCarte');}
get codeSecurite(){return this.validerPanierFormGroup.get('carteDeCredit').get('codeSecurite');}

//methode pour valider le panier
onSubmit(){
  console.log("client email : "+this.validerPanierFormGroup.get('client').value);

  if(this.validerPanierFormGroup.invalid){
    this.validerPanierFormGroup.markAllAsTouched();

  }
}

}
