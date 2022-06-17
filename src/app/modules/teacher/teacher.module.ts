import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherDashboardComponent } from './components/teacher-dashboard/teacher-dashboard.component';
import { TeacherRoutingModule } from './teacher-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarModule } from '../navbar/navbar.module';




@NgModule({
  declarations: [
    TeacherDashboardComponent,
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    NgbModule,
    NavbarModule
  ]
})
export class TeacherModule { }
