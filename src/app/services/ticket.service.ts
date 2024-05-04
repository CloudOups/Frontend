import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Ticket } from '../Models/Ticket/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  
    private baseUrl = 'http://localhost:8089/pi/ticket'; 
  
    constructor(private http: HttpClient) { }
  
    getTickets(): Observable<Ticket[]> {
      return this.http.get<Ticket[]>(`${this.baseUrl}/get/all`).pipe(
        catchError(this.handleError)
      );
    }
  
    getTicketById(id: number): Observable<Ticket> {
      return this.http.get<Ticket>(`${this.baseUrl}/get/${id}`).pipe(
        catchError(this.handleError)
      );
    }

    getTicketsByEvent(idevent: number): Observable<Ticket[]> {
      return this.http.get<Ticket[]>(`${this.baseUrl}/getByEvent/${idevent}`).pipe(
        catchError(this.handleError)
      );
    }
  
    addTicket(ticket: Ticket, idevent: number): Observable<Ticket> {
      return this.http.post<Ticket>(`${this.baseUrl}/add/${idevent}`, ticket);
    }
    updateTicket(ticket: Ticket): Observable<Ticket> {
      return this.http.put<Ticket>(`${this.baseUrl}/update`, ticket).pipe(
        catchError(this.handleError)
      );
    }
  
    deleteTicket(id: number): Observable<void> {
      return this.http.delete<void>(`${this.baseUrl}/delete/${id}`).pipe(
        catchError(this.handleError)
      );
    }
  
    /* participateEvent(eventId: number, userId: number): Observable<Ticket> {
    const url = `${this.baseUrl}/participate/${eventId}/${userId}`;
    return this.http.post<Ticket>(url, {});
  }*/

  participateEvent(eventId: number): Observable<Ticket> {
    const url = `${this.baseUrl}/participate/${eventId}`;
    return this.http.post<Ticket>(url, {});
  }

  

    private handleError(error: any) {
      console.error('An error occurred:', error);
      return throwError(error);
    }
  
}
