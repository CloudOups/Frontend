import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/Models/Event/event';
import { EventService } from 'src/app/services/event.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.css']
})
export class ListEventComponent implements OnInit{
  title='event app';
  listevents!: Event []
  url="http://localhost:4200/assets/img/events/"

  currentPage = 0;
  pageSize = 6;
  totalPages = 0;
  totalPagesArray: number[] = [];


  constructor(private evService: EventService){ }
  
  ngOnInit(): void {
    console.log('on init...')
    this.geteventss();

  }

  geteventss(): void {
    this.evService.getAllEvents(this.currentPage, this.pageSize).subscribe(
      response => {
        this.listevents = response.content;
        this.totalPages = response.totalPages;
        this.totalPagesArray = Array.from({ length: this.totalPages }, (_, i) => i + 1);
      },
      error => {
        console.error('Error fetching reservations: ', error);
      }
    );
  }
  
  goToPage(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.geteventss();
  }

  errorMessage: string | null = null;



  
  
  

  deleteEvent(id: number) {
    Swal.fire({
      title: "Êtes-vous sûr?",
      text: "Cela supprimera également tous les tournois et tickets associés!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.evService.deleteEvent(id).subscribe(() => {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
          console.log('Event supprimé avec succès');
          this.refreshEvents();
        }, error => {
          if (error.status === 500) {
            console.error('Erreur lors de la suppression du Event :', error);
            alert('Impossible de supprimer ce Event car il est associé à des tournois.');
          } else {
            console.error('Erreur lors de la suppression du Event :', error);
          }
        });
      }
    });
  }
  
  refreshEvents() {
    this.evService.getEvents().subscribe(
      (events) => {
        this.listevents = events;
        console.log('Liste des Events rafraîchie avec succès', this.listevents);
      })
  }

}

