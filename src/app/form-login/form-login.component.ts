import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControlName, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {
 
  
  loginForm!:FormGroup;
  constructor(private formbuilder:FormBuilder, private http:HttpClient, private router:Router,private authservice:AuthService) {}

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email:['',[Validators.required, Validators.email,Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      pass:['',[Validators.required, Validators.minLength(5)]]
    })
    
  }
  login(){
    this.http.get<any>("http://localhost:3000/SignUp").subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.pass === this.loginForm.value.pass
      })
      if(user){
        alert("Login is successfully");
        this.loginForm.reset();
        this.router.navigate(['checkbox'])
      }else{
        alert("User Not Found !!")
      }
    },err=>{
      alert("Not login , Server side")
    }
    )

  }
  changetype:boolean=true;
 
  visible:boolean = true;

  viewPassword(){
    this.changetype = !this.changetype;
    this.visible = !this.visible;
  }
  loggedIn(){
    this.authservice.login()
  }
}

