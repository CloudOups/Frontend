import { Component } from '@angular/core';
import { TerrainService } from '../services/terrain.service';
import {  Terrain } from '../Models/Terrain/terrain';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TypeTerrain } from '../Models/Terrain/typeTerrain';
import { StatusTerrain } from '../Models/Terrain/statusTerrain';

@Component({
  selector: 'app-add-terrain',
  templateUrl: './add-terrain.component.html',
  styleUrls: ['./add-terrain.component.css'],
  providers:[TerrainService]

})
export class AddTerrainComponent {
  title='addterrain-app';
  terrains: any = {};
  url="C:/xampp/htdocs/img/imgPI/"
  imageTerrain: File | null = null;
constructor(private terrainService:TerrainService, private router: Router){
}
typeTerrain: string[] = Object.values(TypeTerrain);
statusTerrain: string[] = Object.values(StatusTerrain);

AddTerrainForm= new FormGroup({
  imageTerrain:new FormControl('', [Validators.required]),
  nomTerrain: new FormControl('', [Validators.required]),
  statusTerrain: new FormControl('', [Validators.required]),
  typeTerrain: new FormControl('', [Validators.required])
});
onFileSelected(event: any) {
  const file: File = event.target.files[0];
  if (file) {
    this.imageTerrain = file;
    const fileName = file.name;
    const imageTerrainControl = this.AddTerrainForm.get('imageTerrain');
    if (imageTerrainControl) {
      // Set the value to the file name for display purposes
      imageTerrainControl.setValue(fileName);
    }
  }
}

ngOnInit(){
  console.log("on init ......")

  
}
save() {
  
  this.terrainService.addTerrain(this.AddTerrainForm.value.nomTerrain as any,
    this.AddTerrainForm.value.typeTerrain as TypeTerrain,
    this.AddTerrainForm.value.statusTerrain as StatusTerrain,
    this.imageTerrain as File).subscribe(response => {

      // Handle response if needed
      console.log('Terrain added successfully!', response);
      alert('Terrain ajouté avec succès!');
      this.router.navigate(['/terrains']);

      // Optionally, you can reset the form after successful submission
      this.AddTerrainForm.reset();
    }, error => {
      // Handle error if needed
      console.error('Error adding terrain:', error);
    });
  }
  
}


