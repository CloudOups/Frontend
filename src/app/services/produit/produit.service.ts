import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from 'src/app/Models/produit/produit';
import { environment } from 'src/environments/environment';
import { AuthServiceService } from '../auth-service.service';


@Injectable({
  providedIn: 'root'
})
export class ProduitService {

    //a mettre dans la classe user pour stoquer l'email
    storage : Storage = sessionStorage;
   // private url = environment.api_Url + 'produit';

  private url = "http://localhost:8089/pi/produit";

  
 
  constructor(private httpClient : HttpClient, private authService: AuthServiceService) { }

  private getHeaders(): HttpHeaders {
    const jwt = localStorage.getItem('jwt');

    return new HttpHeaders({
      Authorization: `Bearer ${jwt}`,
      'Content-Type': 'application/json'
    });
  }



  getProductList(): Observable <Produit[]>{
    return this.httpClient.get<Produit[]>(`${this.url}`, { headers: this.getHeaders()});
  }

  getProduct(id : number): Observable <Produit>{
    return this.httpClient.get<Produit>(`${this.url}/get/${id}` , { headers: this.getHeaders()});
  }
  searchProduct(keyword : string): Observable <Produit[]>{
    return this.httpClient.get<Produit[]>(`${this.url}/search/${keyword}` , { headers: this.getHeaders()});
  }

  deleteProduit(id : number) {
    return this.httpClient.delete(this.url+"/delete/" + id , { headers: this.getHeaders()});
  }
  
  addProduit(produit : Produit) {
    return this.httpClient.post(this.url+"/add",produit ,{ headers: this.getHeaders()});
  }


  getProductListPagination(currentPage: number,pageSize: number) : Observable<any>{
    return this.httpClient.get(`${this.url}?page=${currentPage}&size=${pageSize}` , { headers: this.getHeaders()});
  }

}




