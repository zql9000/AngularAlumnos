import { Component, OnInit } from '@angular/core';

import { AlumnosService } from './alumnos.service';
import { DataService } from './data.service';

import { Alumno } from './alumno';
import { Operaciones } from './operaciones';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  alumnos: Alumno[];
  alumnoSeleccionado: Alumno = null;
  titulo: string;

  constructor(
    private _DataSrv: DataService
  ) {}

  ngOnInit() {
    this._DataSrv.tituloPrincipal$.subscribe( titulo => this.titulo = titulo );
  }

  Seleccionar(alumno: Alumno): void {
    this.alumnoSeleccionado = alumno;
  }

  ActualizarAlumno(operacion: Operaciones): void {
    if (operacion === 'agregar') {
      // this._alumnosService.Add(this.alumnoSeleccionado);
    }

    this.alumnoSeleccionado = null;
  }

  FiltrarAlumnos(filtro: string): void {
    // this.alumnos = this._alumnosService.FindbyNombreOApellido(filtro);
  }

  AgregarAlumno(): void {
    this.alumnoSeleccionado = new Alumno(0, '', '', 0, true, 0);
  }
}
