import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from '../usermessage/usermessage'

@Injectable({
  providedIn: 'root'
})

export class MessageService {

 constructor(private http: HttpClient){}

  getMessages(): Observable<Message[]>{
    const url = `http://127.0.0.1:3000/users/messages`;
    let token:any = localStorage.getItem('jwt');
    const headers = new HttpHeaders({
      'Authorization': token,
      'Content-Type': 'application/json'
      })
    return this.http.get<Message[]>(url, {headers});
    
  }
}
