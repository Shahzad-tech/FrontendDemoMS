import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorModule } from './modules/error/error.module';


const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path:'teacher',
    loadChildren:()=>import('./modules/teacher/teacher.module').then(m=>m.TeacherModule)
  },
  {
    path:'student',
    loadChildren:()=>import('./modules/student/student.module').then(m=>m.StudentModule)
  },
  {
    path:'login',
    loadChildren:()=>import('./modules/login/login.module').then(m=>m.LoginModule)
  },
  {
    path:'navbar',
    loadChildren:()=>import('./modules/navbar/navbar.module').then(m=>m.NavbarModule)
  },
 
  {
    path: '',
     loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
