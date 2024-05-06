import { Component, OnInit } from '@angular/core';
import { BlogServiceService } from '../blog-service.service';
import { Publication } from 'src/app/Models/Blog/publication';
import { UserService } from '../../services/user.service'; // Update this path
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {
  newPublication: Publication = {}; 
  currentDate: string = new Date().toISOString().split('T')[0]; 
  file: File | null = null;

  constructor(
    private blogService: BlogServiceService,
    private userService: UserService, 
    private router: Router
  ) {}

  ngOnInit(): void {
    const today = new Date();
    this.newPublication.dateCreation = today;

    this.userService.getCurrentUser().subscribe({
      next: (user) => {
        if (user) {
          this.newPublication.user = { ...this.newPublication.user, id: user.id };
          this.newPublication.user.role = user.role;
          this.newPublication.user.firstname = user.firstname;
          this.newPublication.user.lastname = user.lastname;
        }
      },
      error: (error) => {
        console.error('Error fetching current user:', error);
      }
    });
  }

  // Method to add a new blog
  addBlog(): void {
    console.log('Blog Data:', this.newPublication);
  
    this.blogService.createBlog(this.newPublication).subscribe({
      next: (response) => {
        console.log('Current User:', this.newPublication.user?.id);
        console.log('Blog added successfully:', response);
        console.log('Publication id:', response.numPub);
        this.router.navigate(['/listblog']);

        this.newPublication = {};
      },
      error: (error) => {
        console.error('Error adding blog:', error);
      }
    });
  }

  onFileSelected(event: any) {
    this.file = event.target.files[0];
  }
}
