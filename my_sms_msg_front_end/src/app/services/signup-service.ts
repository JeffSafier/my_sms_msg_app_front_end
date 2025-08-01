import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SignupService {

  constructor(private http: HttpClient){}
  
  signUp(signup_info: { email: string; password: string, password_confirmation: string }): Observable<any>{
    const url = `http://127.0.0.1:3000/signup`
    const payload = {
      user: signup_info
    }
    return this.http.post(url, payload);
  }
}