import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url: any = 'http://mailthis.to/ibrahimgidi2019@gmail.com';

  constructor(private http: HttpClient) {}

  sendMessage(messageContent: any) {
    return this.http.post(this.url,
   messageContent, {responseType: 'text' })
  }
}