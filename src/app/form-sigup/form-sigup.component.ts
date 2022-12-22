import { Component,OnInit  } from '@angular/core';
import {FormBuilder,FormGroup,FormControlName, UntypedFormBuilder} from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import {Router} from '@angular/router'


@Component({
  selector: 'app-form-sigup',
  templateUrl: './form-sigup.component.html',
  styleUrls: ['./form-sigup.component.css']
})
export class FormSigupComponent {
 signupform!: FormGroup
  constructor(private formbuilder:FormBuilder, private http:HttpClient, private router:Router){}
  ngOnInit():void{
this.signupform=this.formbuilder.group({
name:[''],
phnno:[''],
email:[''],
pass:['']
})
  }
  signup(){
this.http.post<any>("http://localhost:3000/SignUp",this.signupform.value).subscribe(res=>{
  alert("Registration Succesfully");
  this.signupform.reset();
  this.router.navigate(['form-login'])
},err=>{
  alert("Not Successfull")
})
}
}
