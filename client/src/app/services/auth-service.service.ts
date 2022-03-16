import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RestAPIService } from './rest-api.service';

const AUTH_API = 'https://localhost:44348/api/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  constructor(private http: HttpClient) { }
  login(username: string, password: string) {
    return this.http.post(AUTH_API+'Logins',{username,password});
  }
  register(username: string, password: string){
    return this.http.post(AUTH_API + 'Logins', {username,password}, httpOptions);
  }
}
