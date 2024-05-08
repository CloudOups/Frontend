import { Component } from '@angular/core';
import { ReservationTerrainService } from '../services/reservation-terrain.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CodePromo } from '../Models/codePromo/code-promo';

@Component({
  selector: 'app-code-promo',
  templateUrl: './code-promo.component.html',
  styleUrls: ['./code-promo.component.css']
})
export class CodePromoComponent {
  codePromos: CodePromo[] = [];
  currentPage = 0;
  pageSize = 5;
  totalPages = 0;
  totalPagesArray: number[] = [];
  ngOnInit(): void {
    this.fetchCodePromos();
  }
  constructor(
    private reservationTerrainService: ReservationTerrainService,
    private route: ActivatedRoute,
    private router: Router) {} 
   fetchCodePromos(): void {
    this.reservationTerrainService.getallcodesPromo().subscribe(codePromos => {
      this.codePromos = codePromos;
    });
  }
  goToPage(pageNumber: number): void {
    this.currentPage = pageNumber;}
}
