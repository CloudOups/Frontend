import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from 'src/app/Models/produit/produit';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProduitService {

    //a mettre dans la classe user pour stoquer l'email
    storage : Storage = sessionStorage;
   // private url = environment.api_Url + 'produit';

  private url = "http://localhost:8089/pi/produit";

  
  constructor(private httpClient : HttpClient) { }


  getProductList(): Observable <Produit[]>{
    return this.httpClient.get<Produit[]>(`${this.url}`);
  }

  getProduct(id : number): Observable <Produit>{
    return this.httpClient.get<Produit>(`${this.url}/get/${id}`);
  }
  searchProduct(keyword : string): Observable <Produit[]>{
    return this.httpClient.get<Produit[]>(`${this.url}/search/${keyword}`);
  }

  deleteProduit(id : number) {
    return this.httpClient.delete(this.url+"/delete/" + id);
  }


  getProductListPagination(currentPage: number,pageSize: number) : Observable<any>{
    return this.httpClient.get(`${this.url}?page=${currentPage}&size=${pageSize}`);
  }

}




