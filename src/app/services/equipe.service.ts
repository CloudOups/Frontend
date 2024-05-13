import { HttpClient, HttpParams ,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipe } from '../Models/Equipe/equipe';
import { Page } from '../Models/Page.interface';
import { User } from '../Models/user/user';
import { environment } from '../../environments/environement';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  readonly API_URL = environment.api_Url;
  readonly ENDPOINT_EQUIPES = "/equipe";

  constructor(private httpClient: HttpClient) { }
  private getHeaders(): HttpHeaders {
    const jwt = localStorage.getItem('jwt');
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');

    return new HttpHeaders({
      Authorization: `Bearer ${jwt}`,
     // 'Content-Type': 'application/json'
    });
  }

  // Method to add an equipe
//  addEquipe(equipe: Equipe, userId: number): Observable<Equipe> {
//    return this.httpClient.post<Equipe>(this.API_URL + this.ENDPOINT_EQUIPES + "/add/" + userId, equipe);
 // }
  addEquipe(equipe: Equipe, userId: number,tournoiId:number): Observable<Equipe> {
    return this.httpClient.post<Equipe>(this.API_URL + this.ENDPOINT_EQUIPES + "/add/" + userId+"/tour="+tournoiId, equipe ,{ headers: this.getHeaders()});
  }
  // Method to update an equipe
  updateEquipe(equipe: Equipe): Observable<Equipe> {
    return this.httpClient.put<Equipe>(this.API_URL + this.ENDPOINT_EQUIPES + "/update", equipe,{ headers: this.getHeaders()});
  }
  getAllPaginations(page: number, size: number): Observable<Page<Equipe>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    return this.httpClient.get<Page<Equipe>>(this.API_URL + this.ENDPOINT_EQUIPES +"/get/allEquipes", { params , headers: this.getHeaders()});
  }
  // Method to get an equipe by ID
  getEquipeById(idEquipe: number): Observable<Equipe> {
    return this.httpClient.get<Equipe>(this.API_URL + this.ENDPOINT_EQUIPES + "/get/" + idEquipe,{ headers: this.getHeaders()});
  }

  // Method to delete an equipe
  removeEquipe(idEquipe: number): Observable<void> {
    return this.httpClient.delete<void>(this.API_URL + this.ENDPOINT_EQUIPES + "/delete/" + idEquipe,{ headers: this.getHeaders()});
  }

  // Method to get all equipes
  getAllEquipes(): Observable<Equipe[]> {
    return this.httpClient.get<Equipe[]>(this.API_URL + this.ENDPOINT_EQUIPES + "/get/all",{ headers: this.getHeaders()});
  }
   // Method to send adhesion request for an equipe
   demandeEquipe(idEquipe: number, user: User): Observable<Equipe> {
    return this.httpClient.put<Equipe>(this.API_URL + this.ENDPOINT_EQUIPES + "/demandeAdhesion/idequipe=" + idEquipe ,user ,{ headers: this.getHeaders()});
  }


  // Method to respond to adhesion request for an equipe
  traiterEquipe(idEquipe: number, idUser: number, reponse: string): Observable<Equipe> {
    return this.httpClient.put<Equipe>(this.API_URL + this.ENDPOINT_EQUIPES + "/reponseAdhesion/idequipe=" + idEquipe + "/idUser=" + idUser + "/idreponse=" + reponse,{ headers: this.getHeaders()});
  }

  // Method to get an equipe by its name
  getEquipeByNom(nomEquipe: string): Observable<Equipe> {
    return this.httpClient.get<Equipe>(this.API_URL + this.ENDPOINT_EQUIPES + "/get/nom=" + nomEquipe,{ headers: this.getHeaders()});
  }
  getEquipeByNumTournoi(numTournoi: number): Observable<Equipe[]> {
    return this.httpClient.get<Equipe[]>(`${this.API_URL}${this.ENDPOINT_EQUIPES}/get/numTournoi/${numTournoi}`, { headers: this.getHeaders() });
  }
}
