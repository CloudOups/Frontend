import { Component } from '@angular/core';
import { Event } from 'src/app/Models/Event/event';
import { Ticket } from 'src/app/Models/Ticket/ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-list-ticket',
  templateUrl: './list-ticket.component.html',
  styleUrls: ['./list-ticket.component.css']
})
export class ListTicketComponent {
  title='ticket app';
  listtickets!: Ticket []
  
  constructor(private trService: TicketService){

  }
  
  ngOnInit(): void {
    console.log('on init...')
    this.trService.getTickets().subscribe( data=>this.listtickets=data)
  }

  deleteTicket(id: number) {
    this.trService.deleteTicket(id).subscribe(() => {
      console.log('Ticket supprimé avec succès');
      this.refreshTickets();
    }, error => {
      if (error.status === 500) {
        console.error('Erreur lors de la suppression du ticket :', error);
        alert('Impossible de supprimer ce ticket car il est associé à des réservations.');
      } else {
        console.error('Erreur lors de la suppression du ticket :', error);
      }
    });
  }

  refreshTickets() {
    this.trService.getTickets().subscribe(
      (tickets) => {
        this.listtickets = tickets;
        console.log('Liste des tickets rafraîchie avec succès', this.listtickets);
      })
  }



}
