import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tournoi } from 'src/app/Models/Tournoi/tournoi';
import { TournoiService } from 'src/app/services/tournoi-service.service';

@Component({
  selector: 'app-detailtournoi',
  templateUrl: './detailtournoi.component.html',
  styleUrls: ['./detailtournoi.component.css']
})
export class DetailtournoiComponent implements OnInit {

  id!:number
  tournoi!: Tournoi
  constructor(private Act:ActivatedRoute,private ts:TournoiService){}

  ngOnInit(){
    this.id=this.Act.snapshot.params['id']
    this.ts.getTournoiById(this.id).subscribe(data=>this.tournoi=data)
  }
}
