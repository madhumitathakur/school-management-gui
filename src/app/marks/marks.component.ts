import { Component, OnInit } from '@angular/core';
import { CustomHttpServiceService } from '../custom-http-service.service';
import { LoginService } from '../login.service';
import { ClassDetail } from '../models/ClassDetail';
import { Result } from '../models/Result';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.css']
})
export class MarksComponent implements OnInit {

  public classDetails: ClassDetail [] = [];
  public selectedClass: number;
  public results: Result[];
  constructor(private customHttpService: CustomHttpServiceService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.getClassDetails();
  }

  private getClassDetails(){
    this.customHttpService.getAllClass().subscribe((classDetails: ClassDetail[]) =>{
      this.classDetails = classDetails;
    });
  }
  public getResult(){
    this.customHttpService.getResult(this.loginService.loggedInUser.registrationId, this.selectedClass)
    .subscribe((result: Result[]) =>{
      this.results = result;
    });
  }


}
