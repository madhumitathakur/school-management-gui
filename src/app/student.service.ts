import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiurl = "http://localhost:8080/student/2";

  constructor(private http: HttpClient) { }


  getData() :any{
    return this.http.get<any>(this.apiurl)

  }
}
