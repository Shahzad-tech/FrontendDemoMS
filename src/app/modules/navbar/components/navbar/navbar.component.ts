import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
// import { LocalStorageRefService } from 'src/app/Services/local-storage-ref.service';
import { HelperService } from 'src/app/Services/helper.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  
  userEmail:any;
  UserRole:any;
  
  constructor(private AuthService: AuthService, private router: Router, private _helperService : HelperService) { }

  ngOnInit(): void {
  
    this._helperService.getUserRoleBs().subscribe((data:any)=>{this.UserRole = data})
    this._helperService.getUserEmailBs().subscribe((data:any)=>{this.userEmail = data});
    // this._helperService.setUserEmailBs(localStorage.getItem('Email'))
     // this._helperService.setUserRoleBs(localStorage.getItem('Role'))  
    this._helperService.setUserEmailBs(this._helperService.getUserEmail())
    this._helperService.setUserRoleBs(this._helperService.getUserRole()) 
    
  }

  Logout(){

    this._helperService.logout();
    this.router.navigate(["login"])
  
  }
 

}
