import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from 'src/app/Models/produit/produit';


@Injectable({
  providedIn: 'root'
})
export class ProduitService {

    //a mettre dans la classe user pour stoquer l'email
    storage : Storage = sessionStorage;

  private url = "http://localhost:8089/pi/produit";
  
  constructor(private httpClient : HttpClient) { }


  getProductList(): Observable <Produit[]>{
    return this.httpClient.get<Produit[]>(`${this.url}`);
  }

  getProduct(id : number): Observable <Produit>{
    return this.httpClient.get<Produit>(`${this.url}/get/${id}`);
  }

  getProductListPagination(currentPage: number,pageSize: number) : Observable<any>{
    return this.httpClient.get(`${this.url}?page=${currentPage}&size=${pageSize}`);
  }

  //**************** recupeartion de lemail  */
  getUserEmail() {
    //on recupere l'email de l'utilisateur au format Json

    let email : string = "michel@gmail.com";
    //this.storage.setItem("userEmail",JSON.stringify(email));
    this.storage.setItem("userEmail",email);
  }

}




