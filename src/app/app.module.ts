import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component'
import { SidenavModule } from 'angular-ng-sidenav';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { RegistrationComponent } from './registration/registration.component';
import { AttendenceComponent } from './attendence/attendence.component';
import { MarksComponent } from './marks/marks.component';
import { FeeComponent } from './fee/fee.component';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './Component/home/home.component';
import { TypedDirective } from './Directives/typed.directive';
import { AdmissionComponent } from './Component/admission/admission.component';
import { FeeupdateComponent } from './Component/feeupdate/feeupdate.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    RegistrationComponent,
    AttendenceComponent,
    MarksComponent,
    FeeComponent,
    HomeComponent,
    TypedDirective,
    AdmissionComponent,
    FeeupdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule,
    SidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
