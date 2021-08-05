import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { UserI } from 'src/app/interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  usuariosAll$ = this.http.get<any[]>(environment.server);

  login(usuario: string, password: string): Observable<any> {
    return this.http.post<any>( `${environment.server}/login`, { usuario, password } )
      // .pipe( catchError((err: HttpErrorResponse) => {
      //   console.log(err.error.msj);
      //   return of([]);
      // }) );
  }
  eliminar(id: number): Observable<any> {
    return this.http.delete<any>( `${environment.server}/${id}`);
  }

  updateUser(user: UserI): Observable<any>{
    return this.http.post<any>(` ${environment.server}/`, user);
  }
}
