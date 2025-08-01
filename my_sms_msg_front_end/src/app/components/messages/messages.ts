import { Component, Input} from '@angular/core';
import { Message } from '../../usermessage/usermessage';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-messages',
  imports: [DatePipe],
  standalone: true,
  templateUrl: './messages.html',
  styleUrls: ['./messages.scss']
})
export class Messages {
 @Input() all_messages: Message[] = [];
timezone: string|undefined;
}
