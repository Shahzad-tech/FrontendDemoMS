import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/Services/helper.service';
import { StudentModuleDataService } from 'src/app/Services/student-module-data.service';
import { DataService } from 'src/app/Services/data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SwalService } from 'src/app/Services/swal.service';


@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {

  data:any
  programs:any
  StudentUpdationForm : any
  
  constructor(private _helperService: HelperService, private _dataServices: DataService, private _alertService:SwalService ) {

    this.StudentUpdationForm = new FormGroup({
      Name: new FormControl({value:'', disabled: true},[Validators.required,Validators.minLength(5) ,Validators.pattern('^[A-Za-z ]+$')]),
      FatherName: new FormControl({value:'', disabled: true},[Validators.required, Validators.minLength(5),Validators.pattern('^[A-Za-z ]+$')]),
      Address: new FormControl({value:'', disabled: false},[Validators.required, Validators.pattern('^[a-zA-Z0-9!@#$&()\\-`.+,/\ "]*$')]),
      LastProgram: new FormControl({value:'', disabled: false},[Validators.required]),
      CurrentProgram: new FormControl({value:'', disabled: false},[Validators.required]),
      CurrentGPA: new FormControl({value:'', disabled: true},[Validators.required , Validators.pattern('^[0-9.]*$'), Validators.min(1), Validators.max(4)]),
      Status: new FormControl({value:'', disabled: true},[Validators.required]),
    })

   }


  ngOnInit(): void {
  
    const id = this._helperService.getUserId()
    this.getPrograms();
    
    this._dataServices.getStudentDataByIdentityId(id).subscribe(
      (data:any)=>{
        console.log(data);
        
        this.StudentUpdationForm.setValue(
        {Name: data.name, FatherName: data.fatherName, Address: data.address, LastProgram: data.lastProgram, 
        CurrentProgram:data.currentProgram, CurrentGPA :data.currentGPA,Status: data.status}
         )

        this.data = data
      }),
      (err: any)=>console.log(err)

      
      
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
  
  getPrograms(){
    this._dataServices.getPrograms().subscribe(
      data=>{this.programs = data},
      err=>{console.log(err)})
  }

  UpdateStudent(){

    this._dataServices.UpdateStudent(this.data.id,this.StudentUpdationForm.getRawValue()).subscribe(
      data=>{console.log(data); 
        this._alertService.alertSuccessfull();  
        // this.router.navigate(["admin/students"])
      },
      err=>{console.log(err);
        this._alertService.alertError();
      }
    )
    console.log("checkmate",this.StudentUpdationForm.getRawValue())
  }


}

