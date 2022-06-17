import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/Services/data.service';
import Swal from 'sweetalert2';
import { SwalService } from 'src/app/Services/swal.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  constructor(private route: ActivatedRoute, private _dataService: DataService, private router:Router, private _alertService:SwalService) { }
  
  data:any;
  programs:any;

  ngOnInit(): void {
  this.getPrograms();
  this.data = JSON.parse(this.route.snapshot.queryParamMap.get("data")!);
  this.StudentUpdationForm = new FormGroup({
    Name: new FormControl(this.data.name,[Validators.required,Validators.minLength(5) ,Validators.pattern('^[A-Za-z ]+$')]),
    FatherName: new FormControl(this.data.fatherName,[Validators.required, Validators.minLength(5),Validators.pattern('^[A-Za-z ]+$')]),
    Address: new FormControl(this.data.address,[Validators.required, Validators.pattern('^[a-zA-Z0-9!@#$&()\\-`.+,/\ "]*$')]),
    LastProgram: new FormControl(this.data.lastProgram,[Validators.required]),
    CurrentProgram: new FormControl(this.data.currentProgram,[Validators.required]),
    CurrentGPA: new FormControl(this.data.currentGPA,[Validators.required , Validators.pattern('^[0-9.]*$'), Validators.min(1), Validators.max(4)]),
    Status: new FormControl(this.data.status,[Validators.required]),
  })

  }

  StudentUpdationForm :any 

  UpdateStudent(){
    this._dataService.UpdateStudent(this.data.id,this.StudentUpdationForm.value).subscribe(
      data=>{console.log(data); 
        this._alertService.alertSuccessfull();  
        this.router.navigate(["admin/students"])},
      err=>{console.log(err);
        this._alertService.alertError();
      }

    )
    console.log(this.StudentUpdationForm.value)
  }

  getPrograms(){
    this._dataService.getPrograms().subscribe(
      data=>{this.programs = data},
      err=>{console.log(err)})
  }


  get Name(){
    return this.StudentUpdationForm.get('Name')
  }
  get FatherName(){
    return this.StudentUpdationForm.get('FatherName')
  }
  get Address(){
    return this.StudentUpdationForm.get('Address')
  }
  get LastProgram(){
    return this.StudentUpdationForm.get('LastProgram')
  }
  get CurrentProgram(){
    return this.StudentUpdationForm.get('CurrentProgram')
  }
  get CurrentGPA(){
    return this.StudentUpdationForm.get('CurrentGPA')
  }
  get Status(){
    return this.StudentUpdationForm.get('Status')
  }
  
}
