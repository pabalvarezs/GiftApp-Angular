import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' //esto le dice a angular que funcione en todos los modulos, no es necesario ponerlo en los providers del modulo
})
export class GifsService {

  private _historial : string[] = [];

  get historial(){
    //rompemos la referencia con los putnos y []
    return [...this._historial]
  }

  buscarGifs( query : string = ''){ 

    //guarda solo en minusculas por lo que no permite duplicados en mayus y minus
    query = query.trim().toLocaleLowerCase();     // trim borra espacios para adelante y atras

    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,10);   // cortamos el historial 
    }
    console.log(this._historial);    

  }
  
}
