import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http/http';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class RestAPIService {

  constructor(private http:HttpClient, private tokenStorage: TokenStorageService) { }
  getHeaders(){
    const token = this.tokenStorage.getToken();
    return token? new HttpHeaders().set('Authorization','Bearer'+token):null;
  }
  get(link:string)
  {
    let headers = this.getHeaders();
    if (headers instanceof HttpHeaders) {
      return this.http.get(link,{headers:headers}).toPromise();
    }
    return this.http.get(link).toPromise();
  }
  getOne(link:string,id: number)
  {
    let headers = this.getHeaders();
    if (headers instanceof HttpHeaders) {
      return this.http.get(link+'/'+id,{headers:headers}).toPromise();
    }
    return this.http.get(link+'/'+id).toPromise();
  }
  post(link:string,body: any)
  {
    let headers = this.getHeaders();
    if (headers instanceof HttpHeaders) {
      return this.http.post(link,body,{headers:headers}).toPromise();
    }
    return this.http.post(link,body).toPromise();
  }
  put(link:string,body: any,id:number)
  {
    let headers = this.getHeaders();
    if (headers instanceof HttpHeaders) {
      return this.http.put(link+'/'+id,body,{headers:headers}).toPromise();
    }
    return this.http.put(link+'/'+id,body).toPromise();
  }
  delete(link:string,id:number)
  {
    let headers = this.getHeaders();
    if (headers instanceof HttpHeaders) {
      return this.http.delete(link+'/'+id,{headers:headers}).toPromise();
    }
    return this.http.delete(link+'/'+id).toPromise();
  }
}
