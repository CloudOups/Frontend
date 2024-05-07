import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TypeTerrain } from '../Models/Terrain/typeTerrain';
import { Terrain } from '../Models/Terrain/terrain';
import { TerrainService } from '../services/terrain.service';
import { ReservationTerrainComponent } from '../reservation-terrain/reservation-terrain.component';
import { ReservationTerrainService } from '../services/reservation-terrain.service';
import { CodePromo } from '../Models/codePromo/code-promo';

@Component({
  selector: 'app-choisir-terrain',
  templateUrl: './choisir-terrain.component.html',
  styleUrls: ['./choisir-terrain.component.css']
})
export class ChoisirTerrainComponent {
  endTime!:string
  startTime!:string
  time!:string
  typeTerrain!:TypeTerrain
  terrains!: Terrain []
  prixReser!:number
  mostReser!:Terrain
  codePromo!:CodePromo
  url="http://localhost:4200/assets/img/terrains/"  

constructor(private act :ActivatedRoute,private terrainService:TerrainService,private reservationTerrainService :ReservationTerrainService ){}
ngOnInit(){
  console.log("on init ......")
  this.endTime = this.act.snapshot.params['endTime'];
  this.startTime = this.act.snapshot.params['startTime'];
  this.time = this.act.snapshot.params['time'];
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
   verifyPromoCode() {
    const promoInput = document.getElementById("promoCode") as HTMLInputElement;
    const promoCodeValue = promoInput.value; // Récupérer la valeur actuelle du champ de saisie promoCode
    if (!promoInput.disabled && promoCodeValue.trim() !== '') { // Vérifier si le champ est activé et non vide
      this.reservationTerrainService.validatePromoCode(promoCodeValue).subscribe(
        (isValid: boolean) => {
          if (isValid) {
            console.log("Le code promo est valide !");
            // Faire quelque chose lorsque le code promo est valide
          } else {
            console.log("Le code promo n'est pas valide !");
            // Faire quelque chose lorsque le code promo n'est pas valide
          }
        },
        (error) => {
          console.error("Une erreur s'est produite lors de la validation du code promo :", error);
        }
      );
    }
  }
   togglePromoInput() {
    const promoInput = document.getElementById("promoCode") as HTMLInputElement;
    if (promoInput.disabled) {
      promoInput.disabled = false;
      promoInput.focus();

    } else {
      promoInput.disabled = true;
      promoInput.value = ""; // Effacez le champ si le code est désactivé

    }
  }
}
