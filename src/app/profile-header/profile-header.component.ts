import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.css']
})
export class ProfileHeaderComponent {

  
  constructor(private authservice:AuthService){}

  user='';
  loggedOut(){
    this.authservice.logout()
  }
  
  }
