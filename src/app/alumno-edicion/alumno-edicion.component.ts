import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ItemListService } from '../item-list.service';

import { Alumno } from '../alumno';
import { Operaciones } from '../operaciones';

@Component({
  selector: 'app-alumno-edicion',
  templateUrl: './alumno-edicion.component.html',
  styleUrls: ['./alumno-edicion.component.css']
})
export class AlumnoEdicionComponent implements OnInit {
  constructor(public ItemListSrv: ItemListService) {}

  @Input() alumnoSeleccionado: Alumno;
  @Output() Deseleccionar = new EventEmitter<Operaciones>();

  Regresar() {
    this.alumnoSeleccionado = null;
    this.Deseleccionar.emit('cancelar');
  }

  Guardar(form: any) {
    // this.alumnoSeleccionado.nombre = form.nombre;
    // this.alumnoSeleccionado.apellido = form.apellido;
    // this.alumnoSeleccionado.sexo = form.sexo;
    // this.alumnoSeleccionado.perfil = form.perfil;
    // this.alumnoSeleccionado.activo = form.activo;

    Object.keys(form).forEach((key, index) =>
      this.alumnoSeleccionado[key] = form[key]
    );

    if (this.alumnoSeleccionado.id === 0) {
      this.Deseleccionar.emit('agregar');
    } else {
      this.Deseleccionar.emit('editar');
    }
  }

  ngOnInit() {
  }

}
