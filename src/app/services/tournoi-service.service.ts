import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Tournoi } from '../Models/Tournoi/tournoi';

@Injectable({
  providedIn: 'root'
})
export class TournoiService {

  private baseUrl = 'http://localhost:8089/pi/tournoi'; 

  constructor(private http: HttpClient) { }

  getTournois(): Observable<Tournoi[]> {
    return this.http.get<Tournoi[]>(`${this.baseUrl}/get/all`).pipe(
      catchError(this.handleError)
    );
  }

  getTournoiById(id: number): Observable<Tournoi> {
    return this.http.get<Tournoi>(`${this.baseUrl}/get/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  /*addTournoiFromEvent(tournoi: Tournoi, eventId: number): Observable<Tournoi> {
    return this.http.post<Tournoi>(`${this.baseUrl}/addtournoireservation/${eventId}`, tournoi);
  }*/

  addTournoi(tournoi: Tournoi): Observable<Tournoi> {
    return this.http.post<Tournoi>(`${this.baseUrl}/addtournoireservation`, tournoi).pipe(
      catchError(this.handleError)
    );
  }

  updateTournoi(tournoi: Tournoi): Observable<Tournoi> {
    return this.http.put<Tournoi>(`${this.baseUrl}/update`, tournoi).pipe(
      catchError(this.handleError)
    );
  }

  deleteTournoi(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(error);
  }
}
