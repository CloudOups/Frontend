import { Injectable } from '@angular/core';
import { HttpClient, HttpParams,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Terrain } from '../Models/Terrain/terrain';
import { TypeTerrain } from '../Models/Terrain/typeTerrain';
import { StatusTerrain } from '../Models/Terrain/statusTerrain';
import { Page } from '../Models/Page.interface';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class TerrainService {
  readonly API_URL = "http://localhost:8089/pi";
  readonly ENDPOINT_TERRAINS = "/terrain";
  constructor(private httpClient:HttpClient,private authService: AuthServiceService) { }
  
  private getHeaders(): HttpHeaders {
    const jwt = localStorage.getItem('jwt');

    return new HttpHeaders({
      Authorization: `Bearer ${jwt}`,
    });
  }
  // Method to retrieve all terrains
  getTerrains(): Observable<Terrain[]> {
    return this.httpClient.get<Terrain[]>(this.API_URL + this.ENDPOINT_TERRAINS + "/get/all", { headers: this.getHeaders()});
  }
  getAllTerrains(page: number, size: number,sortBy:string| null): Observable<Page<Terrain>> {
    var params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
      if (sortBy) {
        params = params.set('sortBy', sortBy);
      }
    return this.httpClient.get<Page<Terrain>>(this.API_URL + this.ENDPOINT_TERRAINS +"/get/allTerrains", { params ,headers: this.getHeaders()});
  }
  
  // Method to add a terrain
  //addTerrain(terrain: Terrain): Observable<Terrain> {
  //  const formData: FormData = new FormData();

   //0 return this.httpClient.post<Terrain>(this.API_URL + this.ENDPOINT_TERRAINS + "/add", terrain);
  //}

  addTerrain(nomTerrain: string, typeTerrain: TypeTerrain, statusTerrain: StatusTerrain,  imageTerrain: File): Observable<Terrain> {
    const formData: FormData = new FormData();

      formData.append('nomTerrain', nomTerrain); // Append the image file to FormData

        formData.append('statusTerrain', statusTerrain); // Append the image file to FormData

          formData.append('typeTerrain', typeTerrain); // Append the image file to FormData
          formData.append('imageTerrain', imageTerrain, imageTerrain.name); // Here, imageTerrain should be of type File

           
    return this.httpClient.post<Terrain>(this.API_URL + this.ENDPOINT_TERRAINS + "/add", formData, { headers: this.getHeaders()});
  }
  getReservationsSortTypeTerrain(page: number, size: number): Observable<Page<Terrain>> {
    const params = new HttpParams()
    .set('page', page.toString())
    .set('size', size.toString());
   
    return this.httpClient.get<Page<Terrain>>(this.API_URL + this.ENDPOINT_TERRAINS+"/terrains-by-typeTerrain", { params ,headers: this.getHeaders()});
  }
  
  checkAvailabilityBySport(datedebut: string, datefin: string, typeTerrain: TypeTerrain): Observable<Terrain[]> {
    // Utiliser les paramètres de requête pour la recherche d'accessibilité
    return this.httpClient.get<Terrain[]>(`${this.API_URL}/terrain/checkAvailabilityBySport/datedebut=${datedebut}/datefin=${datefin}/${typeTerrain}`, { headers: this.getHeaders()});
  }



  // Method to update a terrain
  updateTerrain(terrain: Terrain): Observable<Terrain> {
    return this.httpClient.put<Terrain>(this.API_URL + this.ENDPOINT_TERRAINS + "/update", terrain, { headers: this.getHeaders()});
  }

  // Method to get terrain by ID
  getTerrainById(idTerrain: number): Observable<Terrain> {
    return this.httpClient.get<Terrain>(this.API_URL + this.ENDPOINT_TERRAINS + `/get/${idTerrain}`, { headers: this.getHeaders()});
  }

  // Method to delete a terrain
  removeTerrain(idTerrain: number): Observable<void> {
    return this.httpClient.delete<void>(this.API_URL + this.ENDPOINT_TERRAINS + `/delete/${idTerrain}`, { headers: this.getHeaders()});
  }

  // Method to get terrains by status
  getTerrainsByStatus(statusTerrain: string): Observable<Terrain[]> {
    return this.httpClient.get<Terrain[]>(this.API_URL + this.ENDPOINT_TERRAINS + `/get/status=/${statusTerrain}`, { headers: this.getHeaders()});
  }

  // Method to check availability of terrains within a date range
  checkAvailability(datedebut: string, datefin: string): Observable<Terrain[]> {
    return this.httpClient.get<Terrain[]>(this.API_URL + this.ENDPOINT_TERRAINS + `/checkAvailability/datedebut=${datedebut}/datefin=${datefin}`, { headers: this.getHeaders()});
  }
}
