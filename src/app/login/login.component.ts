import { Component } from '@angular/core';
import { LoginViewModel } from '../Models/login-view-model';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
loginViewModel: LoginViewModel = new LoginViewModel();
loginError!:string;

constructor(public loginService:LoginService,private router:Router){
}

onLoginClick(event:any){
  this.loginService.Login(this.loginViewModel).subscribe({
    next:(res) => 
    {
      this.router.navigateByUrl("/dashboard");
    },
    error:(err) => 
    {
      console.log(err);
      this.loginError = "Invalid username or password"
    }
  });
}
}
