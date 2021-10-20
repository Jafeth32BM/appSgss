import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { catchError, map, tap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { Usuario, Login, Registro, Result } from '../interfaces/interfaces';
import { AlumnoService } from 'src/app/alumno/services/alumno.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string = environment.baseUrl;
  private _user!: Result;
  get alumno() {
    return { ...this._user };
  }

  constructor(private http: HttpClient,
    private almServ: AlumnoService) { }

  login(correo: string, contrasena: string) {
    const url = `${this.baseUrl}/`;
    const body = { correo, contrasena };
    return this.http.post<Login>(url, body).pipe(
      tap((resp) => {
        if (resp.ok) {
          // console.log('viene del login: '+ JSON.stringify(resp.usuario[0].tipo));
          localStorage.setItem('token', resp.token!);
          // console.log(localStorage)
        }
      }),
      map((resp) => resp),
      catchError((err) => of(err.error.msg))
    );
  }
  validToken(): Observable<boolean> {
    const url = `${this.baseUrl}/revalid`;
    const encabezado = new HttpHeaders()
      .set('x-token', localStorage.getItem('token') || '');
    return this.http.get<Registro>(url, { headers: encabezado })
      .pipe(
        map(resp => {
          // console.log('viene del valid token: '+ JSON.stringify(resp))
          localStorage.setItem('token', resp.token!);
          this._user = {
            noregistro: resp.noregistro!,
            curp: resp.curp,
            contrasena: resp.contrasena!,
            nuevacontra: resp.nuevacontra!,
            apaterno: resp.apaterno!,
            amaterno: resp.amaterno!,
            nombres: resp.nombres!,
            sexo: resp.sexo!,
            correo: resp.correo!,
            telefono: resp.telefono!,
            tipo: resp.tipo!,
            fecharegistro: resp.fecharegistro!,
          };

          return resp.ok;
        }),
        catchError(err => of(false))
      );
  }
}
