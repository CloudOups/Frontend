import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeTerrain } from '../Models/Terrain/typeTerrain';
import { ReservationTerrainService } from '../services/reservation-terrain.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TypeReservation } from '../Models/Reservation/typeReservation';

@Component({
  selector: 'app-confirmartion-reservation',
  templateUrl: './confirmartion-reservation.component.html',
  styleUrls: ['./confirmartion-reservation.component.css']
})
export class ConfirmartionReservationComponent {
  endTime!:string
  startTime!:string
  typeTerrain!:TypeTerrain
  numTerrain!:number
  prixReser!:number
  typeRes!:TypeReservation
constructor(private act :ActivatedRoute,private router :Router,private reservationTerrainService:ReservationTerrainService ){}
ReservationForm= new FormGroup({
  dateDebut:new FormControl('', [Validators.required]),
  dateFin: new FormControl('', [Validators.required]),
 // terrain: new FormControl('', [Validators.required]),
  prixReser: new FormControl('', [Validators.required]),
  typeRes: new FormControl('Personnel', [Validators.required]),

});



ngOnInit(){
  console.log("on init ......")
  this.endTime = this.act.snapshot.params['endTime'];
  this.startTime = this.act.snapshot.params['startTime'];
  this.numTerrain= this.act.snapshot.params['numTerrain'];
  this.prixReser= this.act.snapshot.params['prixReser'];

  this.ReservationForm.patchValue({
    dateDebut: this.endTime,
    dateFin: this.startTime ,
//  terrain: this.numTerrain.toString(),
    prixReser:this.prixReser.toString(),
  })
}
save() {
  this.reservationTerrainService.addReservationTerrain(this.ReservationForm.value as any,1,this.numTerrain).subscribe(response => {
    console.log('Reservation added successfully!', response);
    alert('Reservation done ! check your Email!!!');
    this.router.navigate(['/Reservation']);
    this.ReservationForm.reset();
  }, error => {
    console.error('Error adding reservation:', error);
  });
}

}
