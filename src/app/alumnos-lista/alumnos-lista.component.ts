import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { MatTableDataSource } from '@angular/material';

import { ItemListService } from '../item-list.service';
import { AlumnosService } from '../alumnos.service';
import { Alumno } from '../alumno';
import { Operaciones } from '../operaciones';

@Component({
  selector: 'app-alumnos-lista',
  templateUrl: './alumnos-lista.component.html',
  styleUrls: ['./alumnos-lista.component.css']
})
export class AlumnosListaComponent implements OnInit {
  alumnos: Alumno[];
  alumnoSeleccionado: Alumno = null;
  dataSource: MatTableDataSource<Alumno>;
  displayedColumns = ['id', 'nombre', 'apellido', 'perfil', 'sexo', 'activo', 'acciones'];

  constructor(
    public ItemListSrv: ItemListService,
    public AlumnosSrv: AlumnosService,
    private _router: Router
  ) {}

  ngOnInit() {
    this.alumnos = this.AlumnosSrv.GetAll();
    this.dataSource = new MatTableDataSource(this.alumnos);
  }

  AlumnoSelect(alumno: Alumno) {
    this.alumnoSeleccionado = alumno;
    // this.Seleccion.emit(this.alumnoSeleccionado);
  }

  EstaSeleccionado(alumno: Alumno) {
    if (this.alumnoSeleccionado) {
      return this.alumnoSeleccionado.id === alumno.id;
    } else {
      return false;
    }
  }

  Agregar() {
    this._router.navigate(['/alumno', 'agregar', 0]);
  }

  Filtrar(filtro: string) {
    this.alumnos = this.AlumnosSrv.FindbyNombreOApellido(filtro);
    this.dataSource = new MatTableDataSource(this.alumnos);
  }

  EditarAlumno(alumno: Alumno) {
    this._router.navigate(['/alumno', 'editar', alumno.id]);
  }

  EliminarAlumno(alumno: Alumno) {
    this.AlumnosSrv.Delete(alumno.id);
    this.ngOnInit();
  }
}
