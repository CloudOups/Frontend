import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { User } from './Models/user/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  userConnected: any;
  decodedJwtData: any;
  private baseUrl = ['http://localhost:8084/api/v1/user'];

  constructor(private router: Router, private http: HttpClient) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    this.userConnected = localStorage.getItem('jwt');
    console.log('this.userConnected : ', this.userConnected);
    if (this.userConnected) {
      console.log(' if (this.userConnected)');
      let jwt = this.userConnected;
      let jwtData = jwt.split('.')[1];
      let decodedJwtJsonData = window.atob(jwtData);
      this.decodedJwtData = JSON.parse(decodedJwtJsonData);
      console.log('user ::::::::', this.decodedJwtData.sub);
      const [username, role] = this.decodedJwtData.sub.split(':');
      console.log(' role : ', role);
      if (role == 'Admin') {
        console.log(" if (role == 'Admin')");
        //console.log("checking token storage token"+this.tokenStorage.getToken())
        //console.log("checking token storage user"+this.tokenStorage.getUser())

        return true;
      } else {
        this.router.navigateByUrl('/home');
        return false;
      }
    } else {
      this.router.navigateByUrl('/home');
      return false;
    }
  }
  getCurrentUser(): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/current`);
  }
}
