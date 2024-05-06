import { Component } from "@angular/core";
import { Event } from "src/app/Models/Event/event";
import { EventService } from "src/app/services/event.service";
@Component({
  selector: 'app-list-eventback',
  templateUrl: './list-eventback.component.html',
  styleUrls: ['./list-eventback.component.css']
})
export class ListEventbackComponent {
  title = 'event app';
  listevents!: Event[];
  popularEvents: Event[] = [];
  filteredEvents: Event[] = [];
  selectedFilter: string = 'complete'; 

  constructor(private evService: EventService) {}

  ngOnInit(): void {
    console.log('on init...')
    this.loadAllEvents();
    this.evService.getEventsMostParticipation().subscribe(
      data => this.popularEvents = data);
  }

  loadAllEvents() {
    this.evService.getEvents().subscribe(events => {
      this.listevents = events;
      this.filteredEvents = this.listevents; // Charge tous les événements par défaut
    });
  }

  loadCompleteEvents() {
    this.evService.getCompleteEvents().subscribe(events => {
      this.listevents = events;
      this.filteredEvents = this.listevents; // Charge les événements complets
    });
  }

  loadIncompleteEvents() {
    this.evService.getIncompleteEvents().subscribe(events => {
      this.listevents = events;
      this.filteredEvents = this.listevents; // Charge les événements incomplets
    });
  }

  loadExpiredEvents() {
    this.evService.getExpiredEvents().subscribe(events => {
      this.listevents = events;
      this.filteredEvents = this.listevents; // Charge les événements expirés
    });
  }

  loadUpcomingEvents() {
    this.evService.getUpcomingEvents().subscribe(events => {
      this.listevents = events;
      this.filteredEvents = this.listevents; // Charge les événements à venir
    });
  }

  filterEvents() {
    switch (this.selectedFilter) {
      case 'complete':
        this.loadCompleteEvents();
        break;
      case 'incomplete':
        this.loadIncompleteEvents();
        break;
      case 'expired':
        this.loadExpiredEvents();
        break;
      case 'upcoming':
        this.loadUpcomingEvents();
        break;
      default:
        this.loadAllEvents();
        break;
    }
  }

  deleteEvent(id: number) {
    this.evService.deleteEvent(id).subscribe(() => {
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

  refreshEvents() {
    this.evService.getEvents().subscribe(
      (events) => {
        this.listevents = events;
        this.filteredEvents = this.listevents; // Met à jour la liste des événements filtrés
        console.log('Liste des Events rafraîchie avec succès', this.listevents);
      });
  }
}
