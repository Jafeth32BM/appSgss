import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';

interface Sector {
  valor: number;
  nombre: string;
}
interface Programa {
  valor: number;
  nombre: string;
}
@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styles: [
  ]
})
export class EmpresaComponent implements OnInit {
  sectorControl = new FormControl('', Validators.required);
  sectores: Sector[] = [
    { valor: 1, nombre: 'Publico' },
    { valor: 2, nombre: 'Privado' },
    { valor: 3, nombre: 'Social' },
  ];
  progControl = new FormControl('', Validators.required);
  programas: Programa[] = [
    { valor: 1, nombre: 'Salud' },
    { valor: 2, nombre: 'Educacion, arte, cultura y deporte' },
    { valor: 3, nombre: 'Alimentacion y nutricion' },
    { valor: 4, nombre: 'Vivienda' },
    { valor: 5, nombre: 'Empleo y capacitacion para el trabajo' },
    { valor: 6, nombre: 'Apoyo a proyectos productivos' },
    { valor: 7, nombre: 'Grupos vulnerables con capacidades diferentes y 3ra edad' },
    { valor: 8, nombre: 'Gobierno, justicia y seguridad publica' },
    { valor: 9, nombre: 'Pueblos indigenas' },
    { valor: 10, nombre: 'Derechos humanos' },
    { valor: 11, nombre: 'Politica y planeacion economica y social' },
    { valor: 12, nombre: 'Infraestructura hidraulica y de saneamiento' },
    { valor: 13, nombre: 'Comercio, abasto y almacenamiento de productos basicos' },
    { valor: 14, nombre: 'Asistencia y seguridad social' },
    { valor: 15, nombre: 'Medio hambiente' },
    { valor: 16, nombre: 'Desarrollo urbano' },
    { valor: 17, nombre: 'Desarrollo tecnologico' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
