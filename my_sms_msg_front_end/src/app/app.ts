import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { SignonService } from '../app/services/signon-service'
import { SignupService } from './services/signup-service';
import { Login } from './login/login';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('My SMS Messenger App');
  signonService = inject(SignonService)
  signupService = inject(SignupService)
}
