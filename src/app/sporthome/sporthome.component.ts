import { Component } from '@angular/core';
import { ChatbotserviceService } from '../services/chatbotservice.service';

@Component({
  selector: 'app-sporthome',
  templateUrl: './sporthome.component.html',
  styleUrls: ['./sporthome.component.css']
})
export class SporthomeComponent {

  message: string = '';
  response: string = '';
  errorMessage: string = '';

  constructor(private chatBotService: ChatbotserviceService) { }

  sendMessage(): void {
    this.chatBotService.sendMessage(this.message)
      .subscribe(response => {
        this.response = response;
      });
  }
}
