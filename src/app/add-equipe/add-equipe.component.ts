import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EquipeService } from '../services/equipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../Models/user/user';
import { Equipe } from '../Models/Equipe/equipe';

@Component({
  selector: 'app-add-equipe',
  templateUrl: './add-equipe.component.html',
  styleUrls: ['./add-equipe.component.css']
})
export class AddEquipeComponent {
  title = 'addequipe-app';
  equipes: Equipe[] = [];
  chefEquipeList: User[] = [];
  constructor(private equipeService: EquipeService, private act: ActivatedRoute, private router: Router) {
    // Populate chefEquipeList here or call a method to fetch data
    this.populateChefEquipeList();
  }

  AddEquipeForm = new FormGroup({
   /// chefEquipe: new FormControl('', [Validators.required]), 
    nomEquipe: new FormControl('', [Validators.required]),
    nbMemEquipe: new FormControl('', [Validators.required]),
    classement: new FormControl(null, [Validators.required]),
  });

  save() {
    this.equipeService.addEquipe(this.AddEquipeForm.value as any , 1).subscribe(response => {
      console.log('Equipe added successfully!', response);
      alert('Equipe ajouté avec succès!');
      this.router.navigate(['/equipes']);
      this.AddEquipeForm.reset();
    }, error => {
      console.error('Error adding equipe:', error);
    });
  }

  populateChefEquipeList() {
    // Call your service method to fetch chefEquipeList
    // Example:
    // this.equipeService.getUsers().subscribe(users => {
    //   this.chefEquipeList = users;
    // });
    // Replace getUsers() with your actual service method to fetch users.
  }
}
