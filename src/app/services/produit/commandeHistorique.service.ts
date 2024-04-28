import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HistoriqueCommande } from 'src/app/Models/produit/commandeHistorique.model';

@Injectable({
  providedIn: 'root'
})
export class CommandeHistoriqueService {

  private url = "http://localhost:8089/pi/commande/historique/";
  constructor( private httpClient : HttpClient) { }

  getCommandeHistorique(email : string): Observable<any>{
    return this.httpClient.get<any>(this.url+email);
  }
}

// interface pouur recouperer les donnée renvoé en Json de l'api
/* interface GetResponseCommandeHistorique{

    _embedded : {
      commandes : HistoriqueCommande[];
    } 

} */
