import { Injectable } from '@angular/core';

import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs';

// ngrx
import { Store } from '@ngrx/store';
import { getToken, State } from '../login/state/login.reduce';

@Injectable()
// @Injectable({
//   providedIn: 'root'
// })
export class InterceptorService implements HttpInterceptor  {
  token: string;
  constructor(private store: Store<State>) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // throw new Error('Method not implemented.');
    
    this.store.select( getToken ).subscribe(token => {
      this.token = token;
      console.log(token)
    });

    
    if (!this.token) {
      return next.handle(req);
    }

    const httpReq = req.clone({
      headers: new HttpHeaders({
        token: this.token
        // token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7ImlkIjo0NCwibm9tYnJlIjoibWFydGluIiwiYXBlbGxpZG8iOiJhc3Nzc3MiLCJlZGFkIjoyMiwicGFzc3dvcmQiOiIkMmIkMTAkamVjeGZLWFZLcUxjcFVwQTFxQ0lZLjMxLlMuTDlMb3BXTlZKdEd1UkpzOFQ1LzBZL01uZEcifSwiaWF0IjoxNjI3MjU1NTE5fQ.MNZzGtabVKQSxi2Ml7bCke2AbtR66lkshHNLJNbgr8w'
      })
    });
    return next.handle(httpReq);
  }
}
