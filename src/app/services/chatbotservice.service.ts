import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const BASE_URL = ['http://localhost:8089/'];

@Injectable({
  providedIn: 'root',
})
export class ChatbotserviceService {
  private baseUrl = 'http://localhost:8089/chatbot/send';

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
