import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { loginRoutingModule } from './login-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    NgbModule,
    loginRoutingModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
  ],
  exports:[LoginComponent]
})

export class LoginModule { }
