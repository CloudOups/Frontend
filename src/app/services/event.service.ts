import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Event } from '../Models/Event/event';
import { Observable, catchError, throwError } from 'rxjs';
import { AuthServiceService } from './auth-service.service';
import { User } from '../Models/user/user';
import { Page } from '../Models/Page.interface';
import { environment } from '../../environments/environement';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private baseUrl = environment.api_Url+'/pi/event'; 

  constructor(private http: HttpClient,private authService: AuthServiceService) { }

  private getHeaders(): HttpHeaders {
    const jwt = localStorage.getItem('jwt');

    return new HttpHeaders({
      Authorization: `Bearer ${jwt}`,
      //'Content-Type': 'application/json'
    });
  }

  afficherJoursRestantsPourEvenements(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/remaining-days`, { headers: this.getHeaders()}).pipe(
      catchError(this.handleError)
    );
  }

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.baseUrl}/get/all` , { headers: this.getHeaders()}).pipe(
      catchError(this.handleError)
    );
  }

  getEventsMostParticipation(): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.baseUrl}/get/mostparticipation` , { headers: this.getHeaders()}).pipe(
      catchError(this.handleError)
    );
  }

  getEventById(id: number): Observable<Event> {
    return this.http.get<Event>(`${this.baseUrl}/get/${id}` , { headers: this.getHeaders()}).pipe(
      catchError(this.handleError)
    );
  }

  getCompleteEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.baseUrl}/get/complete`, { headers: this.getHeaders()});
  }

  getIncompleteEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.baseUrl}/get/incomplete`, { headers: this.getHeaders()});
  }

  getExpiredEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.baseUrl}/get/expired`, { headers: this.getHeaders()});
  }

  getUpcomingEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.baseUrl}/get/upcoming`, { headers: this.getHeaders()});
  }


  getParticipationHistory(user: User): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.baseUrl}/get/history`, { headers: this.getHeaders() });
  }

  getAllEvents(page: number, size: number): Observable<Page<Event>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    return this.http.get<Page<Event>>(this.baseUrl+"/get/withpagination", { params , headers: this.getHeaders()});
  }


  recommanderEvenements(user: User): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.baseUrl}/recommandations`,{ headers: this.getHeaders() });
  }

  addEvent(event: any, image: File): Observable<any> {
    const formData = new FormData();
    formData.append('nomevent', event.nomevent);
    formData.append('img',image, image.name);
    formData.append('categorie', event.categorie);
    formData.append('dateDebut', event.dateDebut);
    formData.append('dateFin', event.dateFin);
    formData.append('location', event.location);
    formData.append('nbParticipants', event.nbParticipants.toString());
    
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');

    return this.http.post<any>(`${this.baseUrl}/add`, formData, { headers: this.getHeaders()});
}
  

  updateEvent(Event: Event): Observable<Event> {
    return this.http.put<Event>(`${this.baseUrl}/update`, Event, { headers: this.getHeaders()}).pipe(
      catchError(this.handleError)
    );
  }

  deleteEvent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`, { headers: this.getHeaders()}).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(error);
  }
}