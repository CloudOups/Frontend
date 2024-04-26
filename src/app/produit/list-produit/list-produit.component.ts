import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ElementPanier } from 'src/app/Models/produit/panier.model';
import { Produit } from 'src/app/Models/produit/produit';
import { PanierService } from 'src/app/services/produit/panier.service';
import { ProduitService } from 'src/app/services/produit/produit.service';

@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.css']
})
export class ListProduitComponent implements OnInit {


  //liste des produits
  produits?: Produit[] = [];

  //properties for pagination
  currentPage: number = 1;
  pageSize: number = 10;
  totalElements: number = 0;

  constructor(
    private produitService: ProduitService,
    private panierService: PanierService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    //this.listProduits();
    this.listProduits3();
    this.produitService.getUserEmail();
  }

  listProduits() {
    this.produitService.getProductList().subscribe(
      data => {
        this.produits = data;
        console.log("liste des produit: " + this.produits);
        console.log("liste des produit: " + data);
      }
    )
  }


  //apggination

  listProduits3() {
    this.produitService.getProductListPagination(this.currentPage - 1, this.pageSize).subscribe(
      data => {
        this.produits = data.content;
        this.totalElements = data.totalElements;
        this.currentPage = data.number + 1;
      });
  }

  ajouterAuPanier(produit: Produit) {
    console.log("ajouter au panier", produit);
    let elementPanier = new ElementPanier(produit); // Remove the argument from the constructor

    this.panierService.addToPanier(elementPanier);
  }
}
