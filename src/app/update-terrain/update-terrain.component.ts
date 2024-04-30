import { Component } from '@angular/core';
import { TerrainService } from '../services/terrain.service';
import {  Terrain } from '../Models/Terrain/terrain';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeTerrain } from '../Models/Terrain/typeTerrain';
import { StatusTerrain } from '../Models/Terrain/statusTerrain';

@Component({
  selector: 'app-update-terrain',
  templateUrl: './update-terrain.component.html',
  styleUrls: ['./update-terrain.component.css']
})
export class UpdateTerrainComponent {
  title='updateterrain-app';
  terrains: any = {};
constructor(private terrainService:TerrainService,private act:ActivatedRoute, private router: Router){
}
typeTerrain: string[] = Object.values(TypeTerrain);
statusTerrain: string[] = Object.values(StatusTerrain);

UpdateTerrainForm= new FormGroup({
  numTerrain:new FormControl('', [Validators.required]),
  nomTerrain: new FormControl('', [Validators.required]),
  statusTerrain: new FormControl('', [Validators.required]),
  typeTerrain: new FormControl('', [Validators.required])
});
numTerrain!:number
terrain!:Terrain;
ngOnInit() {
  console.log("on init ......");
  this.numTerrain = this.act.snapshot.params['numTerrain'];

  this.UpdateTerrainForm.patchValue({
    numTerrain: this.numTerrain.toString() // Convert to string
  });

  // Fetch the details of the terrain based on numTerrain
  this.terrainService.getTerrainById(this.numTerrain).subscribe(
    (terrain: Terrain) => {
      this.terrain = terrain;

      // Pre-fill other fields in the form with the fetched terrain details
      this.UpdateTerrainForm.patchValue({
        nomTerrain: terrain.nomTerrain,
        statusTerrain: terrain.statusTerrain,
        typeTerrain: terrain.typeTerrain
      });
    },
    error => {
      console.error('Error fetching terrain details:', error);
    }
  );
}
save() {
  this.terrainService.updateTerrain(this.UpdateTerrainForm.value as any).subscribe(response => {
      // Handle response if needed
      console.log('Terrain modified successfully!', response);
      alert('Terrain modifié avec succès!');
      this.router.navigate(['/terrains']);

      // Optionally, you can reset the form after successful submission
      this.UpdateTerrainForm.reset();
    }, error => {
      // Handle error if needed
      console.error('Error adding terrain:', error);
    });
  }
  
}


