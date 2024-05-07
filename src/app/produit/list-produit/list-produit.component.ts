import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
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

//***************************** */
keywordd = new FormControl();
productss: Produit[] = [];
filteredProducts: Produit[] = [];

//***************************** */

  //liste des produits
  produits?: Produit[] = [];

  //properties for pagination
  currentPage: number = 1;
  pageSize: number = 8;
  totalElements: number = 0;
  searchMode: boolean = false;

  //
  storage : Storage = sessionStorage;

  constructor(
    private produitService: ProduitService,
    private panierService: PanierService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    //this.listProduits();
    this.storage.setItem('userEmail', 'michelscoot@gmail.com');
    this.storage.setItem('userNom', 'Michel');
    this.storage.setItem('userPrenom', 'bodol');
    //this.listProduits3();
    this.gererListeProduit();
    
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

  ajouterAuPanier(produit: Produit) {
    console.log("ajouter au panier", produit);
    let elementPanier = new ElementPanier(produit); // Remove the argument from the constructor

    this.panierService.addToPanier(elementPanier);
  }


  onSearch(event: Event): void {
    const keyword = (event.target as HTMLInputElement).value; // Récupérer la valeur de l'élément HTMLInputElement
    if (keyword) {
      this.filteredProducts = this.produits.filter(product => {
        return product.nomProd.toLowerCase().includes(keyword.toLowerCase());
      });
    } else {
      this.filteredProducts = [];
    }
  }

  selectProduct(product: Produit): void {
    console.log('Selected Product:', product);
    // Faites quelque chose avec le produit sélectionné, par exemple afficher les détails
  }
}
