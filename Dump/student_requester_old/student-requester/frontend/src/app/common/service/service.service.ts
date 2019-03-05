import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  registerUser(user){
    return this.http.post("http://localhost:3000/products/register",user);
  }
  login(user){
    return  this.http.post("http://localhost:3000/products/login",user);
  }
}
