import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
isLoggedin:boolean=false
  constructor(private http:HttpClient) { }
  login(){
    this.isLoggedin=true
  }
  logout(){
    this.isLoggedin=false
  }
  isAuthinticated(){
    return this.isLoggedin
  }
}
