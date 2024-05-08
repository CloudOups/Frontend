import { Component } from '@angular/core';
import { TerrainService } from '../services/terrain.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Terrain } from '../Models/Terrain/terrain';

@Component({
  selector: 'app-listterrainfront',
  templateUrl: './listterrainfront.component.html',
  styleUrls: ['./listterrainfront.component.css']
})
export class ListterrainfrontComponent {
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
  }

}
