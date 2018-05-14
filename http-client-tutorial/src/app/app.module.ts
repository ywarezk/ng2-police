import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import { JwtInterceptorService } from './jwt-interceptor.service';
import { LoginService } from './login.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
      {provide: HTTP_INTERCEPTORS, multi: true, useClass: JwtInterceptorService},
      LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
