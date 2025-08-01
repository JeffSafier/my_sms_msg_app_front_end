import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

@Injectable({
  providedIn: 'root'
})

export class SendMessage {
  constructor(private http: HttpClient){}
  
  sendMessage(message_info: { phone_number: string; message: string }): Observable<any>{
    const url = `http://127.0.0.1:3000/users/messages`
    
    let token:any = localStorage.getItem('jwt');
    const headers = new HttpHeaders({
      'Authorization': token,
      'Content-Type': 'application/json'
      })

    const payload = {
      user: message_info
    }
    return this.http.post(url, payload, { observe: 'response', headers});
  }  
}
