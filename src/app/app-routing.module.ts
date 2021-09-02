import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendenceComponent } from './attendence/attendence.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './Component/home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeeComponent } from './fee/fee.component';
import { LoginComponent } from './login/login.component';
import { MarksComponent } from './marks/marks.component';
import { RegistrationComponent } from './registration/registration.component';
import { SignupComponent } from './signup/signup.component'
import { AdmissionComponent } from './Component/admission/admission.component';
import { FeeupdateComponent } from './Component/feeupdate/feeupdate.component';

const routes: Routes = [
  { path:'', component:HomeComponent},

  { path:'home', component:HomeComponent },
  { 
    path:'Login', 
    component:LoginComponent,
  },
  { 
    path:'Signup', 
    component:SignupComponent,
  },
  {
    path: 'dashboard' , 
    component:DashboardComponent,
    canActivate:[AuthGuard],
    children:[
      {
        path: 'admission' ,
        component:AdmissionComponent,
        canActivate:[AuthGuard]     
      },
      { 
        path: 'registration' , 
        component: RegistrationComponent ,
        canActivate:[AuthGuard]
      },
      { 
        path: 'attendence', 
        component: AttendenceComponent,
        canActivate:[AuthGuard]
      },
      { 
        path: 'marks', 
        component: MarksComponent,
        canActivate:[AuthGuard]
      },
      { 
        path: 'fee', 
        component: FeeComponent,
        canActivate:[AuthGuard] 
      },
      {
        path: 'feeupdate',
        component: FeeupdateComponent,
        canActivate:[AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
