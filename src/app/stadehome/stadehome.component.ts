import { Component } from '@angular/core';
import { EventService } from '../services/event.service';
import { Event } from '../Models/Event/event';
import { User } from '../Models/user/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-stadehome',
  templateUrl: './stadehome.component.html',
  styleUrls: ['./stadehome.component.css']
})
export class StadehomeComponent {
  recommandations: Event[] = [];

  constructor(private eventService: EventService, private userService: UserService) { }

  ngOnInit(): void {
    this.getUserAndFetchRecommandations();
  }

  getUserAndFetchRecommandations(): void {
    this.userService.getCurrentUser().subscribe(user => {
      if (user) {
        this.fetchRecommandations(user);
      } else {
        console.error('Utilisateur non trouvé.');
      }
    });
  }

  fetchRecommandations(user: User): void {
    this.eventService.recommanderEvenements(user).subscribe(recommandations => {
      this.recommandations = recommandations;
    });
  }
}