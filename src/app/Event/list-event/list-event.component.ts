import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/Models/Event/event';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.css']
})
export class ListEventComponent implements OnInit{
  title='event app';
  listevents!: Event []
  url="http://localhost:4200/assets/img/events/"

  constructor(private evService: EventService){ }
  
  ngOnInit(): void {
    console.log('on init...')
    this.evService.getEvents().subscribe(
      data=>this.listevents=data)
      console.log('Liste des Events rafraîchie avec succès', this.listevents);

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
        console.log('Liste des Events rafraîchie avec succès', this.listevents);
      })
  }

}

