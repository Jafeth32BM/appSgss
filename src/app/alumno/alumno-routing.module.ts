import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComentariosComponent } from './pages/comentarios/comentarios.component';
import { DocStatusComponent } from './pages/doc-status/doc-status.component';
import { EmpresaComponent } from './pages/empresa/empresa.component';
import { EscolarComponent } from './pages/escolar/escolar.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PerfilComponent } from './pages/perfil/perfil.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
    children: [
      {
        path: 'status',
        component: DocStatusComponent,
      },
      {
        path: 'perfil',
        component: PerfilComponent,
      },
      {
        path: 'escolar',
        component: EscolarComponent,
      },
      {
        path: 'empresa',
        component: EmpresaComponent,
      },
      {
        path: 'comentario',
        component: ComentariosComponent,
      },
      {
        path:'**',
        redirectTo: 'status',
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnoRoutingModule { }
