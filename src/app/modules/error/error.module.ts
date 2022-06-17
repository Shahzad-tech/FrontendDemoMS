import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NotfoundComponent } from './components/notfound/notfound.component';



@NgModule({
  declarations: [NotfoundComponent],
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule
  ],
  exports:[NotfoundComponent]
})

export class ErrorModule { }
