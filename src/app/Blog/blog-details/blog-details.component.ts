import { Component, OnInit } from '@angular/core';
import { Publication } from '../../Models/Blog/publication';
import { BlogServiceService } from '../blog-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
  publication: Publication = {};
  comments : Comment[] = [];
   blogId = this.route.snapshot.paramMap.get('id');
  constructor(private blogService: BlogServiceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.blogId)
    this.getBlogById(Number(this.blogId));
    this.getCommentaires(Number(this.blogId));
  

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
}
