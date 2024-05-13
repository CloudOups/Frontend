import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environement';


@Injectable({
  providedIn: 'root',
})
export class ChatbotserviceService {
  private baseUrl = environment.api_Url+"/pi"+'/chatbot/send';

  constructor(private http: HttpClient) {}

  sendMessage(message: string): Observable<string> {
    // Retrieve token from local storage
    const jwt = localStorage.getItem('jwt');

    // Set headers with token
    const headers = new HttpHeaders({
      Authorization: `Bearer ${jwt}`,
      'Content-Type': 'application/json',
    });

    // Include headers in the request
    return this.http.post<string>(this.baseUrl, message, { headers: headers });
  }
}
