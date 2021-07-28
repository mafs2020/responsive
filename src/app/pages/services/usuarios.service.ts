import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  usuariosAll$ = this.http.get<any[]>(environment.server);

  login(usuario: string = 'pepe', password: string = '123456'): Observable<any> {
    return this.http.post<any>( `${environment.server}/login`, { usuario, password } );
  }
}
