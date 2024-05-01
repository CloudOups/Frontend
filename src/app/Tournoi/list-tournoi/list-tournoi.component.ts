import { Component, OnInit } from '@angular/core';
import { Tournoi } from 'src/app/Models/Tournoi/tournoi';
import { TournoiService } from 'src/app/services/tournoi-service.service';

@Component({
  selector: 'app-list-tournoi',
  templateUrl: './list-tournoi.component.html',
  styleUrls: ['./list-tournoi.component.css'],
  providers: [TournoiService]
})
export class ListTournoiComponent implements OnInit{
  title='tournoi app';
  listtournois!: Tournoi []

  constructor(private trService: TournoiService){

  }
  
  ngOnInit(): void {
    console.log('on init...')
    this.trService.getTournois().subscribe( data=>this.listtournois=data)
  }

  deleteTournoi(id: number) {
    this.trService.deleteTournoi(id).subscribe(() => {
      this.refreshTournois();
    }, error => {
      if (error.status === 500) {
        console.error('Erreur lors de la suppression du tournoi :', error);
        alert('Impossible de supprimer ce tournoi car il est associé à des réservations.');
      } else {
        console.error('Erreur lors de la suppression du tournoi :', error);
      }
    });
  }

  refreshTournois() {
    this.trService.getTournois().subscribe(
      (tournois) => {
        this.listtournois = tournois;
        console.log('Liste des tournois rafraîchie avec succès', this.listtournois);
      })
  }

}
