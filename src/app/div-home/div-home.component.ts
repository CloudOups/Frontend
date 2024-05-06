import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TypeTerrain } from '../Models/Terrain/typeTerrain';
import { Terrain } from '../Models/Terrain/terrain';
import { TerrainService } from '../services/terrain.service';
import { ReservationTerrainService } from '../services/reservation-terrain.service';
@Component({
  selector: 'app-div-home',
  templateUrl: './div-home.component.html',
  styleUrls: ['./div-home.component.css']
})
export class DivHomeComponent {
  startTime!: string; // Property to store selected start time
endTime!: string;   // Property to store selected end time
selectedTypeTerrain!: TypeTerrain;
mostReser: Terrain[] = [];
url="http://localhost:4200/assets/img/terrains/"  

constructor(private router: Router,private rs: ReservationTerrainService) {}
navigateToReservation() {
  if (this.startTime!=null&& this.endTime&&this.selectedTypeTerrain) {
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
