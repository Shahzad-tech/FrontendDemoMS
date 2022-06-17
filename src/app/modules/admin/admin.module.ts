import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatSortModule } from '@angular/material/sort';
import { UpdateStudentComponent } from './components/update-student/update-student.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { StudentComponent } from './components/student/student.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { adminRoutingModule } from './admin-routing.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NavbarModule } from '../navbar/navbar.module';


@NgModule({
  declarations: [
     TeacherComponent,
     StudentComponent,
     AdminDashboardComponent,
     UpdateStudentComponent,
  ],
  imports: [
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    NgbModule,
    MatSliderModule,
    MatSortModule,
    CommonModule, 
    adminRoutingModule,
    NavbarModule
  ],

})
export class AdminModule { }
