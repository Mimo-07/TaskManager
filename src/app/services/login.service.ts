import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { map} from 'rxjs/operators';
import { LoginViewModel } from '../Models/login-view-model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private httpClient: HttpClient;
  constructor(private httpBackend: HttpBackend) { 
    this.httpClient = new HttpClient(this.httpBackend);
  }

  currentUserName:any = null;

  public Login(loginViewModel: LoginViewModel):Observable<any>{
    return this.httpClient.post<any>("/api/account/authenticate",loginViewModel,{responseType:"json"})
    .pipe(map((user:any) => {
      if(user!=null)
      {
        this.currentUserName = user.userName;
        sessionStorage.setItem("currentUser", JSON.stringify(user));
      }
      return user;
    }));
  }

  public Logout()
  {
    this.currentUserName = null;
    sessionStorage.removeItem("currentUser");
  }
}
