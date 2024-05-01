import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TypeTerrain } from '../Models/Terrain/typeTerrain';
import { Terrain } from '../Models/Terrain/terrain';
import { TerrainService } from '../services/terrain.service';
import { ReservationTerrainComponent } from '../reservation-terrain/reservation-terrain.component';
import { ReservationTerrainService } from '../services/reservation-terrain.service';

@Component({
  selector: 'app-choisir-terrain',
  templateUrl: './choisir-terrain.component.html',
  styleUrls: ['./choisir-terrain.component.css']
})
export class ChoisirTerrainComponent {
  endTime!:string
  startTime!:string
  typeTerrain!:TypeTerrain
  terrains!: Terrain []
  prixReser!:number
  mostReser!:Terrain
  url="http://localhost:4200/assets/img/terrains/"  

constructor(private act :ActivatedRoute,private terrainService:TerrainService,private reservationTerrainService :ReservationTerrainService ){}
ngOnInit(){
  console.log("on init ......")
  this.endTime = this.act.snapshot.params['endTime'];
  this.startTime = this.act.snapshot.params['startTime'];
  this.typeTerrain = this.act.snapshot.params['typeTerrain']; 
  this.terrains = this.act.snapshot.params['terrains'];
  this.Check()
  this.Calcule();
  this.show()
}
attachImageUrl() {
  // Loop through each terrain and attach URL to the image filename
  this.terrains.forEach(terrain => {
    terrain.imageTerrain = this.url + terrain.imageTerrain;
  });
}
Calcule(){
  this.reservationTerrainService.calculateReservationPrice(this.startTime,this.endTime).subscribe(
    (resultat: number) => {
      this.prixReser = resultat;
    },
    (error) => {
      console.error("Une erreur s'est produite lors du calcul du prix :", error);
    }
  )
}
Check(){
  this.terrainService.checkAvailabilityBySport(this.startTime,this.endTime,this.typeTerrain).subscribe(response => {
    this.terrains = response;
    this.attachImageUrl(); // Call a method to attach URL to image filenames

    console.log('listeBySport', response);}
  );}
  show(){
    this.reservationTerrainService.getMostReservedTerrain(this.typeTerrain).subscribe(response => {
      this.mostReser= response;
        console.log('mostReserved', response);
})
   }

}
