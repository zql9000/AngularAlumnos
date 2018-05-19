import { Injectable } from '@angular/core';

import { Alumno } from './alumno';
import { ItemList } from './itemList';

@Injectable()
export class ItemListService {

  constructor() { }

  private _sexos: ItemList[] = [
    new ItemList( 0, 'Femenino'),
    new ItemList( 1, 'Masculino'),
    new ItemList( 2, 'Otro')
  ];

  private _perfiles: ItemList[] = [
    new ItemList( 0, 'Desarrollador'),
    new ItemList( 1, 'IT'),
    new ItemList( 2, 'Power User'),
  ];

  Sexos(index: number): string {
    return this._sexos.find(item => item.index === index).descripcion;
  }

  Perfiles(index: number): string {
    return this._perfiles.find(item => item.index === index).descripcion;
  }

  GetSexos(): ItemList[] {
    return this._sexos;
  }

  GetPerfiles(): ItemList[] {
    return this._perfiles;
  }
}
