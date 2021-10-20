import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComentariosComponent } from './pages/comentarios/comentarios.component';
import { DocStatusComponent } from './pages/doc-status/doc-status.component';
import { EmpresaComponent } from './pages/empresa/empresa.component';
import { EscolarComponent } from './pages/escolar/escolar.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';

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
        path: 'alumno',
        component: UsuarioComponent,
      },
      {
        path:'**',
        redirectTo: 'alumno',
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
