import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  apiKey = '1634cd18fbcc5efb97ddaded3b951552' ;

  constructor(private http: HttpClient) { }

  getWeatherForDate(selectedDate: Date): Observable<any> {
    // Formatage de la date au format UNIX timestamp (en secondes)
    const timestamp = Math.round(selectedDate.getTime() / 1000);
    
    // Remplacez 'London' par le nom de votre ville ou les coordonnées géographiques (latitude, longitude)
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Ariana&dt=${timestamp}&appid=${this.apiKey}&units=metric`;

    return this.http.get(apiUrl);
  }
}
