import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ticket } from 'src/app/Models/Ticket/ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-detail-ticket',
  templateUrl: './detail-ticket.component.html',
  styleUrls: ['./detail-ticket.component.css']
})
export class DetailTicketComponent {

  id!:number
  ticket!: Ticket
  constructor(private Act:ActivatedRoute,private ts:TicketService){}

  ngOnInit(){
    this.id=this.Act.snapshot.params['id']
    //this.product=this.ps.listProduct.find(p=>p.id==this.id) as Product
    this.ts.getTicketById(this.id).subscribe(data=>this.ticket=data)
  }
}
