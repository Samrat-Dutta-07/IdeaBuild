import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { FormSigupComponent } from './form-sigup/form-sigup.component';
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
  {
    path:'checkbox', component:CheckboxComponent,
    canActivate:[AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
