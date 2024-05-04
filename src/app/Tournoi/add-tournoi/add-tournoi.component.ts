import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Terrain, TypeTerrain } from 'src/app/Models/Terrain/terrain';
import { TournoiService } from '../../services/tournoi-service.service';

@Component({
  selector: 'app-add-tournoi',
  templateUrl: './add-tournoi.component.html',
  styleUrls: ['./add-tournoi.component.css'],
  providers: [TournoiService]
})
export class AddTournoiComponent {
  
  typeTournoi: string[] = Object.values(TypeTerrain);

  
  AddTournoiForm= new FormGroup({
    nomTournoi: new FormControl('', [Validators.required, Validators.minLength(6)]),
    typeTournoi: new FormControl('', [Validators.required]),
    dateDebut: new FormControl('', [Validators.required, this.dateTimeFormatValidator]),
    dateFin: new FormControl('', [Validators.required, this.dateTimeFormatValidator]),
    nbEquipes: new FormControl('', [Validators.required, Validators.min(2), this.onlyNumbersValidator]),
    recompense: new FormControl('', [Validators.required])
    
  });

  constructor(private http: HttpClient, private trService: TournoiService, private router: Router) {

  }

  save() {
    this.trService.addTournoi(this.AddTournoiForm.value as any).subscribe(response => {
      if (response) {
        console.log('Tournoi added successfully!', response);
        alert('Tournoi ajouté avec succès!');
        this.router.navigate(['/tournois']);
        this.AddTournoiForm.reset();
      } else {
        console.error('Failed to add tournoi: Event full');
        alert('Événement complet, désolé!');
      }
    }, error => {
      console.error('Error adding tournoi:', error);
      // Gérer l'erreur ici
    });
  }
  
  
  onlyNumbersValidator(control: AbstractControl): { [key: string]: any } | null {
    const valid = /^\d+$/.test(control.value);
    return valid ? null : { onlyNumbers: true };
  }

  dateTimeFormatValidator(control: AbstractControl): { [key: string]: any } | null {
    //  date and time format (YYYY-MM-DDTHH:MM)
    const validFormat = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/.test(control.value);
    return validFormat ? null : { dateTimeFormat: true };
  }

  radioButton: any;


}
