import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produit } from 'src/app/Models/produit/produit';
import { PanierService } from 'src/app/services/produit/panier.service';
import { ProduitService } from 'src/app/services/produit/produit.service';

@Component({
  selector: 'app-back-list-produit',
  templateUrl: './back-list-produit.component.html',
  styleUrls: ['./back-list-produit.component.css']
})
export class BackListProduitComponent implements OnInit {



  //liste des produits
  produits?: Produit[] = [];

  //properties for pagination
  currentPage: number = 1;
  pageSize: number = 14;
  totalElements: number = 0;
  searchMode: boolean = false;

  //
  storage : Storage = sessionStorage;

  constructor(
    private produitService: ProduitService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    //this.listProduits();
    this.storage.setItem('userEmail', 'michel@gmail.com');
    //this.listProduits3();
    this.listProduits3();
    
  }

  listProduits() {
    this.produitService.getProductList().subscribe(
      data => {
        this.produits = data;
      }
    )
  }

  gererListeProduit(){
    this.searchMode = this.route.snapshot.paramMap.has('keyword');
    if(this.searchMode){
      const keyword = this.route.snapshot.paramMap.get('keyword');
      this.produitService.searchProduct(keyword).subscribe(
        data => { this.produits = data['content']; 
        });

    }else{
      this.listProduits3();
    }

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

  deleteProduit(idProduit: number) {
    this.produitService.deleteProduit(idProduit).subscribe(
      data => {
        console.log(data);
        this.listProduits3();
      },
      (error) => {  console.log("ERREUR SUPPRESSION: ",error); }
      );

    }

 /* ajouterAuPanier(produit: Produit) {
    console.log("ajouter au panier", produit);
    let elementPanier = new ElementPanier(produit); // Remove the argument from the constructor

    this.panierService.addToPanier(elementPanier);
  } */
}
