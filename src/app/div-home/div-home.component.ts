import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TypeTerrain } from '../Models/Terrain/typeTerrain';
import { Terrain } from '../Models/Terrain/terrain';
import { TerrainService } from '../services/terrain.service';
import { ReservationTerrainService } from '../services/reservation-terrain.service';
import { HttpClient } from '@angular/common/http';
import { Observable, timestamp } from 'rxjs';
import { WeatherServiceService } from '../services/weather-service.service';
import axios from 'axios';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-div-home',
  templateUrl: './div-home.component.html',
  styleUrls: ['./div-home.component.css']
})
export class DivHomeComponent {
  time!:string;
startTime!: string; // Property to store selected start time
endTime!: string;   // Property to store selected end time
selectedTypeTerrain!: TypeTerrain;
startTime2!: string; // Property to store selected start time
endTime2!: string;   // Property to store selected end time

mostReser: Terrain[] = [];
url="http://localhost:4200/assets/img/terrains/"  

constructor(private router: Router,private rs: ReservationTerrainService,http: HttpClient,private weatherService: WeatherServiceService) {}
navigateToReservation() {
  if (this.time!=null&&this.startTime!=null&& this.endTime&&this.selectedTypeTerrain) {
    this.startTime=this.time+'T'+this.startTime
    this.endTime=this.time+'T'+this.endTime

    const time1 = new Date(this.startTime);
    const time2 = new Date(this.endTime);
if (time1>time2)
Swal.fire("Time debut ne peut pas etre inferieure a temps de fin")
this.resetTimes();
  } else {
    console.error("Please select both start and end times.");
}}
resetTimes(): void {
  this.startTime = '';
  this.endTime = '';
}
ngOnInit(): void {
  this.show(); // Call the show method when the component initializes
  //this.getTime()
 // this.getWeatherData();

}
typeTerrainOptions = Object.values(TypeTerrain); // Array of enum values
terrains!: Terrain []
show(): void {
  this.rs.getMost3ReservedTerrains().subscribe(response => {
    this.mostReser = response;
    console.log('mostReserved', response);
  });
}

weatherData: any; // Property to store weather data
selectedDate: Date = new Date();

 updateWeatherData() {
  // Convert this.startTime from string to date
  const startTimeDate = new Date(this.time+'T'+this.startTime);
  console.log("abababayyyyyyy"+startTimeDate)
  // Check if startTimeDate is a valid date object
  if (!isNaN(startTimeDate.getTime())) {
    // If startTimeDate is a valid date, use it to get weather data
    this.weatherService.getWeatherForDate(startTimeDate).subscribe((weather) => {
      console.log('bababab:',startTimeDate);

      this.weatherData = weather;
      const timestamp = Math.round(startTimeDate.getTime() / 1000);
      const apiKey = '1634cd18fbcc5efb97ddaded3b951552' ;

      console.log("Weather for selected date:", startTimeDate);
     const apiUrl="https://api.openweathermap.org/data/2.5/forecast?lat=36.9833&lon=10.1167&dt="+ timestamp +"&appid="+ apiKey+"&units=metric";
      axios.get(apiUrl)
      .then((response) => {
        this.weatherData = response.data;
        console.log('Données météorologiques:', this.weatherData);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des données météorologiques:', error);
      });
      console.log("Weather for selected date:", weather);
    });
  } else {
    console.error("Invalid start time:", startTimeDate);
  }
}

getTime(){
  this.weatherService.getWeatherForDate(this.selectedDate).subscribe((weather) => {
    this.weatherData = weather; // Assigner les données météorologiques retournées par l'API à la propriété weatherData
    console.log("Météo pour la date sélectionnée:", weather);
  });
}
getWeatherData() {
  const API_KEY = '1634cd18fbcc5efb97ddaded3b951552'; 
  const city = 'Ariana'; 
  
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  axios.get(apiUrl)
    .then((response) => {
      this.weatherData = response.data;
      console.log('Données météorologiques:', this.weatherData);
    })
    .catch((error) => {
      console.error('Erreur lors de la récupération des données météorologiques:', error);
    });
}





}
