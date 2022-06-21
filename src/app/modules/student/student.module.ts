import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDashboardComponent } from './components/student-dashboard/student-dashboard.component';
import { StudentRoutingModule } from './student-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarModule } from '../navbar/navbar.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StudentDashboardComponent,
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    NavbarModule,
    NgbModule,
    ReactiveFormsModule
  ]
})
export class StudentModule { }
