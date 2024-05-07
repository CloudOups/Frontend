import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HistoriqueCommande } from 'src/app/Models/produit/commandeHistorique.model';
import { AuthServiceService } from '../auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class CommandeHistoriqueService {

  private url = "http://localhost:8089/pi/commande/historique/";
  constructor( private httpClient : HttpClient ,private authService: AuthServiceService) { }

  private getHeaders(): HttpHeaders {
    const jwt = localStorage.getItem('jwt');

    return new HttpHeaders({
      Authorization: `Bearer ${jwt}`,
      //'Content-Type': 'application/json'
    });
  }


  getCommandeHistorique(email : string): Observable<any>{
    return this.httpClient.get<any>(this.url+email, { headers: this.getHeaders()});
  }
}

// interface pouur recouperer les donnée renvoé en Json de l'api
/* interface GetResponseCommandeHistorique{

    _embedded : {
      commandes : HistoriqueCommande[];
    } 

} */
