import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { catchError, map, tap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { ActuAlumn, datoEscolarAlumno, DatosEscuela, Docalumn, DocStatus } from '../interfaces/interfaces';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  private baseUrl: String = environment.baseUrl;
  private _docs!: Docalumn;
  private escolarAlumno!: datoEscolarAlumno;
  get doc() {
    return {...this._docs};
  }
  get datEscAlumn() {
    return { ...this.escolarAlumno }
  }

  constructor(private http: HttpClient) { }

  recibDocs(noregistro: string): Observable<boolean> {
    const url = `${this.baseUrl}/alumnodoc`;
    const enca = new HttpHeaders()
      .set('noregistro', noregistro);
    return this.http.get<DocStatus>(url, { headers: enca })
      .pipe(
        map(resp => {
          console.log('Viene en el server-alumn' + JSON.stringify(resp));
          this._docs = {
            noregistro: resp.docalumn[0].noregistro!,
            historial: resp.docalumn[0].historial!,
            curp: resp.docalumn[0].curp!,
            actnacim: resp.docalumn[0].actnacim!,
            cargacadem: resp.docalumn[0].cargacadem!,
            conscredit: resp.docalumn[0].conscredit!,
            solservsoci: resp.docalumn[0].solservsoci!,
            imss: resp.docalumn[0].imss!,
            ruta: resp.docalumn[0].ruta!,
          };
          console.log(this.doc);
          return resp.ok;
        }),
        catchError(err => of(false))
      );
  }
  recibEscAlumn(noregistro: string): Observable<boolean> {
    const url = `${this.baseUrl}/datoesco`;
    const enca = new HttpHeaders()
      .set('noregistro', noregistro);
    return this.http.get<DatosEscuela>(url, { headers: enca })
      .pipe(
        map(resp => {
          console.log('Viene en el server-alumn' + JSON.stringify(resp));
          console.log(resp);
          this.escolarAlumno = {
            noregistro: resp.datoEscolar[0].noregistro!,
            matricula: resp.datoEscolar[0].matricula!,
            carrera: resp.datoEscolar[0].carrera!,
            siss: resp.datoEscolar[0].siss!,
            pinicio: resp.datoEscolar[0].pinicio!,
            pfin: resp.datoEscolar[0].pfin!,
            promedio: resp.datoEscolar[0].promedio!,
            porcentaje: resp.datoEscolar[0].porcentaje!,
          };
          console.log(this.datEscAlumn);
          return resp.ok;
        }),
        catchError(err => of(false))
      );
  }


  envAlumn(noregistro: string, genero: string, correo: string, telefono: string) {
    const url = `${this.baseUrl}/actAlum`;
    const body = { noregistro, genero, correo, telefono };
    return this.http.put<ActuAlumn>(url, body).pipe(
      tap((resp) => {
        if (resp.ok) {
          Swal.fire('Hecho ! ! !', resp.msg, 'success')
        }
      })
    )
  }

}
