import { Component } from '@angular/core';
import { TerrainService } from '../services/terrain.service';
import { Terrain } from '../Models/Terrain/terrain';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-terrain',
  templateUrl: './terrain.component.html',
  styleUrls: ['./terrain.component.css'],
  providers:[TerrainService]
})
export class TerrainComponent {
  title='terrain-app';
  terrains!: Terrain []
  currentPage = 0;
  pageSize = 5;
  totalPages = 0;
  totalPagesArray: number[] = []; 
  sortBy: string | null = null;

  url="http://localhost:4200/assets/img/terrains/"  
constructor(private terrainService:TerrainService,    private router: Router ,   private route: ActivatedRoute
){
}
  ngOnInit() {
    
    this.route.queryParams.subscribe(params => {
      this.sortBy = params['sortBy'];
      this.currentPage = +params['page'] || 0;
      this.getPaginatTerrains();

    });
    
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
    terrain.imageTerrain = this.url + terrain.imageTerrain;
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

getPaginatTerrains(): void {
  this.terrainService.getAllTerrains(this.currentPage, this.pageSize,this.sortBy).subscribe(
    response => {
     
      this.terrains = response.content;
      this.totalPages = response.totalPages;
      this.totalPagesArray = Array.from({ length: this.totalPages }, (_, i) => i + 1); // Generate array of page numbers
      this.attachImageUrl();  },
    error => {
      console.error('Error fetching reservations: ', error);
    }
  );
}

goToPage(pageNumber: number): void {
  this.currentPage = pageNumber;
  this.updateQueryParams();
}

updateQueryParams(): void {
  this.router.navigate([], {
    relativeTo: this.route,
    queryParams: {
      page: this.currentPage,
      sortBy: this.sortBy
    },
    queryParamsHandling: 'merge'
  });
}
sortByEtatRes(): void {
  this.sortBy = 'typeTerrain';
  this.getPaginatTerrains();
  this.updateQueryParams();
}
clearSort(): void {
  this.sortBy = null;
  this.getPaginatTerrains();
  this.updateQueryParams();
}
}


