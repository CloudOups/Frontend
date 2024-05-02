import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReservationTerrain } from '../Models/Reservation/reservation-terrain';
import { Terrain } from '../Models/Terrain/terrain';
import { TypeTerrain } from '../Models/Terrain/typeTerrain';
import { Page } from '../Models/Page.interface';


@Injectable({
  providedIn: 'root'
})
export class ReservationTerrainService {

  readonly API_URL = "http://localhost:8089/pi";
  readonly ENDPOINT_RESERVATIONS_TERRAINS = "/reservation";

  constructor(private httpClient: HttpClient) { }
  getAllReservations(page: number, size: number ,sortBy:string|null): Observable<Page<ReservationTerrain>> {
    var params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
if (sortBy) {
  params = params.set('sortBy', sortBy);
}

    return this.httpClient.get<Page<ReservationTerrain>>(this.API_URL + this.ENDPOINT_RESERVATIONS_TERRAINS +"/get/allreservations", { params });
  }
  getReservationsSortUser(page: number, size: number): Observable<Page<ReservationTerrain>> {
    const params = new HttpParams()
    .set('page', page.toString())
    .set('size', size.toString());
    return this.httpClient.get<Page<ReservationTerrain>>(this.API_URL + this.ENDPOINT_RESERVATIONS_TERRAINS+"/reservations-by-user", { params });
  }
  getReservationsSortDatedebut(page: number, size: number): Observable<Page<ReservationTerrain>> {
    const params = new HttpParams()
    .set('page', page.toString())
    .set('size', size.toString());
    return this.httpClient.get<Page<ReservationTerrain>>(this.API_URL + this.ENDPOINT_RESERVATIONS_TERRAINS+"/reservations-by-datedebut", { params });
  }
  getReservationsSortDatefin(page: number, size: number): Observable<Page<ReservationTerrain>> {
    const params = new HttpParams()
    .set('page', page.toString())
    .set('size', size.toString());
    return this.httpClient.get<Page<ReservationTerrain>>(this.API_URL + this.ENDPOINT_RESERVATIONS_TERRAINS+"/reservations-by-datefin", { params });
  }
  getReservationsSortTypeRes(page: number, size: number): Observable<Page<ReservationTerrain>> {
    const params = new HttpParams()
    .set('page', page.toString())
    .set('size', size.toString());
    return this.httpClient.get<Page<ReservationTerrain>>(this.API_URL + this.ENDPOINT_RESERVATIONS_TERRAINS+"/reservations-by-typeRes", { params });
  }
  getReservationsSortNomTerrain(page: number, size: number): Observable<Page<ReservationTerrain>> {
    const params = new HttpParams()
    .set('page', page.toString())
    .set('size', size.toString());
    return this.httpClient.get<Page<ReservationTerrain>>(this.API_URL + this.ENDPOINT_RESERVATIONS_TERRAINS+"/reservations-by-nomTerrain", { params });
  }
  getReservationsSortEtatRes(page: number, size: number): Observable<Page<ReservationTerrain>> {
    const params = new HttpParams()
    .set('page', page.toString())
    .set('size', size.toString());
    return this.httpClient.get<Page<ReservationTerrain>>(this.API_URL + this.ENDPOINT_RESERVATIONS_TERRAINS+"/reservations-by-etatRes", { params });
  }
  // Method to retrieve all reservation terrains
  getReservationTerrains(): Observable<ReservationTerrain[]> {
    return this.httpClient.get<ReservationTerrain[]>(this.API_URL + this.ENDPOINT_RESERVATIONS_TERRAINS + "/get/all");
  }

  // Method to add a reservation terrain
  addReservationTerrain(reservationTerrain: ReservationTerrain, userId: number, terrainId: number): Observable<ReservationTerrain> {
    return this.httpClient.post<ReservationTerrain>(this.API_URL + this.ENDPOINT_RESERVATIONS_TERRAINS + "/add/idUser=/" + userId + "/idTerrain=/" + terrainId, reservationTerrain);
  }
  calculateReservationPrice(datedebut: string, datefin: string): Observable<number> {
    return this.httpClient.get<number>(`${this.API_URL}${this.ENDPOINT_RESERVATIONS_TERRAINS}/calculateReservationPrice/datedebut=${datedebut}/datefin=${datefin}`);
  }

  getMostReservedTerrain(typeTerrain :TypeTerrain): Observable<Terrain> {
    return this.httpClient.get<Terrain>(this.API_URL + this.ENDPOINT_RESERVATIONS_TERRAINS+"/most-reserved-terrain/"+typeTerrain);
  }
  getReservationsByUser(userId: number): Observable<ReservationTerrain> {
    return this.httpClient.get<ReservationTerrain>(this.API_URL + this.ENDPOINT_RESERVATIONS_TERRAINS+"/get/ReservationbyUserId/"+userId);
  }

  // Method to update a reservation terrain
  updateReservationTerrain(reservationTerrain: ReservationTerrain): Observable<ReservationTerrain> {
    return this.httpClient.put<ReservationTerrain>(this.API_URL + this.ENDPOINT_RESERVATIONS_TERRAINS + "/update", reservationTerrain);
  }

  // Method to get reservation terrain by ID
  getReservationTerrainById(idRes: number): Observable<ReservationTerrain> {
    return this.httpClient.get<ReservationTerrain>(this.API_URL + this.ENDPOINT_RESERVATIONS_TERRAINS + "/get/ReservationbyUserId/" + idRes);
  }

  // Method to delete a reservation terrain
  removeReservationTerrain(idRes: number): Observable<void> {
    return this.httpClient.delete<void>(this.API_URL + this.ENDPOINT_RESERVATIONS_TERRAINS + "/delete/idRes=" + idRes);
  }

  // Method to get reservation terrains by reservation type
  getReservationTerrainsByType(typeRes: string): Observable<ReservationTerrain[]> {
    return this.httpClient.get<ReservationTerrain[]>(this.API_URL + this.ENDPOINT_RESERVATIONS_TERRAINS + "/get/typeRes=/" + typeRes);
  }

  // Method to get reservation terrains by terrain name
  getReservationTerrainsByTerrainName(nomTerrain: string): Observable<ReservationTerrain[]> {
    return this.httpClient.get<ReservationTerrain[]>(this.API_URL + this.ENDPOINT_RESERVATIONS_TERRAINS + "/get/nomTerrain=/" + nomTerrain);
  }
}
