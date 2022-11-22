import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/sevicio/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-rutina',
  templateUrl: './agregar-rutina.component.html',
  styleUrls: ['./agregar-rutina.component.css']
})
export class AgregarRutinaComponent implements OnInit {
  formularioDePersona:FormGroup;

  constructor(
     public formulario:FormBuilder,
     private crudService:CrudService,
     private ruteador:Router
     ) { 


    this.formularioDePersona=this.formulario.group({
      lunes:[''],
      martes:[''],
      miercoles:[''],
      jueves:[''],
      viernes:[''],
      sabado:[''],
      domingo:['']
    });
  }

  ngOnInit(): void {
  }
  enviarDatos():any{
    console.log("push");
    console.log(this.formularioDePersona.value);

    this.crudService.agregarRutina(this.formularioDePersona.value).subscribe();
    this.ruteador.navigateByUrl('/ver-rutinas');
  }
}
