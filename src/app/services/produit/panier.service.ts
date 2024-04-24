import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ElementPanier } from 'src/app/Models/produit/panier.model';

@Injectable({
  providedIn: 'root'
})
export class PanierService {


  elementPaniers: ElementPanier[] = [];
  totalprix: Subject<number> = new BehaviorSubject<number>(0);
  totalquantite: Subject<number> = new BehaviorSubject<number>(0);

  constructor() { }

  addToPanier(panierElt: ElementPanier) {
    //on verifie si on a un élément dans le panier
    let dejaExistDansPanier: boolean = false;
    let ElementExistantDansPanier: ElementPanier | undefined = undefined;

    if (this.elementPaniers.length > 0) {
      //on cherche lelement dans le panier grace a son ID
      ElementExistantDansPanier = this.elementPaniers.find(elt => elt.id == panierElt.id);

      // on verifie si on a trouvé quelqque chose
      dejaExistDansPanier = ElementExistantDansPanier != undefined;
    }

    if (dejaExistDansPanier) {
      //on incremente la quantite
      ElementExistantDansPanier!.quantite++
    } else {
      //on ajoute l'element dans le panier
      this.elementPaniers.push(panierElt);
    }
    //on met a jour le prix total et la quantite total
    this.calculerTotalPanier();

  }

  calculerTotalPanier() {
    let prixTotal = 0;
    let quantiteTotal = 0;
    
    
    for (let elt of this.elementPaniers) {
      prixTotal += elt.prixUnitaire * elt.quantite;
      quantiteTotal += elt.quantite;
    }
    //metre les nouvelle valeur
    this.totalprix.next(prixTotal);
    this.totalquantite.next(quantiteTotal);

    //gestion loo pour voir si sa marche
    this.logPanierData(prixTotal, quantiteTotal);
  }


  logPanierData(prixTotal : number, quantiteTotal : number) {
    console.log('Panier Data: ');
    for(let elt of this.elementPaniers){
      const subTotal = elt.prixUnitaire * elt.quantite;
      console.log(' Nom: ' + elt.name + ' Prix Unitaire: ' + elt.prixUnitaire + ' Quantite: ' + elt.quantite + ' Sous Total: ' + subTotal);
    }

    console.log('Prix Total: ' + prixTotal + ' Quantite Total: ' + quantiteTotal);
    console.log('----------------------'); 
  } 


  decrementQuantite(produitPanier: ElementPanier) {
    
    //on decremente la quantite
      produitPanier.quantite--;
      //on verifie si la quantite est inferieur a 0
      if(produitPanier.quantite == 0){
        //on supprime le produit du panier
        this.supprimerProduit(produitPanier);
      }else{
        //on recalcule le prix total et la quantite total
        this.calculerTotalPanier();
      }
  }

  supprimerProduit(produitPanier: ElementPanier) {
    //on recupere l'index de l'element a supprimer
    const index = this.elementPaniers.findIndex(elt => elt.id == produitPanier.id);
    
    //on verifie si l'element existe
    if(index > -1){
      //on supprime l'element du panier
      this.elementPaniers.splice(index, 1);
      //on recalcule le prix total et la quantite total
      this.calculerTotalPanier();
    }
  }

}
