import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

import { CrudService } from 'src/app/sevicio/crud.service';


@Component({
  selector: 'app-editar-rutina',
  templateUrl: './editar-rutina.component.html',
  styleUrls: ['./editar-rutina.component.css']
})
export class EditarRutinaComponent implements OnInit {
  elID: any;
  formularioDePersona: FormGroup;

  constructor(
    private activeRoute: ActivatedRoute,
    private crudService: CrudService,
    public formulario: FormBuilder,
    private ruteador:Router
  ) {
    this.elID = this.activeRoute.snapshot.paramMap.get('id');

    this.formularioDePersona = this.formulario.group({
      lunes: [''],
      martes: [''],
      miercoles: [''],
      jueves: [''],
      viernes: [''],
      sabado: [''],
      domingo: ['']
    });
  }

  ngOnInit(): void {
    this.crudService.ObtenerRutina(this.elID).subscribe(
      respuesta => {
        this.formularioDePersona.setValue({
          lunes: respuesta[0]['Lunes'],
          martes: respuesta[0]['Martes'],
          miercoles: respuesta[0]['Miercoles'],
          jueves: respuesta[0]['Jueves'],
          viernes: respuesta[0]['Viernes'],
          sabado: respuesta[0]['Sabado'],
          domingo: respuesta[0]['Domingo']
        });
      }
    );
  }
  enviarDatos(): any {
    console.log(this.elID);
    console.log(this.formularioDePersona.value);

    this.crudService.EditarRutina(this.elID, this.formularioDePersona.value).subscribe(() => {
      this.ruteador.navigateByUrl('/ver-rutinas');
    });
  }
}
