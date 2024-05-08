import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  constructor(private http: HttpClient) { }
  


  getWeatherForDate(selectedDate: Date): Observable<any> {
   const apiKey = '1634cd18fbcc5efb97ddaded3b951552' ;

    // Formatage de la date au format UNIX timestamp (en secondes)
    const timestamp = Math.round(selectedDate.getTime() / 1000);
    console.log("aaaaaaaaaa"+timestamp)
    // Remplacez 'London' par le nom de votre ville ou les coordonnées géographiques (latitude, longitude)
  //const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=Ariana&dt=" + timestamp + "&appid=" + this.apiKey + "&units=metric";
  const apiUrl="https://api.openweathermap.org/data/2.5/forecast?lat=36.9833&lon=10.1167&dt="+ timestamp +"&appid="+ apiKey+"&units=metric";
  
  return this.http.get(apiUrl);
  }

}
