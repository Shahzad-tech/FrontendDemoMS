import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { LoginComponent } from '../admin/components/login/login.component';
import { TeacherDashboardComponent } from './components/teacher-dashboard/teacher-dashboard.component';
import { AuthGuard } from 'src/app/Guards/auth.guard';
import { TeacherGuard } from 'src/app/Guards/teacher.guard';
import { NotfoundComponent } from '../error/components/notfound/notfound.component';


const routes: Routes = [
 
  {path:'teacherDashboard', component:TeacherDashboardComponent, canActivate:[AuthGuard, TeacherGuard], data:{role:"Admin,Teacher"}},
  {path:'', component:NotfoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }






