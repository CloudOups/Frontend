import { Component, OnInit } from '@angular/core';
import { Publication } from '../../Models/Blog/publication';
import { BlogServiceService } from '../blog-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Comment } from 'src/app/Models/Comment/comment';
import { UserService } from '../../services/user.service'; 



@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
  publication: Publication = {};
  comments : Comment[] = [];
   newComment: Comment = new Comment();
   blogId = this.route.snapshot.paramMap.get('id');
   var : number = Number(this.blogId);
  constructor(private blogService: BlogServiceService,private userService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const today = new Date();
    console.log(this.blogId)
    this.getBlogById(Number(this.blogId));
    this.getCommentaires(Number(this.blogId));

    if (this.newComment.publication) {
      this.newComment.publication.numPub = this.publication.numPub;
    }
        // get current user
        this.userService.getCurrentUser().subscribe({
          next: (user) => {
            // Assign the user to newPublication
            if (user) {
              this.newComment.user = { ...this.newComment.user, id: user.id };
              this.newComment.user.role = user.role;
              this.newComment.user.firstname = user.firstname;
              this.newComment.user.lastname = user.lastname;
              console.log("commentaire sa7bi",this.newComment.user)
            }
          },
          error: (error) => {
            console.error('Error fetching current user:', error);
          }
        });
  

}

  getBlogById(blogId: number): void {
    this.blogService.getBlog(blogId).subscribe(
      (blog) => {
        this.publication = blog;
        console.log(this.publication);
      },
      (error) => {
        console.error(error);
        console.log("mcohkla blog ")
      }
    );
  }

  getCommentaires(blogId: number): void {
    this.blogService.getCommentsForPublication(blogId).subscribe({
      next: (comments) => {
        // Filter only the approved publications
        console.log('Fetched comments:', this.comments); // Log the fetched publications
      },
      error: (error) => {
        console.error(error);
        console.log("mcohkla commentairet ")
      }
    });
  }
  addCommentToPublication(id: number): void {
    // Optionally, you can set other properties of the new comment if needed
    
    this.blogService.addComment(id, this.newComment)
      .subscribe({
        next: () => {
          console.log('Comment added successfully');
          // You may want to refresh the list after adding the comment
          this.getCommentaires(Number(this.blogId));
        },
        error: (error) => {
          console.error('Error adding comment:', error);
        }
      });
  }



}
