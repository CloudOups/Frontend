import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { UserService } from 'src/app/services/user.service';
import { Event } from 'src/app/Models/Event/event';


@Component({
  selector: 'app-participation-history',
  templateUrl: './participation-history.component.html',
  styleUrls: ['./participation-history.component.css']
})
export class ParticipationHistoryComponent implements OnInit {
  participationHistory: Event[] = [];

  constructor(private eventservice: EventService, private userservice: UserService) {}

  ngOnInit(): void {
    this.getParticipationEventHistory();
  }

  getParticipationEventHistory(): void {
    this.userservice.getCurrentUser().subscribe(
      user => {
        if (user) {
          this.eventservice.getParticipationHistory(user).subscribe(
            (history: Event[]) => {
              this.participationHistory = history;
            },
            (error) => {
              console.error('Error fetching participation history: ', error);
            }
          );
        }
      },
      (error) => {
        console.error('Error fetching current user: ', error);
        // Gérer l'erreur de récupération de l'utilisateur actuel ici
      }
    );
  }
}
