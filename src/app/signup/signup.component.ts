import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  private isAdmin: boolean = true;
  constructor(private loginService: LoginService,private router: Router) { }
    user1: User = new User();
    ngOnInit(): void {
  }


  public submitForm(){
    this.loginService.signup(this.user1)
    console.log(this.user1);
    this.loginService.signup(this.user1).subscribe(() => {
      window.alert("User saved successfully");
    }, ()=> {
      window.alert("unable to save user");
    });
  }
}
