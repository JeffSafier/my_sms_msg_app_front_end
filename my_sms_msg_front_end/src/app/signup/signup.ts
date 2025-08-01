import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SignupService } from '../services/signup-service';
import { inject } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms'

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule ],
  templateUrl: './signup.html',
  styleUrl: './signup.scss'
})
export class Signup {
 signupForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.minLength(6), Validators.required]),
    password_confirmation: new FormControl("", [Validators.minLength(6), Validators.required]),
  },
  { validators: passwordMatchValidator}
)


  private signup = inject(SignupService)

  onSubmit() {
    let email = this.signupForm.get('email')?.value ?? '';
    let password = this.signupForm.get('password')?.value ?? '';
    let password_confirmation = this.signupForm.get('password_confirmation')?.value ?? '';
    // TODO: Use EventEmitter with form value
      if (this.signupForm.valid) {
        const data = {
          email: email,
          password: password,
          password_confirmation: password_confirmation
        }
        this.signup.signUp(data).subscribe({
         next: (res:any) => console.log('Success:', res),
         error: (err:any) => console.error('Login failed:', err)
       })
    }
  }
}

export function passwordMatchValidator(form: AbstractControl): ValidationErrors | null {
  const password = form.get('password')?.value;
  const password_confirmation = form.get('password_confirmation')?.value;

  return password === password_confirmation ? null : { passwordMismatch: true };
}


