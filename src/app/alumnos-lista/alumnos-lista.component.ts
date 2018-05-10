import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ItemListService } from '../item-list.service';

import { Alumno } from '../alumno';

@Component({
  selector: 'app-alumnos-lista',
  templateUrl: './alumnos-lista.component.html',
  styleUrls: ['./alumnos-lista.component.css']
})
export class AlumnosListaComponent implements OnInit {
  constructor(public ItemListSrv: ItemListService) {}

  @Input() alumnos: Alumno[];
  @Input() alumnoSeleccionado: Alumno = null;
  @Output() Seleccion = new EventEmitter<Alumno>();

  AlumnoSelect(alumno: Alumno) {
    this.alumnoSeleccionado = alumno;
    this.Seleccion.emit(this.alumnoSeleccionado);
  }

  EstaSeleccionado(alumno: Alumno) {
    if (this.alumnoSeleccionado) {
      return this.alumnoSeleccionado.id === alumno.id;
    } else {
      return false;
    }
  }

  ngOnInit() {
  }
}
