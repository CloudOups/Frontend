import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Achat } from 'src/app/Models/produit/achat.model';
import { Commande } from 'src/app/Models/produit/commande.model';
import { CommandeElement } from 'src/app/Models/produit/commandeElement.model';
import { PaymentInfo } from 'src/app/Models/produit/paymentInfo.model';
import { Utilisateur } from 'src/app/Models/produit/utilisateur.model';

@Injectable({
  providedIn: 'root'
})
export class AchatService {

  private achatUrl = "http://localhost:8089/pi/commande/add";

  private payementUrl = "http://localhost:8089/pi/commande/payment-intent";

  constructor(private httpClient : HttpClient) { }

  passerCommande(achat : Achat): Observable<any>{
    console.log("JE SUIS DANS LE SERVICE ET LA VALEUR DE ACAHAT EST: ",achat);
    return this.httpClient.post<Achat>(this.achatUrl,achat);
  }

  createPaymentIntent(paymentInfo : PaymentInfo): Observable<any>{

    return this.httpClient.post<PaymentInfo>(this.payementUrl,paymentInfo);
  }

}
