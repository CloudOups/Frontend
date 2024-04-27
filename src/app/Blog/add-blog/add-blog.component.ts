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
  file: File | null = null;

  constructor(
    private blogService: BlogServiceService,
    private userService: UserService, // Inject the UserService
    private router: Router
  ) {}

  ngOnInit(): void {
    const today = new Date();
    // Assign the current date directly to the dateCreation field as a Date object
    this.newPublication.dateCreation = today;

    // Fetch the current user
    this.userService.getCurrentUser().subscribe({
      next: (user) => {
        // Assign the user to newPublication
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
    // Log the blogData object just before making the HTTP POST request
    console.log('Blog Data:', this.newPublication);
  
    // Make the HTTP POST request to create a new publication
    this.blogService.createBlog(this.newPublication).subscribe({
      next: (response) => {
        // Log the user and blog data after adding the blog
        console.log('Current User:', this.newPublication.user?.id);
        console.log('Blog added successfully:', response);
        console.log('Publication id:', response.numPub);
        
        // Check if a file is selected
        if (this.file) {
          // Upload the file after creating the blog post
          this.blogService.uploadFile(response.numPub, this.file).subscribe({
            next: (uploadResponse) => {
              console.log('File uploaded successfully:', uploadResponse);
              this.router.navigate(['/listblog']);
            },
            error: (uploadError) => {
              console.error('Error uploading file:', uploadError);
              this.router.navigate(['/listblog']); // Navigate even if file upload fails
            }
          });
        } else {
          // If no file is selected, simply navigate to the list of blogs
          this.router.navigate(['/listblog']);
        }

        // Clear the form after adding the blog
        this.newPublication = {};
      },
      error: (error) => {
        console.error('Error adding blog:', error);
      }
    });
  }

  // Method to handle file selection
  onFileSelected(event: any) {
    this.file = event.target.files[0];
  }
}
