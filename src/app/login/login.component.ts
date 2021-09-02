import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { User } from '../User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  public login(loginForm){
    console.log(loginForm);
    if(loginForm.invalid)
      return ;
   this.loginService.validateUser({email:loginForm.value.email, password:loginForm.value.pwd}).subscribe(
     (response: User) =>{
      this.loginService.isLoggedIn = true;
      this.loginService.loggedInUser = response;
      this.router.navigate(["dashboard"])
      console.log('login successfully');
     }, () =>{window.alert("login failed");}
   );
 
  }

}