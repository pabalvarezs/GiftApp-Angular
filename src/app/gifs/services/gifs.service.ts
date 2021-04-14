import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root' //esto le dice a angular que funcione en todos los modulos, no es necesario ponerlo en los providers del modulo
})
export class GifsService {

  private apiKey : string = 'IApxXoeq00hFtLa54ty29zD6dIK7dgAM';
  private servicioUrl  : string ='http://api.giphy.com/v1/gifs'
  private _historial : string[] = [];
  
  public resultados : Gif[] =[];


  get historial(){
    //rompemos la referencia con los putnos y []
    return [...this._historial]
  }
  constructor( private http :HttpClient){
    // if(localStorage.getItem('historial')){
    //   this._historial = JSON.parse(localStorage.getItem('historial')!);
    // }
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];

  }

  buscarGifs( query : string = ''){ 

    //guarda solo en minusculas por lo que no permite duplicados en mayus y minus
    query = query.trim().toLocaleLowerCase();     // trim borra espacios para adelante y atras
    

    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,10);   // cortamos el historial 

      localStorage.setItem('historial',JSON.stringify(this._historial));

    }

    const params = new HttpParams()
                    .set('api_key',this.apiKey)
                    .set('limit','10')
                    .set('q',query);
    // console.log(params.toString());
    
    
    // this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search?api_key=${this.apiKey}&q=${ query}&limit=10`)
    // this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`,{ params : params }) // EN VERSIONES NUEVAS DE ECMASCRIPT ESTO NO ES NECESARIO
    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`,{ params })

      .subscribe( ( resp ) =>{

        console.log(resp.data);
        this.resultados = resp.data;
        localStorage.setItem('resultados',JSON.stringify(this.resultados))
      }); 



  }
  
}
