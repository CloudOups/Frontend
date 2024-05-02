import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipe } from '../Models/Equipe/equipe';
import { Page } from '../Models/Page.interface';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  readonly API_URL = "http://localhost:8089/pi";
  readonly ENDPOINT_EQUIPES = "/equipe";

  constructor(private httpClient: HttpClient) { }

  // Method to add an equipe
//  addEquipe(equipe: Equipe, userId: number): Observable<Equipe> {
//    return this.httpClient.post<Equipe>(this.API_URL + this.ENDPOINT_EQUIPES + "/add/" + userId, equipe);
 // }
  addEquipe(equipe: Equipe, userId: number): Observable<Equipe> {
    return this.httpClient.post<Equipe>(this.API_URL + this.ENDPOINT_EQUIPES + "/add/" + userId, equipe);
  }
  // Method to update an equipe
  updateEquipe(equipe: Equipe): Observable<Equipe> {
    return this.httpClient.put<Equipe>(this.API_URL + this.ENDPOINT_EQUIPES + "/update", equipe);
  }
  getAllPaginations(page: number, size: number): Observable<Page<Equipe>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    return this.httpClient.get<Page<Equipe>>(this.API_URL + this.ENDPOINT_EQUIPES +"/get/allEquipes", { params });
  }
  // Method to get an equipe by ID
  getEquipeById(idEquipe: number): Observable<Equipe> {
    return this.httpClient.get<Equipe>(this.API_URL + this.ENDPOINT_EQUIPES + "/get/" + idEquipe);
  }

  // Method to delete an equipe
  removeEquipe(idEquipe: number): Observable<void> {
    return this.httpClient.delete<void>(this.API_URL + this.ENDPOINT_EQUIPES + "/delete/" + idEquipe);
  }

  // Method to get all equipes
  getAllEquipes(): Observable<Equipe[]> {
    return this.httpClient.get<Equipe[]>(this.API_URL + this.ENDPOINT_EQUIPES + "/get/all");
  }

  // Method to send adhesion request for an equipe
  demanderAdhesionEquipe(idEquipe: number, idUser: number): Observable<Equipe> {
    return this.httpClient.put<Equipe>(this.API_URL + this.ENDPOINT_EQUIPES + "/demandeAdhesion/idequipe=" + idEquipe + "/idUser=" + idUser, {});
  }

  // Method to respond to adhesion request for an equipe
  traiterAdhesionEquipe(idEquipe: number, idUser: number, reponse: string): Observable<Equipe> {
    return this.httpClient.put<Equipe>(this.API_URL + this.ENDPOINT_EQUIPES + "/reponseAdhesion/idequipe=" + idEquipe + "/idUser=" + idUser + "/idreponse=" + reponse, {});
  }

  // Method to get an equipe by its name
  getEquipeByNom(nomEquipe: string): Observable<Equipe> {
    return this.httpClient.get<Equipe>(this.API_URL + this.ENDPOINT_EQUIPES + "/get/nom=" + nomEquipe);
  }
}
