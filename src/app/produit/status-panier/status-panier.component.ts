import { Component, OnInit } from '@angular/core';
import { PanierService } from 'src/app/services/produit/panier.service';

@Component({
  selector: 'app-status-panier',
  templateUrl: './status-panier.component.html',
  styleUrls: ['./status-panier.component.css']
})
export class StatusPanierComponent implements OnInit{

  prixTotal: number = 0;
  quantiteTotal : number = 0;

  constructor(private panierService : PanierService) { }

  ngOnInit(): void {
    this.updatePanierStatus();
  }

  updatePanierStatus(){
    //recuperer to the cart totalPrice
    this.panierService.totalprix.subscribe(
      data => {this.prixTotal = data;
      console.log("prix total recuperer: " + this.prixTotal)
    }
    );

    //recuperer to the cart totalQuantity
    this.panierService.totalquantite.subscribe(
      data => { this.quantiteTotal = data;
      console.log("quantite total recuperer: " + this.quantiteTotal)
      }
    );
  }

}
