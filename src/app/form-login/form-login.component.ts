import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControlName } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {

  loginForm!:FormGroup;
  constructor(private formbuilder:FormBuilder, private http:HttpClient, private router:Router) {}

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email:[''],
      pass:['']
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
        this.router.navigate([''])
      }else{
        alert("User Not Found !!")
      }
    },err=>{
      alert("Not login , Server side")
    }
    )

  }
}
