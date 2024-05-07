import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TypeTerrain } from '../Models/Terrain/typeTerrain';
import { Terrain } from '../Models/Terrain/terrain';
import { TerrainService } from '../services/terrain.service';
import { ReservationTerrainService } from '../services/reservation-terrain.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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

constructor(private router: Router,private rs: ReservationTerrainService,http: HttpClient) {}
navigateToReservation() {
  if (this.time!=null&&this.startTime!=null&& this.endTime&&this.selectedTypeTerrain) {
    this.startTime=this.time+'T'+this.startTime
    this.endTime=this.time+'T'+this.endTime


  } else {
    console.error("Please select both start and end times.");
}}
ngOnInit(): void {
  this.show(); // Call the show method when the component initializes
  
}
typeTerrainOptions = Object.values(TypeTerrain); // Array of enum values
terrains!: Terrain []
show(): void {
  this.rs.getMost3ReservedTerrains().subscribe(response => {
    this.mostReser = response;
    console.log('mostReserved', response);
  });
}


}
