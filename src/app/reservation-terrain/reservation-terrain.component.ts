import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationTerrainService } from '../services/reservation-terrain.service';

@Component({
  selector: 'app-reservation-terrain',
  templateUrl: './reservation-terrain.component.html',
  styleUrls: ['./reservation-terrain.component.css'],
  providers: [ReservationTerrainService]
})
export class ReservationTerrainComponent implements OnInit {

  reservationTerrains: any = {};
  currentPage = 0;
  pageSize = 5;
  totalPages = 0;
  totalPagesArray: number[] = [];
  sortBy: string | null = null;

  constructor(
    private reservationTerrainService: ReservationTerrainService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.sortBy = params['sortBy'];
      this.currentPage = +params['page'] || 0;
      this.getReservations();
    });
    this.generatePromoCode()
  }

  getReservations(): void {
    this.reservationTerrainService.getAllReservations(this.currentPage, this.pageSize, this.sortBy).subscribe(
      response => {
        this.reservationTerrains = response.content;
        this.totalPages = response.totalPages;
        this.totalPagesArray = Array.from({ length: this.totalPages }, (_, i) => i + 1);
      },
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

  sortByUser(): void {
    this.sortBy = 'user';
    this.getReservations();
    this.updateQueryParams();
  }

  sortByDateDebut(): void {
    this.sortBy = 'dateDebut';
    this.getReservations();
    this.updateQueryParams();
  }

  sortByDateFin(): void {
    this.sortBy = 'dateFin';
    this.getReservations();
    this.updateQueryParams();
  }

  sortByTypeRes(): void {
    this.sortBy = 'typeRes';
    this.getReservations();
    this.updateQueryParams();
  }

  sortByNomTerrain(): void {
    this.sortBy = 'terrain';
    this.getReservations();
    this.updateQueryParams();
  }

  sortByEtatRes(): void {
    this.sortBy = 'etatReser';
    this.getReservations();
    this.updateQueryParams();
  }
  clearSort(): void {
    this.sortBy = null;
    this.getReservations();
    this.updateQueryParams();
  }
  promoCode?: string ;

 
  generatePromoCode(): void {
    this.reservationTerrainService.generatePromoCode().subscribe(
      (code: string) => {
        // Afficher le code généré dans l'élément HTML avec l'ID 'promoCodeDisplay'
        
        this.promoCode = code;
      },
      (error) => {
        console.error("Error generating promo code:", error);
      }
    );
  }
}
