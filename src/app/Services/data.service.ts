import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { LocalStorageRefService } from './local-storage-ref.service';
import { HelperService } from './helper.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl = environment.baseUrl
  // baseUrl = "https://localhost:7070"

  constructor(private http:HttpClient) { }

  getStudents(sortConfig:any){
      
    let url = this.baseUrl+`/Student/GetStudents`
    return this.http.post(url,sortConfig)

  }
  UpdateStudent(id:any, data:any){
    let url = this.baseUrl+`/Student/UpdateStudent/${id}`
    return this.http.put(url,data)
  }

  getPrograms(){
    let url = this.baseUrl+`/Program/GetProgram`
    return this.http.get(url)
  }

  getStudentByid(id:any){
    let url = this.baseUrl+`/Student/${id}`
    return this.http.get(url)
  }

}
