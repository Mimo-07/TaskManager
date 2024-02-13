import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var currentUser =  JSON.parse(sessionStorage.getItem("currentUser") || '{}');
    console.log("Interceptor 1");
    if(currentUser != '{}' )
    {
      //if we don't want to use this interceptor for a particular request we can use the req.url property to check with the required url we want and give next.handle(req)
      //without changing any request headers as mentioned here
      req = req.clone({
        setHeaders:{
          Authorization: "Bearer " + currentUser.token
        }
      });
    }  
    return next.handle(req);
  }
}
