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
  newPublication: Publication = {}; // Initialize an empty Publication object
  currentDate: string = new Date().toISOString().split('T')[0]; 


  constructor(
    private blogService: BlogServiceService,
    private userService: UserService, // Inject the UserService
    private router:Router
  ) {}

  ngOnInit(): void {
    
    const today = new Date();
    // Assign the current date directly to the dateCreation field as a Date object
    this.newPublication.dateCreation = today;

    // Fetch the current user
    this.userService.getCurrentUser().subscribe({
      next: (user) => {
        // Assign the user to newPublication
        
        this.newPublication.user_id = user.id;        
      },
      error: (error) => {
        console.error('Error fetching current user:', error);
      }
    });
  }

  // Method to add a new blog
  addBlog(): void {
    // Log the blogData object just before making the HTTP POST request
    console.log('Blog Data:', this.newPublication);
  
    // Make the HTTP POST request to create a new publication
    this.blogService.createBlog(this.newPublication)
      .subscribe({
        next: (response) => {
          // Log the user and blog data after adding the blog
          console.log('Current User:', this.newPublication.user_id);
            console.log('Blog added successfully:', response);
            this.router.navigate(['/listblog']);
          // Clear the form after adding the blog
          this.newPublication = {};
        },
        error: (error) => {
          console.error('Error adding blog:', error);
        }
      });
  }
}