import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TypeTerrain } from '../Models/Terrain/typeTerrain';
import { Terrain } from '../Models/Terrain/terrain';
import { TerrainService } from '../services/terrain.service';
import { ReservationTerrain } from '../Models/Reservation/reservation-terrain';
import { ReservationTerrainService } from '../services/reservation-terrain.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mes-reservation',
  templateUrl: './mes-reservation.component.html',
  styleUrls: ['./mes-reservation.component.css']
})
export class MesReservationComponent {
  endTime!:string
  startTime!:string
  typeTerrain!:TypeTerrain
  numTerrain!:number
  etatReser!:boolean
constructor(private act :ActivatedRoute,private reservationTerrainService:ReservationTerrainService ){}
prixReser!:number
//reservationTerrains!:ReservationTerrain[]
reservationTerrains: any = {};
url="http://localhost:4200/assets/img/terrains/"  

ngOnInit(){
  console.log("on init ......")
  this.reservationTerrainService.getReservationTerrainById(1).subscribe((datas)=>{
    this.reservationTerrains=datas;
    console.log('Reservation terrain received:', datas);

  })
}

}
