import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { User } from '../User';

@Component({
  selector: 'app-fee',
  templateUrl: './fee.component.html',
  styleUrls: ['./fee.component.css']
})
export class FeeComponent implements OnInit {

  user: User;
  public feeType = "1";
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.user = this.loginService.loggedInUser;
  }

}
