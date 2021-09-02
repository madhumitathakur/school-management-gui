import { Component, OnInit } from '@angular/core';
import { CustomHttpServiceService } from 'src/app/custom-http-service.service';
import { LoginService } from 'src/app/login.service';
import { ClassDetail } from 'src/app/models/ClassDetail';
import { User } from 'src/app/User';

@Component({
  selector: 'app-feeupdate',
  templateUrl: './feeupdate.component.html',
  styleUrls: ['./feeupdate.component.css']
})
export class FeeupdateComponent implements OnInit {

  public classDetails: ClassDetail [] = [];
  public selectedClass: ClassDetail;
  public selectedClassId: ClassDetail;
  user: User;
  constructor(private loginService: LoginService, private customHttpService: CustomHttpServiceService) { }

  ngOnInit(): void {
    this.user = this.loginService.loggedInUser;
    this.getClassDetails();
  }

  private getClassDetails(){
    this.customHttpService.getAllClass().subscribe((classDetails: ClassDetail[]) =>{
      this.classDetails = classDetails;
    });
  }

  public updateFee(){
    this.customHttpService.updateFee(this.selectedClass).subscribe(
      ()=>this.getClassDetails()
    );
  }

  public changeClass(event: ClassDetail)
  {
    this.selectedClass = {... event};
    console.log(event);
  }
}
