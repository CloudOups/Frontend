import { Component, OnInit } from '@angular/core';
import { Publication } from '../../Models/Blog/publication';
import { BlogServiceService } from '../blog-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-blog',
  templateUrl: './list-blog.component.html',
  styleUrls: ['./list-blog.component.css']
})
export class ListBlogComponent implements OnInit {
  publications: Publication[] = [];
  filteredPublications: Publication[] = [];
  searchInput: string = '';
  sortBy: keyof Publication = 'dateCreation';

  constructor(private blogService: BlogServiceService, private router: Router) { }

  ngOnInit(): void {
    this.fetchPublications();
  }

  fetchPublications(): void {
    this.blogService.getBlogList()
      .subscribe({
        next: (publications) => {
          this.publications = publications;
          this.filteredPublications = this.publications;
          this.sortPublications();
        },
        error: (error) => {
          console.error(error);
        }
      });
  }

  sortPublications(): void {
    this.publications.sort((a, b) => {
      if (a[this.sortBy] < b[this.sortBy]) {
        return 1;
      } else if (a[this.sortBy] > b[this.sortBy]) {
        return -1;
      } else {
        return 0;
      }
    });
  }

  onSortChange(): void {
    this.sortPublications();
  }

  deletePublication(publication: Publication): void {
    this.blogService.deleteBlog(publication.id).subscribe(() => {
      this.publications = this.publications.filter((p) => p.id !== publication.id);
      this.filteredPublications = this.publications; // Update filtered list after deletion
    });
  }

  navigateToUpdate(publicationId: string): void {
    this.router.navigate(['/updatePublication/', publicationId]);
  }

  navigateToAddPublication() {
    this.router.navigate(['/addPublication']);
  }

  onSearch(): void {
    this.filteredPublications = this.publications.filter(publication =>
      (publication.Sujet && publication.Sujet.toLowerCase().includes(this.searchInput.toLowerCase())) ||
      (publication.contenu && publication.contenu.toLowerCase().includes(this.searchInput.toLowerCase())) ||
      (publication.dateCreation && publication.dateCreation.toString().toLowerCase().includes(this.searchInput.toLowerCase()))
    );
  }
}
