import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TypeTerrain } from '../Models/Terrain/typeTerrain';
import { Terrain } from '../Models/Terrain/terrain';
import { TerrainService } from '../services/terrain.service';
import { ReservationTerrain } from '../Models/Reservation/reservation-terrain';
import { ReservationTerrainService } from '../services/reservation-terrain.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.css']
})
export class AddReservationComponent {
  endTime!:string
  startTime!:string
  typeTerrain!:TypeTerrain
  numTerrain!:number
constructor(private act :ActivatedRoute,private reservationTerrainService:ReservationTerrainService ){}
prixReser!:number




ngOnInit(){
  console.log("on init ......")
  this.endTime = this.act.snapshot.params['endTime'];
  this.startTime = this.act.snapshot.params['startTime'];
  this.numTerrain= this.act.snapshot.params['numTerrain'];
 
  this.Calcule();
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

}
