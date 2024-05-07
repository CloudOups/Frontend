import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TypeTerrain } from '../Models/Terrain/typeTerrain';
import { Terrain } from '../Models/Terrain/terrain';
import { TerrainService } from '../services/terrain.service';
//import { WeatherServiceService } from '../services/weather-service.service';
//import axios from 'axios';


@Component({
  selector: 'app-div-home',
  templateUrl: './div-home.component.html',
  styleUrls: ['./div-home.component.css']
})
/*export class DivHomeComponent {startTime!: string; // Property to store selected start time
  endTime!: string;   // Property to store selected end time
  selectedTypeTerrain!: TypeTerrain;
  
  weatherData: any; // Property to store weather data
  selectedDate: Date = new Date();

  constructor(private router: Router, private terrainService: TerrainService, private weatherService: WeatherServiceService) {}

  ngOnInit(): void {
    this.getWeatherData();
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

  navigateToReservation() {
    if (this.startTime && this.endTime && this.selectedTypeTerrain) {
       this.selectedDate = new Date(this.startTime); // Convertir la chaîne en objet Date
      this.weatherService.getWeatherForDate(this.selectedDate).subscribe((weather) => {
        this.weatherData = weather; // Assigner les données météorologiques retournées par l'API à la propriété weatherData
        console.log("Météo pour la date sélectionnée:", weather);
      });
    } else {
      console.error("Veuillez sélectionner à la fois l'heure de début et l'heure de fin.");
    }
  }


  typeTerrainOptions = Object.values(TypeTerrain); 
  terrains!: Terrain [];
}*/
export class DivHomeComponent {
  startTime!: string; // Property to store selected start time
endTime!: string;   // Property to store selected end time
selectedTypeTerrain!: TypeTerrain;
constructor(private router: Router,private terrainService: TerrainService) {}
navigateToReservation() {
  if (this.startTime!=null&& this.endTime&&this.selectedTypeTerrain) {
  } else {
    console.error("Please select both start and end times.");
}}

typeTerrainOptions = Object.values(TypeTerrain); // Array of enum values
terrains!: Terrain []
}
