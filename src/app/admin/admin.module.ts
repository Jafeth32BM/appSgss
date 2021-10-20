import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import { DocStatusComponent } from './pages/doc-status/doc-status.component';
import { EmpresaComponent } from './pages/empresa/empresa.component';
import { EscolarComponent } from './pages/escolar/escolar.component';
import { ComentariosComponent } from './pages/comentarios/comentarios.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';


@NgModule({
  declarations: [
    InicioComponent,
    DocStatusComponent,
    EmpresaComponent,
    EscolarComponent,
    ComentariosComponent,
    UsuarioComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
