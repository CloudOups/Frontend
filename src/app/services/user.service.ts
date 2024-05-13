import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Models/user/user' ;
import { environment } from '../../environments/environement';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = environment.api_Url + '/pi/api/v1/user';

  constructor(private http: HttpClient) {
    
  }
  private getHeaders(): HttpHeaders {
    const jwt = localStorage.getItem('jwt');

    return new HttpHeaders({
      Authorization: `Bearer ${jwt}`,
      'Content-Type': 'application/json'
    });
  }

  getCurrentUser(): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/current`, { headers: this.getHeaders() });
  }


  }
