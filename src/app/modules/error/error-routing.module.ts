import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/Guards/auth.guard';
import { StudentGuard } from 'src/app/Guards/student.guard';
import { NotfoundComponent } from './components/notfound/notfound.component';


const routes: Routes = [
  
   {path:'', component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ErrorRoutingModule { }
