import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { JwtInterceptorService } from './services/jwt-interceptor.service';
import { ErrorInterceptorService } from './services/error-interceptor.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AdminModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
  {
    provide:HTTP_INTERCEPTORS,
    useClass:JwtInterceptorService,
    multi:true
  },
  {
    provide:HTTP_INTERCEPTORS,
    useClass:ErrorInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
