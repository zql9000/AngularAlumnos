import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-asistencias',
  templateUrl: './asistencias.component.html',
  styleUrls: ['./asistencias.component.css']
})
export class AsistenciasComponent implements OnInit {

  constructor(
    private _DataSrv: DataService
  ) { }

  ngOnInit() {
    this._DataSrv.tituloPrincipal('Asistencias');
  }

}
