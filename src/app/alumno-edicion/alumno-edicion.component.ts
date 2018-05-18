import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlumnosService } from '../alumnos.service';
import { ItemListService } from '../item-list.service';

import { Alumno } from '../alumno';
import { Operaciones } from '../operaciones';

@Component({
  selector: 'app-alumno-edicion',
  templateUrl: './alumno-edicion.component.html',
  styleUrls: ['./alumno-edicion.component.css']
})
export class AlumnoEdicionComponent implements OnInit {
  constructor(public ItemListSrv: ItemListService,
    private _router: Router,
    private _activeRoute: ActivatedRoute,
    private _alumnosSrv: AlumnosService
  ) {}

  alumnoSeleccionado: Alumno;

  Regresar() {
    this._router.navigate(['/alumnos']);
  }

  Guardar(form: any) {
    console.log(form);
    Object.keys(form).forEach((key, index) =>
      this.alumnoSeleccionado[key] = form[key]);
    if (this.alumnoSeleccionado.id === 0) {
      // this.FinDeEdicion.emit('agregar');
      this._alumnosSrv.Add(this.alumnoSeleccionado);
    } else {
      // this.FinDeEdicion.emit('editar');
      this._alumnosSrv.Update(this.alumnoSeleccionado);
    }
    this.Regresar();
  }

  ngOnInit() {
    const operacion = this._activeRoute.snapshot.paramMap.get('operacion');
    const id = Number(this._activeRoute.snapshot.paramMap.get('id'));
    if (operacion === 'agregar') {
      this.alumnoSeleccionado = new Alumno(0, '', '', 0, true, 0);
    } else {
      this.alumnoSeleccionado = this._alumnosSrv.Get(id);
    }
  }
}
