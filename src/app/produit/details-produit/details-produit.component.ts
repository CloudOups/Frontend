import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ElementPanier } from 'src/app/Models/produit/panier.model';
import { Produit } from 'src/app/Models/produit/produit';
import { PanierService } from 'src/app/services/produit/panier.service';
import { ProduitService } from 'src/app/services/produit/produit.service';

@Component({
  selector: 'app-details-produit',
  templateUrl: './details-produit.component.html',
  styleUrls: ['./details-produit.component.css']
})
export class DetailsProduitComponent implements OnInit {

  produit : Produit = new Produit();

  constructor(private produitService : ProduitService,
                private route : ActivatedRoute,
                private panierService : PanierService) { }
  
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.handleProductDetails();
    });
  }

  handleProductDetails() {
    // get the "id" param string. convert string to a number using the "+" symbol
    const theProductId: number = +this.route.snapshot.paramMap.get('id');
    console.log("voici l'id qui arrive: ", theProductId);

    this.produitService.getProduct(theProductId).subscribe(
      data => {
        this.produit = data;
      }
    )
  }


addToPanier() {
  console.log(`Adding to panier: ${this.produit.nomProd}, ${this.produit.prix}`);

  const elementPanier = new ElementPanier(this.produit);
  this.panierService.addToPanier(elementPanier);
}
}

  


