import { Component } from '@angular/core';
import { ReservationTerrainService } from '../services/reservation-terrain.service';

@Component({
  selector: 'app-reservation-terrain',
  templateUrl: './reservation-terrain.component.html',
  styleUrls: ['./reservation-terrain.component.css',
  ],
  providers:[ReservationTerrainService]
})
export class ReservationTerrainComponent {

  title='ReservationTerrain-app';
  reservationTerrains: any = {};
constructor(private reservationTerrainService:ReservationTerrainService){
}
ngOnInit(){
  console.log("on init ......")
  this.reservationTerrainService.getReservationTerrains().subscribe((datas)=>{
    this.reservationTerrains=datas;
  })
}
}
