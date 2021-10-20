import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import validatetoken from 'src/app/utils/ValidateToken';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  [x: string]: any;

  constructor(private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('hello from token interceptor')
  
    if(request.url.includes('login') || request.url.includes('register')){
      console.log("inside the url if condition from token interceptor")
      
    }
     if(validatetoken()){
     
      const token = localStorage.getItem('token');
       request =  request.clone({
         headers:request.headers.set('Authorization',token || ''),})
      
    }
     else{
      console.log("invalid token");
      this.router.navigate(['/user/login']);
     
    }
    return next.handle(request);
    
  }
}
