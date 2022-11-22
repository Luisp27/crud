import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rutina } from './rutina';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

API: string='http://localhost/rutina_gym/api_crud.php/'; // php crudo con funcinalidad de una API
  
constructor(private clienteHttp:HttpClient) { }

  agregarRutina(datosRutina:Rutina):Observable<any>{
    return this.clienteHttp.post(this.API+"?insertar=1",datosRutina);
  }

  ObtenerRutinas(){
    return this.clienteHttp.get(this.API);
  }

  eliminarRutina(ID:any):Observable<any>{
    return this.clienteHttp.get(this.API+"?borrar="+ID);
  }

  ObtenerRutina(ID:string):Observable<any>{
    return this.clienteHttp.get(this.API+"?consultar="+ID);
  }

  EditarRutina(ID:any,datosRutina:any):Observable<any>{
    return this.clienteHttp.post(this.API+"?actualizar="+ID,datosRutina);
  }
 
 
}

