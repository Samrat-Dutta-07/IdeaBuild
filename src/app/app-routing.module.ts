import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormLoginComponent } from './form-login/form-login.component';
import { FormSigupComponent } from './form-sigup/form-sigup.component';
import { HomeComponent } from './home/home.component';
import { ResultComponent } from './result/result.component';
import { SlideComponent } from './slide/slide.component';

const routes: Routes = [
  {
    path:'', redirectTo:'slide', pathMatch:'full'
  },
  {
    path:'form-login', component:FormLoginComponent 
  },
  {
    path:'form-sigup', component:FormSigupComponent
  },
  {
    path:'slide', component:SlideComponent
  },
  {
    path:'result', component:ResultComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
