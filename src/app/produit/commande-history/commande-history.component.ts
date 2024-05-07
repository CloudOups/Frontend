import { Component, OnInit } from '@angular/core';
import { HistoriqueCommande } from 'src/app/Models/produit/commandeHistorique.model';
import { User } from 'src/app/Models/user/user';
import { CommandeHistoriqueService } from 'src/app/services/produit/commandeHistorique.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-commande-history',
  templateUrl: './commande-history.component.html',
  styleUrls: ['./commande-history.component.css']
})
export class CommandeHistoryComponent implements OnInit{

  commandHistoriqList : HistoriqueCommande[] = [];
  storage : Storage = sessionStorage;
  user : User = new User();

  constructor(private commandeService : CommandeHistoriqueService , private userService: UserService) { }
  
  ngOnInit(): void {
    this.gererHistoriqueCommande();
    this.userService.getCurrentUser().subscribe(
      (data) => {
        this.user = data;
      }
    );
  }

  gererHistoriqueCommande() {
    //on recupere l'email de l'utilisateur a partir du brower storage que on a mis chez le user service

    //const lemail = JSON.parse(this.storage.getItem("userEmail"));
    // console.log("LA VALEUR DE L'EMAIL EST: ",lemail);
    // const lemail = this.storage.getItem("userEmail");

    const lemail = this.user.email;

    //let email = "michel@gmail.com";
  
    // recuperer les donné du service
    this.commandeService.getCommandeHistorique(lemail).subscribe(
      data => {
        //embedded est le nom de l'objet qui contient les données dans l'api
        this.commandHistoriqList = data.content;
        console.log("LA VALEUR DE LA LISTE DES COMMANDES EST: ",this.commandHistoriqList);
      },
      error => {
        console.log("ERREUR DE RECUPERATION DES DONNEES DE L'HISTORIQUE DES COMMANDES: ",error);
      }
    );
  }

}
