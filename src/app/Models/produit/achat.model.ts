import { Commande } from "./commande.model";
import { CommandeElement } from "./commandeElement.model";
import { Utilisateur } from "./utilisateur.model";

export class Achat {

    utilisateur! : Utilisateur;
    commande! : Commande;
 //   numCarteCredit! : string;
    //autre elements
    commandeElements : CommandeElement[];
}