import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' //esto le dice a angular que funcione en todos los modulos, no es necesario ponerlo en los providers del modulo
})
export class GifsService {

  private apiKey : string = 'IApxXoeq00hFtLa54ty29zD6dIK7dgAM';
  private _historial : string[] = [];

  get historial(){
    //rompemos la referencia con los putnos y []
    return [...this._historial]
  }
  constructor( private http :HttpClient){}

  buscarGifs( query : string = ''){ 

    //guarda solo en minusculas por lo que no permite duplicados en mayus y minus
    query = query.trim().toLocaleLowerCase();     // trim borra espacios para adelante y atras

    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,10);   // cortamos el historial 
    }

    this.http.get('http://api.giphy.com/v1/gifs/search?api_key=IApxXoeq00hFtLa54ty29zD6dIK7dgAM&q=dragon ball z&limit=10')
      .subscribe((resp : any) =>{

        console.log(resp.data);
        
      });



  }
  
}
