import { Component,OnInit  } from '@angular/core';
import {FormBuilder,FormGroup,FormControlName, UntypedFormBuilder, Validators} from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import {Router} from '@angular/router'
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-form-sigup',
  templateUrl: './form-sigup.component.html',
  styleUrls: ['./form-sigup.component.css']
})
export class FormSigupComponent {

 
 signupform!: FormGroup;
  constructor(private formbuilder:FormBuilder, private http:HttpClient, private router:Router){}
  ngOnInit():void{
this.signupform=this.formbuilder.group({
name:['',Validators.required],
phnno:['',Validators.required],
email:['',[Validators.required, Validators.email,Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
pass:['',[Validators.required, Validators.minLength(6)]]
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
changetype:boolean=true;
 
  visible:boolean = true;

  viewPassword(){
    this.changetype = !this.changetype;
    this.visible = !this.visible;
  }
}
