import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SwalService {

  constructor() { }

  alertError(){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'There is some error!'
    })
  }
  
  alertSuccessfull(){  
    Swal.fire({
      icon: 'success',
      title: 'Student has been updated',
      showConfirmButton: false,
      timer: 1500
    }); 
  }
}
