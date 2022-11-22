import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AgregarRutinaComponent } from './component/agregar-rutina/agregar-rutina.component';
import { EditarRutinaComponent } from './component/editar-rutina/editar-rutina.component';
import { VerRutinasComponent } from './component/ver-rutinas/ver-rutinas.component';


const routes: Routes = [
 {path: '',pathMatch: 'full', redirectTo:'agregar-rutina'},
 {path: 'agregar-rutina', component: AgregarRutinaComponent},
 {path:'ver-rutinas', component: VerRutinasComponent},
 {path: 'editar-rutina/:id', component: EditarRutinaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
