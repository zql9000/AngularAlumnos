import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';

import { AppComponent } from './app.component';
import { AlumnosListaComponent } from './alumnos-lista/alumnos-lista.component';
import { AlumnoEdicionComponent } from './alumno-edicion/alumno-edicion.component';
import { AlumnosService } from './alumnos.service';
import { ItemListService } from './item-list.service';
import { AsistenciasComponent } from './asistencias/asistencias.component';
import { CursosComponent } from './cursos/cursos.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    AlumnosListaComponent,
    AlumnoEdicionComponent,
    AsistenciasComponent,
    CursosComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatButtonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatMenuModule,
    RouterModule.forRoot([
      { path: 'alumnos' , component: AlumnosListaComponent},
      { path: 'cursos' , component: CursosComponent},
      { path: 'asistencias' , component: AsistenciasComponent},
      { path: '', redirectTo: '/alumnos', pathMatch: 'full' },
      { path: 'alumno/:operacion/:id' , component: AlumnoEdicionComponent}
    ])
  ],
  providers: [AlumnosService, ItemListService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
