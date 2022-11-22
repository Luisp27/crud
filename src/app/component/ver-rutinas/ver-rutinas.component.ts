import { Component, OnInit } from '@angular/core';
import { window } from 'rxjs';
import { CrudService } from 'src/app/sevicio/crud.service';

@Component({
  selector: 'app-ver-rutinas',
  templateUrl: './ver-rutinas.component.html',
  styleUrls: ['./ver-rutinas.component.css']
})
export class VerRutinasComponent implements OnInit {
  Rutinas:any;
  
  constructor(
    private crudService:CrudService
  ) { }

  ngOnInit(): void {
    this.crudService.ObtenerRutinas().subscribe(respuesta=>{
      console.log(respuesta);
      this.Rutinas=respuesta;
    });
  }
  eliminarRutina(ID:any,iControl:any){
    console.log(ID);
    console.log(iControl);
    this.crudService.eliminarRutina(ID).subscribe((respuesta)=>{
      this.Rutinas.splice(iControl,1);
    });
    
  }

}
