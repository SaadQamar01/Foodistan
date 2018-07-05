// import { Injectable } from '@angular/core';
// import {
//     HttpRequest,
//     HttpHandler,
//     HttpEvent
//   } from '@angular/common/http';
//   import { AuthProvider } from '..//auth/auth';
//   import { Observable } from 'rxjs/Observable';
//   @Injectable()
//   export class TokenInterceptor{

//     constructor(public auth: AuthProvider) {}

//     intercept(request:HttpRequest<any>,next: HttpHandler):

//     Observable<HttpEvent<any>>
    
//     {
//       request = request.clone({
       
//         setHeaders: {
//           Content: 'application/json',
//           Authorization: `bearer ${this.auth.getToken()}`
        
//         }
//       });
//       return next.handle(request);

//     }

//     }

  