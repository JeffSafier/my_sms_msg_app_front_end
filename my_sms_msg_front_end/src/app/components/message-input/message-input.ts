import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { inject } from '@angular/core';
import { Router} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SendMessage } from '../../services/send-message';


Router
@Component({
  selector: 'app-message-input',
  imports: [ReactiveFormsModule],
  templateUrl: './message-input.html',
  styleUrl: './message-input.scss'
})

export class MessageInput {
  message_InputForm = new FormGroup({
    phone_number: new FormControl("", [Validators.required]),
    message: new FormControl("", [Validators.required]),
  })

  constructor(private router: Router, private sendmessage: SendMessage) {
      console.log('✅ MessageInput component constructor loaded');
  }
  


    onSubmit() {
      const phone_number = this.message_InputForm.get('phone_number')?.value ?? '';
      const  message = this.message_InputForm.get('message')?.value ?? '';
    // TODO: Use EventEmitter with form value
      if (this.message_InputForm.valid) {
        const data = {
          phone_number: phone_number,
          message: message
        }
        this.sendmessage.sendMessage(data).subscribe({
          next: (res) => {
            this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
                    this.router.navigate(['/usermessage']);
            });
        },
        error: (err) => {
          console.error('Login failed:', err)
  
        }
      })

      }

  }
  isClearDisabled(): boolean {
    const phone_number = this.message_InputForm.get('phone_number');
    const message = this.message_InputForm.get('message');
    return !(phone_number?.value || message?.value);
  }

  clearMessageForm() {
    this.message_InputForm.reset(); // resets all fields to null or default
  }
}
