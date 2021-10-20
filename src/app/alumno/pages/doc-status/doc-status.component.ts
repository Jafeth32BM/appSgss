import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { AlumnoService } from '../../services/alumno.service';
export interface estadoDoc {
  id: string;
  nombre: string;
  estado: string;
  ruta?: string;
}

@Component({
  selector: 'app-doc-status',
  templateUrl: './doc-status.component.html',
  styles: [
  ]
})
export class DocStatusComponent implements OnInit {
  get alumn() {
    return this.authServ.alumno;
  }
  get documento(){
    return this.alumService.doc;
  }
  ruta = this.documento.ruta;
  documentos: estadoDoc[] = [
    { id: 'historial', nombre: 'Historial Academico', estado: this.documento.historial, ruta: this.ruta },
    { id: 'curp', nombre: 'CURP', estado: this.documento.curp, ruta: this.ruta },
    { id: 'actnacim', nombre: 'Acta de Nacimiento', estado: this.documento.actnacim, ruta: this.ruta },
    { id: 'cargacadem', nombre: 'Carga Academica', estado: this.documento.cargacadem, ruta: this.ruta },
    { id: 'conscredit', nombre: 'Constancia de creditos', estado: this.documento.conscredit, ruta: this.ruta },
    { id: 'solservsoci', nombre: 'Solicitud de Servicio Social', estado: this.documento.solservsoci, ruta: this.ruta },
    { id: 'imss', nombre: 'Numero de Seguro Social', estado: this.documento.imss, ruta: this.ruta },
  ];

    columnsOrder: string[] = ['nombre', 'estado', 'ruta', 'acciones'];
    datosTabla = this.documentos;
  constructor(private alumService: AlumnoService,
    private authServ: AuthService) { }

  ngOnInit(): void {

    this.alumService.recibDocs(this.alumn.noregistro).subscribe(
      resp => {
        console.log('Viene del componente ' + resp)
        this.alumService.doc;
      }
    );

    console.log('Valor de Alumno');
    console.log(this.alumn);
    console.log('Valor de documento');
    console.log(this.documento);
  }
}
