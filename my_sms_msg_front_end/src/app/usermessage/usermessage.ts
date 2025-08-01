import { Component, OnInit } from '@angular/core';
import { MessageInput } from '../components/message-input/message-input';
import { Messages } from '../components/messages/messages';
import { MessageService } from '../services/message-service';

export interface Message {
  id: string;
  created_at: string;
  phone_number: string;
  message: string;
}

@Component({
  selector: 'app-usermessage',
  imports: [MessageInput, Messages],
  standalone: true,
  templateUrl: './usermessage.html',
  styleUrls: ['./usermessage.scss']
})
export class UserMessage implements OnInit {
  all_messages: Message[] = []
  
  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.messageService.getMessages().subscribe({
      next: (data) => {
        this.all_messages = data;
      },
      error: (err) => {
        console.error('Failed to load messages', err);
      }
    });
  }
}
