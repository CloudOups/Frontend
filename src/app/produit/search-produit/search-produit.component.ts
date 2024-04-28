import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-produit',
  templateUrl: './search-produit.component.html',
  styleUrls: ['./search-produit.component.css'],
})
export class SearchProduitComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  rechercheProduit(keyword: string) {
    console.log('keyword: ' + keyword);
    this.router.navigateByUrl(`/searchProduit/${keyword}`);
  }
}
