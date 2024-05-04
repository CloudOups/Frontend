import { Component } from '@angular/core';
import { EquipeService } from '../services/equipe.service';
import { Equipe } from '../Models/Equipe/equipe';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css'],
  providers:[EquipeService]

})
export class EquipeComponent {
  title='equipe-app';
  equipes: Equipe[] = [];
    idUser!:number

constructor(private equipeService:EquipeService){
}
ngOnInit(){
  console.log("on init ......")
  this.equipeService.getAllEquipes().subscribe((datas)=>{
    this.equipes=datas;}
   )
  }

    deleteEquipe(id: number) {
      this.equipeService.removeEquipe(id).subscribe(() => {
        console.log('Equipe supprimé avec succès'); 
        this.refreshEquipe();
      }, error => {
        if (error.status === 500) {
          console.error('Erreur lors de la suppression du equipe :', error);
          alert('Impossible de supprimer ce Equipe car il est associé à des réservations.');
        } else {
          console.error('Erreur lors de la suppression du terr :', error);
        }
      });
    }
  listEquipes!: Equipe [];
  refreshEquipe() {
    this.equipeService.getAllEquipes().subscribe(
      (equipe) => {
        this.equipes = equipe; // Update this.equipes directly
        console.log('Liste des equipes rafraîchie avec succès', this.equipes);
      },
      error => {
        console.error('Erreur lors de la récupération des equipes :', error);
      }
    );
  }
}
