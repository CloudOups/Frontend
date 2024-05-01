import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TypeTerrain } from '../Models/Terrain/typeTerrain';
import { Terrain } from '../Models/Terrain/terrain';
import { TerrainService } from '../services/terrain.service';

@Component({
  selector: 'app-div-home',
  templateUrl: './div-home.component.html',
  styleUrls: ['./div-home.component.css']
})
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