import { Injectable } from '@angular/core';

import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
// @Injectable({
//   providedIn: 'root'
// })
export class InterceptorService implements HttpInterceptor  {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // throw new Error('Method not implemented.');
    // if (!token) {
    //   return next.handle(req);
    // }

    const httpReq = req.clone({
      headers: new HttpHeaders({
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7ImlkIjo0NCwibm9tYnJlIjoibWFydGluIiwiYXBlbGxpZG8iOiJhc3Nzc3MiLCJlZGFkIjoyMiwicGFzc3dvcmQiOiIkMmIkMTAkamVjeGZLWFZLcUxjcFVwQTFxQ0lZLjMxLlMuTDlMb3BXTlZKdEd1UkpzOFQ1LzBZL01uZEcifSwiaWF0IjoxNjI3MjU1NTE5fQ.MNZzGtabVKQSxi2Ml7bCke2AbtR66lkshHNLJNbgr8w'
      })
    });
    return next.handle(httpReq);
  }
}
