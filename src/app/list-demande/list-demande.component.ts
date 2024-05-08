import { Component } from '@angular/core';
import { Equipe } from '../Models/Equipe/equipe';
import { EquipeService } from '../services/equipe.service';
import { User } from '../Models/user/user';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-demande',
  templateUrl: './list-demande.component.html',
  styleUrls: ['./list-demande.component.css']
})
export class ListDemandeComponent {
  memberenAttente: User[]=[];
  membereAccepte: User[] = [];

  equipe!:Equipe;

  constructor(private equipeService: EquipeService,private act:ActivatedRoute, private userService: UserService) { }
  numEquipe!:number
  chefEquipe!:number
  ngOnInit() {
  console.log("on init ......");
  this.numEquipe = this.act.snapshot.params['numEquipe'];
  this.chefEquipe=this.act.snapshot.params['chefEquipe'];
    this.fetchTeamRequests();
  }
  fetchTeamRequests() {
    this.userService.getCurrentUser().subscribe(user => {
      if(user!=this.chefEquipe){
        console.log('bakakakw user:', user);
        this.equipeService.getEquipeById(this.numEquipe).subscribe(data => {
          console.log('Data from getEquipeById:', data); // Log the data received
          if (data.membresEnAttente ) {
            this.memberenAttente = data.membresEnAttente;
            console.log('Team requests:', this.memberenAttente); // Log the team requests
          } else {
            console.error('Error fetching team requests: Data or membresEnAttente is undefined');
          }
        });
      }
    });
  }
  
  
traiterDemande(idequipe: number,user :User, reponse: string): void {
console.log(idequipe,user,reponse)
      this.equipeService.traiterEquipe(idequipe,user.id!,reponse).subscribe(
        (equipe: any) => {
          // Handle success response here
          console.log('Team request processed successfully:', equipe);
          // Perform any additional actions if needed
        },
        (error: any) => {
          // Handle error response here
          console.error('Error processing team request:', error);
          // Perform any error handling or notification to the user
        }
      );
    }
    

  
}
