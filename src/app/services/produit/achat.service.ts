import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Achat } from 'src/app/Models/produit/achat.model';
import { Commande } from 'src/app/Models/produit/commande.model';
import { CommandeElement } from 'src/app/Models/produit/commandeElement.model';
import { Utilisateur } from 'src/app/Models/produit/utilisateur.model';

@Injectable({
  providedIn: 'root'
})
export class AchatService {

  private achatUrl = "http://localhost:8089/pi/panier/passerCommande";
  constructor(private httpClient : HttpClient) { }

  passerCommande(achat : Achat): Observable<any>{
    console.log("JE SUIS DANS LE SERVICE ET LA VALEUR DE ACAHAT EST: ",achat);
    return this.httpClient.post<Achat>(this.achatUrl,achat);
  }

}
