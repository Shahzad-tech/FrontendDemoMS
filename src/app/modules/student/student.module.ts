import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDashboardComponent } from './components/student-dashboard/student-dashboard.component';
import { StudentRoutingModule } from './student-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarModule } from '../navbar/navbar.module';


@NgModule({
  declarations: [
    StudentDashboardComponent,
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    NavbarModule,
    NgbModule
  ]
})
export class StudentModule { }
