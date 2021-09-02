import { Component } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  public studentData: Student;

  constructor(private student:StudentService) { }


  getDataFromAPI() {
    this.student.getData().subscribe((data: Student) =>{
      console.log(data)
      this.studentData = data
    }) 
  }
}
