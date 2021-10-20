import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { AlumnoService } from '../../services/alumno.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
get alumn(){
  return this.authServ.alumno;
}

perfilForm: FormGroup = this.fb.group({
  genero:['',Validators.required],
  correo: ['',Validators.required],
  telefono:['',Validators.required]

});
alumno ={
  // genero: 'masculino',
  // correo: 'correo@correo.com',
  // telefono: '5598765432'
  genero: this.alumn.sexo,
  correo: this.alumn.correo,
  telefono: this.alumn.telefono
}
noregistro: string = this.alumn.noregistro;
  constructor(private authServ: AuthService,
              private alumService: AlumnoService,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.perfilForm.reset({
      ...this.alumno
    });
    this.perfilForm.valueChanges.
    subscribe( m=>{
      // Se dispara cada vez que hay un cambio en el formulario
      // console.log('Valor dentro del subscribe: '+JSON.stringify(m));
    });
  }
    guardar(){
    // const formValue = {...this.perfilForm.value};
    // this.alumno=formValue;
    const {genero, correo, telefono} = this.perfilForm.value;
      this.alumService.envAlumn(this.noregistro, genero,correo,telefono).
      subscribe(resp=>{
        if(resp.ok == true){

        }
      })
  }

}
