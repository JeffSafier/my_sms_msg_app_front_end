import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SignonService {

  constructor(private http: HttpClient){}
  
  signOn(signin_info: { email: string; password: string }): Observable<any>{
    const url = `http://127.0.0.1:3000/login`
    const payload = {
      user: signin_info
    }
    return this.http.post(url, payload, { observe: 'response'});
  }
}
