import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  public isLoggedIn: boolean = false;
  loggedInUser: User;
  constructor(private http: HttpClient) { 
  }

  public signup(user: User){
    return this.http.post("http://localhost:8080/signup", user);
  }
  public validateUser(user: User) {
    return this.http.post("http://localhost:8080/login", user);
  //   for(var i=0; i<this.users.length; i++)
  //     if(this.users[i].email == user.email && this.users[i].password == user.password){
  //       this.isLoggedIn = true;
  //       console.log("returning true;")
  //       return true;
  //     }
  //      console.log("returning false");
  //      this.isLoggedIn = true;
  // return true;
 }
}