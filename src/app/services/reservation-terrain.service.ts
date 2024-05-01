import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReservationTerrain } from '../Models/Reservation/reservation-terrain';

@Injectable({
  providedIn: 'root'
})
export class ReservationTerrainService {

  readonly API_URL = "http://localhost:8089/pi";
  readonly ENDPOINT_RESERVATIONS_TERRAINS = "/reservation";

  constructor(private httpClient: HttpClient) { }

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

  // Method to update a reservation terrain
  updateReservationTerrain(reservationTerrain: ReservationTerrain): Observable<ReservationTerrain> {
    return this.httpClient.put<ReservationTerrain>(this.API_URL + this.ENDPOINT_RESERVATIONS_TERRAINS + "/update", reservationTerrain);
  }

  // Method to get reservation terrain by ID
  getReservationTerrainById(idRes: number): Observable<ReservationTerrain> {
    return this.httpClient.get<ReservationTerrain>(this.API_URL + this.ENDPOINT_RESERVATIONS_TERRAINS + "/get/idRes=" + idRes);
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
