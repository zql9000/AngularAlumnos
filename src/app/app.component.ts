import { Component, OnInit } from '@angular/core';

import { AlumnosService } from './alumnos.service';

import { Alumno } from './alumno';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  alumnos: Alumno[];
  alumnoSeleccionado: Alumno = null;

  constructor(private _alumnosService: AlumnosService) {}

  ngOnInit() {
    this.alumnos = this._alumnosService.GetAll();
  }

  Seleccionar(alumno: Alumno): void {
    this.alumnoSeleccionado = alumno;
  }

  Deseleccionar(): void {
    this.alumnoSeleccionado = null;
  }
}
