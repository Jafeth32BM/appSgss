import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnoRoutingModule } from './alumno-routing.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import { EmpresaComponent } from './pages/empresa/empresa.component';
import { EscolarComponent } from './pages/escolar/escolar.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { ComentariosComponent } from './pages/comentarios/comentarios.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { DocTeschaComponent } from './components/doc-tescha/doc-tescha.component';
import { MaterialModule } from '../material/material.module';
import { DocStatusComponent } from './pages/doc-status/doc-status.component';


@NgModule({
  declarations: [
    InicioComponent,
    DocStatusComponent,
    EmpresaComponent,
    EscolarComponent,
    PerfilComponent,
    ComentariosComponent,
    DocTeschaComponent
  ],
  imports: [
    CommonModule,
    AlumnoRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class AlumnoModule { }
