import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Publication } from '../Models/Blog/publication';
import { Comment } from '../Models/Comment/comment';
import { AuthServiceService } from '../services/auth-service.service';



@Injectable({
  providedIn: 'root'
})

export class BlogServiceService {
  private baseUrl='http://localhost:8084/publication' 

  

  constructor(private http:HttpClient,private authService: AuthServiceService) { }
  private getHeaders(): HttpHeaders {
    const jwt = localStorage.getItem('jwt');

    return new HttpHeaders({
      Authorization: `Bearer ${jwt}`,
      'Content-Type': 'application/json'
    });
  }

  getBlogList(): Observable<Publication[]> {
    return this.http.get<Publication[]>(`${this.baseUrl}/getall`, { headers: this.getHeaders()});
  }  
  getToAprovedBlogs(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'/getallunapproved', { headers: this.getHeaders()});  
  }  
  getAprovedBlogs(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'/getallapproved', { headers: this.getHeaders()});  
  }  
  createBlog(blogData: any): Observable<any> {
    const options = {
      headers: this.getHeaders()
    };
    return this.http.post(`${this.baseUrl}/add`, blogData, options);
  }
  deleteBlog(id: number): Observable<any> {
    const options = {
      headers: this.getHeaders(),
      responseType: 'text' as const
    };
    return this.http.delete(`${this.baseUrl}/delete/${id}`, options);
  }

  getBlog(id: number): Observable<Publication> {  
    return this.http.get<Publication>(`${this.baseUrl}/getpublication/${id}`, { headers: this.getHeaders()});  
  }  
 
  updateBlog(id: number, blog: Publication): Observable<Object> {  
    return this.http.put(`${this.baseUrl}/update/${id}`, Publication, { headers: this.getHeaders()});  
  }  

  

  // getPhoto(photo: string): string{
  //   const photoUrl = `${this.baseUrl}/download/${photo}`;

  //   return `${this.baseUrl}/download/${photo}`;
  // }
  addComment(id: number,comment: Comment): Observable<any> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post<any>(`http://localhost:8084/commentaire/addcommentaire/${id}`, comment,  { headers: this.getHeaders()});
    }

  approveBlog(id: number): Observable<any> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.put(`${this.baseUrl}`+`/approve/${id}`,{ headers }, { headers: this.getHeaders()});
  }
  approveAllBlogs(): Observable<any> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.put(`${this.baseUrl}`+`/approveAll`,{ headers }, { headers: this.getHeaders()});
  }
  getCommentsForPublication(publicationId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`http://localhost:8084/commentaire/get/byPublication/${publicationId}`, { headers: this.getHeaders()});
  }

  likePublication(numPub: number): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/like/${numPub}`, null, { headers: this.getHeaders() });
  }

  unlikePublication(numPub: number): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/unlike/${numPub}`, null, { headers: this.getHeaders() });
  }
  

}
