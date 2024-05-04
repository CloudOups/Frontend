import { Component } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  userConnected: any;
  decodedJwtData: any;
  constructor(private authService: AuthServiceService) {
    this.userConnected = localStorage.getItem('jwt');
    if (this.userConnected) {
      let jwt = this.userConnected;
      let jwtData = jwt.split('.')[1];
      let decodedJwtJsonData = window.atob(jwtData);
      this.decodedJwtData = JSON.parse(decodedJwtJsonData);
      console.log('user ::::::::', this.decodedJwtData.sub);
    }
  }
  logout() {
    this.authService.logout().subscribe(
      (response) => {
        // Successful logout handling
        console.log('Logout successful');
      },
      (error) => {
        // Error handling
        console.error('Logout error:', error);
      }
    );
  }
}
