import { Component, OnInit } from '@angular/core';
import { CustomHttpServiceService } from 'src/app/custom-http-service.service';
import { LoginService } from 'src/app/login.service';
import { ClassDetail } from 'src/app/models/ClassDetail';
import { User } from 'src/app/User';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css']
})
export class AdmissionComponent implements OnInit {

  public classDetails: ClassDetail [] = [];
  public loggedInUser: User;
  public selectedClassId: number;
  public selectedUserId: number;
  public users: User [] = []
  constructor(private customHttpService: CustomHttpServiceService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.loggedInUser = this.loginService.loggedInUser;
    this.getClassDetails();
    if(this.loggedInUser.isAdmin){
      this.getUsers();
    }
  }

  private getClassDetails(){
    this.customHttpService.getAllClass().subscribe((classDetails: ClassDetail[]) =>{
      this.classDetails = classDetails;
    });
  }

  private getUsers(){
    this.customHttpService.getAllUser().subscribe((user: User[]) =>{
      this.users = user;
    });
  }

  public getAdmission() {
    this.customHttpService.getAdmission(this.selectedUserId || this.loggedInUser.registrationId, this.selectedClassId)
    .subscribe((user: User) =>{
      window.alert("Admission sucessful, Kindly pay admission fee");
    });
  }

}
