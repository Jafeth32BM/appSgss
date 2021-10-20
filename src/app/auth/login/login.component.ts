import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent{
  loginForm: FormGroup = this._fb.group({
    correo: ['alejandro_jp@tesch.edu.mx',[Validators.required, Validators.email]],
    contrasena: ['123456abc',[Validators.required, Validators.minLength(6)]],
  });
    constructor(private _fb: FormBuilder,
                private _router: Router,
                private authServ: AuthService) { }
    login(){
      const{correo,contrasena}= this.loginForm.value;
      this.authServ.login(correo,contrasena)
      .subscribe(resp =>{
        if (resp.ok===true) {
          if(resp.usuario[0].tipo == 'estudiante'){
            this._router.navigateByUrl('/alumno');
          }else{
            this._router.navigateByUrl('/admin');
          }
        } else {
          Swal.fire('Error',resp, 'error')
        }
      });
    }
}
