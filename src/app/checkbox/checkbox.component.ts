import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent {
displayVal='';
displayVal1='';
displayVal2='';
getValue(val:string){
  this.displayVal=val
}
getValue1(val:string){
  
  this.displayVal1=val
}
getValue2(val:string){
  
  this.displayVal2=val
}
}
