import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Ticket } from '../Models/Ticket/ticket';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  
  private baseUrl = 'http://localhost:8089/pi/ticket'; 

  constructor(private http: HttpClient,private authService: AuthServiceService) { }

  private getHeaders(): HttpHeaders {
    const jwt = localStorage.getItem('jwt');

    return new HttpHeaders({
      Authorization: `Bearer ${jwt}`,
      'Content-Type': 'application/json'
    });
  }

  
    getTickets(): Observable<Ticket[]> {
      return this.http.get<Ticket[]>(`${this.baseUrl}/get/all`, { headers: this.getHeaders()}).pipe(
        catchError(this.handleError)
      );
    }
  
    getTicketById(id: number): Observable<Ticket> {
      return this.http.get<Ticket>(`${this.baseUrl}/get/${id}`, { headers: this.getHeaders()}).pipe(
        catchError(this.handleError)
      );
    }

    getTicketsByEvent(idevent: number): Observable<Ticket[]> {
      return this.http.get<Ticket[]>(`${this.baseUrl}/getByEvent/${idevent}`, { headers: this.getHeaders()}).pipe(
        catchError(this.handleError)
      );
    }
  
    addTicket(ticket: Ticket, idevent: number): Observable<Ticket> {
      return this.http.post<Ticket>(`${this.baseUrl}/add/${idevent}`, ticket, { headers: this.getHeaders()});
    }

    
    updateTicket(ticket: Ticket): Observable<Ticket> {
      return this.http.put<Ticket>(`${this.baseUrl}/update`, ticket , { headers: this.getHeaders()}).pipe(
        catchError(this.handleError)
      );
    }
  
    deleteTicket(id: number): Observable<void> {
      return this.http.delete<void>(`${this.baseUrl}/delete/${id}`, { headers: this.getHeaders()}).pipe(
        catchError(this.handleError)
      );
    }
  
    /* participateEvent(eventId: number, userId: number): Observable<Ticket> {
    const url = `${this.baseUrl}/participate/${eventId}/${userId}`;
    return this.http.post<Ticket>(url, {});
  }*/

  participateEvent(eventId: number): Observable<Ticket> {
    const url = `${this.baseUrl}/participate/${eventId}`;
    return this.http.post<Ticket>(url, { headers: this.getHeaders()});
  }

  

    private handleError(error: any) {
      console.error('An error occurred:', error);
      return throwError(error);
    }
  
}
