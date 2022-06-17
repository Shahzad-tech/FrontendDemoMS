import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './components/student/student.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { UpdateStudentComponent } from './components/update-student/update-student.component';
import { AuthGuard } from 'src/app/Guards/auth.guard';
import { AdminGuard } from 'src/app/Guards/admin.guard';
import { NotfoundComponent } from '../error/components/notfound/notfound.component';




const routes: Routes = [
 
  {path:'', component:NotfoundComponent},
  {path:'students', component:StudentComponent,canActivate:[AuthGuard, AdminGuard], data:{role:"Admin"}},
  {path:'teacher', component:TeacherComponent, canActivate:[AuthGuard, AdminGuard ], data:{role:"Admin"}},
  {path:'adminDashboard', component:AdminDashboardComponent, canActivate:[AuthGuard, AdminGuard], data:{role:"Admin"}},
  {path:'UpdateStudent', component: UpdateStudentComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class adminRoutingModule { }
