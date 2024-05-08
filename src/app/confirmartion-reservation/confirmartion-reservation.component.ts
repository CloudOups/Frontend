import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeTerrain } from '../Models/Terrain/typeTerrain';
import { ReservationTerrainService } from '../services/reservation-terrain.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TypeReservation } from '../Models/Reservation/typeReservation';
import Swal from 'sweetalert2';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-confirmartion-reservation',
  templateUrl: './confirmartion-reservation.component.html',
  styleUrls: ['./confirmartion-reservation.component.css']
})
export class ConfirmartionReservationComponent {
  endTime!:string
  startTime!:string
  time!:string
  typeTerrain!:TypeTerrain
  numTerrain!:number
  prixReser!:number
  typeRes!:TypeReservation
constructor(private act :ActivatedRoute,private userService :UserService,private router :Router,private reservationTerrainService:ReservationTerrainService ){}
ReservationForm= new FormGroup({
  dateDebut:new FormControl('', [Validators.required]),
  dateFin: new FormControl('', [Validators.required]),
 // terrain: new FormControl('', [Validators.required]),
  prixReser: new FormControl('', [Validators.required]),
  typeRes: new FormControl('Personnel', [Validators.required]),
  dateRes: new FormControl('', [Validators.required]),

});
 currentDate = new Date();

// Extraire les composants de la date
 year = this.currentDate.getFullYear();
 month = String(this.currentDate.getMonth() + 1).padStart(2, '0'); // Les mois commencent à 0, donc ajoutez 1. Assurez-vous que le mois est toujours sur deux chiffres.
 day = String(this.currentDate.getDate()).padStart(2, '0'); // Assurez-vous que le jour est toujours sur deux chiffres.
 hours = String(this.currentDate.getHours()).padStart(2, '0'); // Assurez-vous que les heures sont toujours sur deux chiffres.
 minutes = String(this.currentDate.getMinutes()).padStart(2, '0'); 
  formattedDate = `${this.year}-${this.month}-${this.day}T${this.hours}:${this.minutes}`;

 ngOnInit(){
  console.log("on init ......")
  this.endTime = this.act.snapshot.params['endTime'];
  this.startTime = this.act.snapshot.params['startTime'];
  this.time = this.act.snapshot.params['time'];
  this.numTerrain= this.act.snapshot.params['numTerrain'];
  this.prixReser= this.act.snapshot.params['prixReser'];

  this.ReservationForm.patchValue({
    dateDebut: this.startTime,
    dateFin: this.endTime ,
//  terrain: this.numTerrain.toString(),
    prixReser:this.prixReser.toString(),
    dateRes: this.formattedDate

  })
}
save(){
  this.userService.getCurrentUser().subscribe(user => {
    if (user) {
  this.reservationTerrainService.addReservationTerrain(this.ReservationForm.value as any,1,this.numTerrain).subscribe(response => {
    console.log('Reservation added successfully!', response);
    Swal.fire("Reservation done ! check your Email!!!!");
    this.router.navigate(['/mesReservation']);
    this.ReservationForm.reset();
  }, error => {
    console.error('Error adding reservation:', error);
  });
}

})}}
