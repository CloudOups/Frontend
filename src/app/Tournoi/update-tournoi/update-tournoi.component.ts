import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Tournoi } from 'src/app/Models/Tournoi/tournoi';
import { TournoiService } from 'src/app/services/tournoi-service.service';
import { TypeTerrain } from 'src/app/Models/Terrain/typeTerrain';

@Component({
  selector: 'app-update-tournoi',
  templateUrl: './update-tournoi.component.html',
  styleUrls: ['./update-tournoi.component.css']
})
export class UpdateTournoiComponent implements OnInit {
  
  title = 'updatetournoi-app';
  typeTournoi: string[] = Object.values(TypeTerrain);
  UpdateTournoiForm = new FormGroup({
    numTournoi: new FormControl('', [Validators.required]),
    nomTournoi: new FormControl('', [Validators.required, Validators.minLength(6)]),
    typeTournoi: new FormControl('', [Validators.required]),
    dateDebut: new FormControl('', [Validators.required, this.dateTimeFormatValidator]),
    dateFin: new FormControl('', [Validators.required, this.dateTimeFormatValidator]),
    nbEquipes: new FormControl('', [Validators.required, Validators.min(2), this.onlyNumbersValidator]),
    recompense: new FormControl('', [Validators.required])
  });

  numTournoi!: number;
  tournoi!: Tournoi;

  constructor(private tournoiService: TournoiService, private act: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    console.log("on init ......");
  
    // Recuperer l'id a partir de l'URL
    const id = this.act.snapshot.paramMap.get('id'); 
    if (id) {
      this.numTournoi = +id; // Convertir en nombre
      // Initialiser numTournoi
      this.UpdateTournoiForm.get('numTournoi')?.setValue(this.numTournoi.toString()); // Convertir en chaîne de caractères
      // Fetch the details of the tournoi based on numTournoi
      this.tournoiService.getTournoiById(this.numTournoi).subscribe(
        (tournoi: Tournoi) => {
          this.tournoi = tournoi;
  
          // Pre-fill other fields in the form with the fetched tournoi details
          this.UpdateTournoiForm.patchValue({
            nomTournoi: tournoi.nomTournoi,
            typeTournoi: tournoi.typeTournoi,
            dateDebut: tournoi.dateDebut.toString(),
            dateFin: tournoi.dateFin.toString(),
            recompense: tournoi.recompense
          });
        },
        error => {
          console.error('Error fetching tournoi details:', error);
        }
      );
    }
  }
  

  save() {
    this.tournoiService.updateTournoi(this.UpdateTournoiForm.value as any).subscribe(response => {
      // Handle response if needed
      console.log('Tournoi modified successfully!', response);
      alert('Tournoi modifié avec succès!');
      this.router.navigate(['/tournois']);

      // Optionally, you can reset the form after successful submission
      this.UpdateTournoiForm.reset();
    }, error => {
      // Handle error if needed
      console.error('Error adding tournoi:', error);
    });
  }

  onlyNumbersValidator(control: AbstractControl): { [key: string]: any } | null {
    const valid = /^\d+$/.test(control.value);
    return valid ? null : { onlyNumbers: true };
  }
  
  dateTimeFormatValidator(control: AbstractControl): { [key: string]: any } | null {
    const validFormat = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/.test(control.value);
    return validFormat ? null : { dateTimeFormat: true };
  }
}
