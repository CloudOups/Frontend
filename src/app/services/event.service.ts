import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Event } from '../Models/Event/event';
import { Observable, catchError, throwError } from 'rxjs';
import { Ticket } from '../Models/Ticket/ticket';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private baseUrl = 'http://localhost:8089/pi/event'; 

  constructor(private http: HttpClient) { }

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.baseUrl}/get/all`).pipe(
      catchError(this.handleError)
    );
  }

  getEventsMostParticipation(): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.baseUrl}/get/mostparticipation`).pipe(
      catchError(this.handleError)
    );
  }

  getEventById(id: number): Observable<Event> {
    return this.http.get<Event>(`${this.baseUrl}/get/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  getCompleteEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.baseUrl}/get/complete`);
  }

  getIncompleteEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.baseUrl}/get/incomplete`);
  }

  getExpiredEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.baseUrl}/get/expired`);
  }

  getUpcomingEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.baseUrl}/get/upcoming`);
  }

  addEvent(event: any, image: File): Observable<any> {
    const formData = new FormData();
    formData.append('nomevent', event.nomevent);
    formData.append('img',image, image.name);
    
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');

    return this.http.post<any>(`${this.baseUrl}/add`, formData, { headers: headers });
}
  

 /* addEvent(Event: Event): Observable<Event> {
    return this.http.post<Event>(`${this.baseUrl}/add`, Event).pipe(
      catchError(this.handleError)
    );
  }*/

 
/*
  addEvent(formData: FormData): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/add`, formData);
  }*/


  updateEvent(Event: Event): Observable<Event> {
    return this.http.put<Event>(`${this.baseUrl}/update`, Event).pipe(
      catchError(this.handleError)
    );
  }

  deleteEvent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(error);
  }
}