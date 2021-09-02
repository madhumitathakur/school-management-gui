import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { User } from '../User';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public user: User
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.user = this.loginService.loggedInUser;
  }

}
