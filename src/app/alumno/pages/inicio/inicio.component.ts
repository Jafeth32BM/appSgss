import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styles: [
  ]
})
export class InicioComponent{
get alumn (){
  return this.authServ.alumno;
}
  constructor( private _router: Router,
               private authServ: AuthService) { }
 logout(){
   localStorage.clear();
   this._router.navigateByUrl('/');
 }

}
