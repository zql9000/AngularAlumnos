import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DataService {
  constructor() { }
  // Observable string sources
  private _tituloPrincipalSource = new Subject<string>();
  // Observable string streams
  public tituloPrincipal$ = this._tituloPrincipalSource.asObservable();

  // Service message commands
  tituloPrincipal(titulo: string) {
    this._tituloPrincipalSource.next(titulo);
  }
}
