import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService implements HttpInterceptor{

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Interceptor 2");
    return next.handle(req).pipe(tap(
      {
        next:(event:HttpEvent<any>) => 
        {
          if(event instanceof HttpResponse)
          {
              //can do something with the response
          }

        },
        error:(error:any) => {
          if(error instanceof HttpErrorResponse)
          {
            if(error.status == 401) 
            {
              console.log(error);
              alert("401 Unauthorized");
            }
            if(error.status != 401)
            {
              alert("error interceptor working");
              console.log(error);
            }
          }
        }
      }
    ));
  }
}
