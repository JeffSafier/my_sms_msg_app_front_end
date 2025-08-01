import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SignonService } from '../services/signon-service';
import { MessageService } from '../services/message-service';
import { inject } from '@angular/core';
import { RouterLink, Router} from '@angular/router';
Router
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
})

export class Login {
  loginForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(6)])
  })

  constructor(private router: Router,
              private signon: SignonService,
              private getmessage: MessageService 
  ) {
    console.log('✅ Login component constructor loaded');
  }
   
  onSubmit() {
    let email = this.loginForm.get('email')?.value ?? '';
    let password = this.loginForm.get('password')?.value ?? '';

      if (this.loginForm.valid) {
        const data = {
          email: email,
          password: password,
        }
      this.signon.signOn(data).subscribe({
        next: (res) => {
              const token = res.headers.get('Authorization');
              if (token) {
                localStorage.setItem('jwt', token);
              }
              this.router.navigate(['/usermessage'])
        },
        error: (err) => {
          console.error('Login failed:', err)
  
        }
      })
    }
  }
}
