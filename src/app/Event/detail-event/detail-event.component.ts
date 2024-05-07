import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from 'src/app/Models/Event/event';
import { Tournoi } from 'src/app/Models/Tournoi/tournoi';
import { EventService } from '../../services/event.service';
import { TicketService } from 'src/app/services/ticket.service';
import { TournoiService } from 'src/app/services/tournoi-service.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/Models/user/user';

@Component({
  selector: 'app-detail-event',
  templateUrl: './detail-event.component.html',
  styleUrls: ['./detail-event.component.css']
})
export class DetailEventComponent {
 
  id!:number
  event!: Event
  listtournois!: Tournoi []
  currentPage = 0;
  pageSize = 5;
  totalPages = 0;
  totalPagesArray: number[] = [];

  constructor(private Act:ActivatedRoute,private ts:EventService,private tournoiservice:TournoiService,private ticketservice:TicketService, private userService: UserService
  ) {}

  ngOnInit() {
    this.id = this.Act.snapshot.params['id'];
    this.ts.getEventById(this.id).subscribe(data => this.event = data as any);
    this.getTournoiss();  
  }

  

  
  getTournoiss(): void {
    this.tournoiservice.getAllTournois(this.currentPage, this.pageSize).subscribe(
      response => {
        this.listtournois = response.content;
        this.totalPages = response.totalPages;
        this.totalPagesArray = Array.from({ length: this.totalPages }, (_, i) => i + 1); // Generate array of page numbers
      },
      error => {
        console.error('Error fetching reservations: ', error);
      }
    );
  }
  
  goToPage(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.getTournoiss();
  }

   
  participateEvent(eventId: number) {
    if (confirm('Êtes-vous sûr de vouloir participer à cet événement ?')) {
      this.userService.getCurrentUser().subscribe(user => {
        if (user) {
          this.ticketservice.participateEvent(eventId, user).subscribe(ticket => {
            if (ticket) {
              console.log('Ticket créé avec succès : ', ticket);
            } else {
              console.error('L\'événement est complet, désolé.');
              alert('L\'événement est complet, désolé.');
            }
          }, error => {
            console.error('Erreur lors de la création du ticket : ', error);
          });
        } else {
          console.error('Utilisateur non trouvé.');
        }
      });
    }
  }
  
}