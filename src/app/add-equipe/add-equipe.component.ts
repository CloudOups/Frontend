import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EquipeService } from '../services/equipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../Models/user/user';
import { Equipe } from '../Models/Equipe/equipe';
import Swal from 'sweetalert2';
import { Tournoi } from '../Models/Tournoi/tournoi';
import { TournoiService } from '../services/tournoi-service.service';

@Component({
  selector: 'app-add-equipe',
  templateUrl: './add-equipe.component.html',
  styleUrls: ['./add-equipe.component.css']
})
export class AddEquipeComponent {
  title = 'addequipe-app';
  equipes: Equipe[] = [];
  chefEquipeList: User[] = [];
  tournois!:Tournoi[];
  numTournoi!:number

  constructor(private equipeService: EquipeService, private act: ActivatedRoute, private router: Router,private ts:TournoiService) {
    // Populate chefEquipeList here or call a method to fetch data
  }

  AddEquipeForm = new FormGroup({
   // chefEquipe: new FormControl('', [Validators.required]), 
    nomEquipe: new FormControl('', [Validators.required]),
    nbMemEquipe: new FormControl('', [Validators.required]),
    classement: new FormControl(null, [Validators.required]),
    //tournoi: new FormControl('', [Validators.required]),

  });
  ngOnInit(){
    console.log("on init ......")  
    console.log(this.AddEquipeForm.value)
    this.numTournoi= this.act.snapshot.params['numTournoi'];

  this.getTour()
    }
   getTour() {
  this.ts.getTournois().subscribe(response => {
    this.tournois= response});
    console.log(this.tournois)
  }
  save() {
    this.equipeService.addEquipe(this.AddEquipeForm.value as any ,1,this.numTournoi ).subscribe(response => {
      console.log('Equipe added successfully!', response);
      Swal.fire('Equipe ajouté avec succès!');
      this.router.navigate(['/equipes']);
      this.AddEquipeForm.reset();
    }, error => {
      console.error('Error adding equipe:', error);
    });
  }
 
}
