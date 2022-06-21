import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HelperService } from './helper.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentModuleDataService {

  baseUrl = environment.baseUrl
 
  constructor(private http:HttpClient) { }

  // getStudentDataById(id:any){
  //   let url = this.baseUrl + `GetStudentByIdentity/${id}`
  //   console.log("hellppppppp");
  // }



}
