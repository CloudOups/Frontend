import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TournoiService } from '../services/tournoi-service.service';
import { UserService } from '../services/user.service';
import { EquipeService } from '../services/equipe.service';
import { Equipe } from '../Models/Equipe/equipe';

@Component({
  selector: 'app-demande-equipe',
  templateUrl: './demande-equipe.component.html',
  styleUrls: ['./demande-equipe.component.css']
})
export class DemandeEquipeComponent {
  constructor(private act:ActivatedRoute,
    private tournoiservice:TournoiService,
     private userService: UserService,private equipeService:EquipeService
  ) {}
  numTournoi!:number;
  listEquipe!:Equipe[]
  ngOnInit(){
    console.log
    this.numTournoi = this.act.snapshot.params['numTournoi'];
  this.chercher()
}
chercher(){
  this.equipeService.getEquipeByNumTournoi(this.numTournoi).subscribe( data=>this.listEquipe=data)
  console.log('Liste des Events rafraîchie avec succès', this.listEquipe);
}
demandeAdhesion(id:number) {
  this.userService.getCurrentUser().subscribe(user => {
    if (user) {
      this.equipeService.demandeEquipe(id,user).subscribe(demande => {
        if (demande) {
          console.log('demande envoyé avec succès : ', demande);
        }
      });
    }
  });
}
}
