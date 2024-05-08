import { Component } from "@angular/core";
import { Event } from "src/app/Models/Event/event";
import { EventService } from "src/app/services/event.service";
import Swal from "sweetalert2";
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
    this.evService.getEventsMostParticipation().subscribe(events => {
      this.popularEvents = events;
      //this.generatePieChart();
    });
  }

  /*generatePieChart(): void {
    // Crée les données pour le pie chart en prenant les 5 premiers événements
    const pieChartData = this.popularEvents.slice(0, 5).map(event => event.nbParticipants);
    const pieChartLabels = this.popularEvents.slice(0, 5).map(event => event.nomevent);

  }*/

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
        this.filteredEvents = this.listevents; // Met à jour la liste des événements filtrés
        console.log('Liste des Events rafraîchie avec succès', this.listevents);
      });
  }
}
