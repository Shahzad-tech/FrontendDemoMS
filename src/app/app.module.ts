import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TokenInterceptorService } from './Services/token-interceptor.service';
import { NavbarModule } from './modules/navbar/navbar.module';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { LoginModule } from './modules/login/login.module';





@NgModule({
  declarations: [
     AppComponent,

  ],
  imports: [
  HttpClientModule,
  BrowserAnimationsModule,
  BrowserModule,
  AppRoutingModule,
  HttpClientModule,
  // NavbarModule
  // LoginModule
    
  ],
  providers: [  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
 }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
