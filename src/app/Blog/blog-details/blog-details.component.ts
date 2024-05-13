import { Component, OnInit } from '@angular/core';
import { Publication } from '../../Models/Blog/publication';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { BlogServiceService } from '../blog-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Comment } from 'src/app/Models/Comment/comment';
import { UserService } from '../../services/user.service'; 
import { Observable } from 'rxjs'; 

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
  publication: Publication = {};
  publications: Publication[] = [];

  comments: Comment[] = [];
  newComment: Comment = new Comment();
  blogId = this.route.snapshot.paramMap.get('id');
  var: number = Number(this.blogId);
  currentUrl!: string;

  newCommentForm!: FormGroup;
  badWords: string[] = ['shit', 'black', 'nigga','jabri','nhouchi'];
  
  constructor(
    private blogService: BlogServiceService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder

  ) { }

  ngOnInit(): void {
    this.currentUrl = window.location.href;
    this.fetchPublications();
    this.initializeForm();
    const today = new Date();
    console.log(this.blogId);
    this.getBlogById(Number(this.blogId)).subscribe((blog: Publication) => {
      
      console.log(blog); 
      this.publication = blog; 
      this.newComment.publication = { ...this.newComment.publication, numPub: this.publication.numPub };
      this.getCommentaires(Number(this.blogId));
    });
  
    // Get current user
    this.userService.getCurrentUser().subscribe({
      next: (user) => {
        if (user) {
          this.newComment.user = { ...this.newComment.user, id: user.id };
          this.newComment.user.role = user.role;
          this.newComment.user.firstname = user.firstname;
          this.newComment.user.lastname = user.lastname;
          console.log("commentaire sa7bi", this.newComment.user);
        }
      },
      error: (error) => {
        console.error('Error fetching current user:', error);
      }
    });
  }

//***************************validator for comments */
initializeForm(): void {
  this.newCommentForm = this.formBuilder.group({
    contenucm: ['', [Validators.required, Validators.maxLength(200), this.badWordValidator()]]
  });
}


encodeURL(url: string): string {
  return encodeURIComponent(url);
}

  getBlogById(blogId: number): Observable<Publication> {
    return this.blogService.getBlog(blogId);
  }

  getCommentaires(blogId: number): void {
    this.blogService.getCommentsForPublication(blogId)
      .subscribe({
        next: (comments) => {
          this.comments = comments;
          console.log('Fetched comments:', this.comments);
        },
        error: (error) => {
          console.error(error);
          console.log("mcohkla commentairet ")
        }
      });
  }

  addCommentToPublication(id: number): void {
    this.blogService.addComment(id, this.newComment)
      .subscribe({
        next: () => {
          console.log('Comment added successfully');
          console.log(this.newComment.publication?.numPub);
          console.log(this.newComment);
          this.getCommentaires(Number(this.blogId));
        },
        error: (error) => {
          console.error('Error adding comment:', error);
        }
      });
  }

  likePublication(numPub: number): void {
    this.blogService.likePublication(numPub)
      .subscribe({
        next: () => {
          console.log('Publication liked successfully');
        },
        error: (error) => {
          console.error('Error liking publication:', error);
        }
      });
  }

  unlikePublication(numPub: number): void {
    this.blogService.unlikePublication(numPub)
      .subscribe({
        next: () => {
          console.log('Publication unliked successfully');
        },
        error: (error) => {
          console.error('Error unliking publication:', error);
        }
      });
  }



  badWordValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const text = control.value;
      if (this.containsBadWord(text)) {
        return { 'badWord': true };
      }
      return null;
    };
  }

  containsBadWord(text: string): boolean {
    for (const word of this.badWords) {
      if (text.toLowerCase().includes(word.toLowerCase())) {
        return true;
      }
    }
    return false;
  }



    deletecomment(id: number): void {
    this.blogService.deleteComment(id)
      .subscribe({
        next: () => {
          console.log('comment deleted successfully');
          this.getCommentaires(Number(this.blogId));
        },
        error: (error) => {
          console.error('Error deleting publication:', error);
        }
      });
  }


  fetchPublications(): void {
    this.blogService.getBlogList()
      .subscribe({
        next: (publications) => {
          this.publications = publications;
          console.log('Fetched publications:', this.publications); //test ya sa7bi 
        },
        error: (error) => {
          console.error(error);
        }
      });
  }
  


  
}
