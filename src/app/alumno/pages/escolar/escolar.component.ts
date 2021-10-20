import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/services/auth.service';
import { AlumnoService } from '../../services/alumno.service';

@Component({
  selector: 'app-escolar',
  templateUrl: './escolar.component.html',
  styles: [
  ]
})
export class EscolarComponent implements OnInit {
  fechaInicio = new Date();
  fechaTermino = new Date();
  carr = '';
  get alumn() {
    return this.authServ.alumno;
  }
  get alumnoEscolar() {
    return this.alumService.datEscAlumn;
  }
  carreras: string [] = [
    'Ingenieria en Sistemas Computaciones',
    'Ingenieria Industrial',
    'Ingenieria Informática',
    'Ingenieria Electromecánica',
    'Ingenieria Electrónica',
    'Ingenieria en Administración',
  ]

  escolarForm: FormGroup = this.fb.group({
    carre: [this.carr, Validators.required],
    siss: ['', Validators.required],
    promedio: ['', Validators.required],
    porcentaje: ['', Validators.required],
    finicio: [this.fechaInicio, Validators.required],
    ftermino: [this.fechaTermino, Validators.required],
  });
  datoEscolar={
    carre: this.alumnoEscolar.carrera,
    siss: this.alumnoEscolar.siss,
    primedio: this.alumnoEscolar.promedio,
    porcentaje: this.alumnoEscolar.porcentaje,
    finicio: this.alumnoEscolar.pinicio,
    ftermino: this.alumnoEscolar.pfin
  }

  constructor(private authServ: AuthService,
    private alumService: AlumnoService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    
  }
  campoValido(campo: string) {
    return this.escolarForm.controls[campo].errors
      && this.escolarForm.controls[campo].touched;
  }
  guardar() {
    if (this.escolarForm.invalid) {
      this.escolarForm.markAllAsTouched();
      return;
    }
    console.log(this.escolarForm.value)
    // this.escolarForm.reset();
  }
}
