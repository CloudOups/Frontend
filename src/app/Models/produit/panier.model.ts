import { Produit } from "./produit";

export class ElementPanier{
    id! : number;
    name! : string;
    prixUnitaire! : number;
    imageUrl! : string;
    quantite! : number;

    constructor(product: Produit) {
        this.id = product.numProd;
        this.name = product.nomProd;
        this.imageUrl = product.image;
        this.prixUnitaire = product.prix;

        this.quantite = 1;
    }
}