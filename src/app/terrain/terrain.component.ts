import { Component } from '@angular/core';
import { TerrainService } from '../services/terrain.service';
import { Terrain } from '../Models/Terrain/terrain';
@Component({
  selector: 'app-terrain',
  templateUrl: './terrain.component.html',
  styleUrls: ['./terrain.component.css'],
  providers:[TerrainService]
})
export class TerrainComponent {
  title='terrain-app';
  terrains!: Terrain []
  url="http://localhost:8089/Users/ychaa/OneDrive/Documents/GitHub/Backend/PI/src/main/webapp/images/CampNou.jpg"  
constructor(private terrainService:TerrainService){
}
  ngOnInit() {
    this.getTerrains();
  }

getTerrains() {
  this.terrainService.getTerrains().subscribe(
    data => {
      this.terrains = data;
      this.attachImageUrl(); // Call a method to attach URL to image filenames
    },
    error => {
      console.error('Error fetching terrains:', error);
    }
  );
}

// Method to attach URL to image filenames
attachImageUrl() {
  // Loop through each terrain and attach URL to the image filename
  this.terrains.forEach(terrain => {
    terrain.imageTerrain =  terrain.imageTerrain;
  });
}

  deleteTerrain(id: number) {
    this.terrainService.removeTerrain(id).subscribe(() => {
      console.log('Terrain supprimé avec succès');
      this.refreshTerrain();
    }, error => {
      if (error.status === 500) {
        console.error('Erreur lors de la suppression du terrain :', error);
        alert('Impossible de supprimer ce Terrain car il est associé à des réservations.');
      } else {
        console.error('Erreur lors de la suppression du terr :', error);
      }
    });
  }
listTerrains!: Terrain [];
refreshTerrain() {
  this.terrainService.getTerrains().subscribe(
    (terrain) => {
      this.terrains = terrain; // Update this.terrains directly
      console.log('Liste des terrains rafraîchie avec succès', this.terrains);
    },
    error => {
      console.error('Erreur lors de la récupération des terrains :', error);
    }
  );
}

}


