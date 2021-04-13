import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent  {

  // el ! es un excepcion not null, ya que txtBuscar pudiese ser nulo
  // el viewChild permite buscar un elemento del cual se hizo referencia local en el html
  // devuelve un element ref que es de tipo T, por lo cual debemos hacer referencia a que tipo es el elemnto html, en este caso htmlInputElement
  @ViewChild('txtBuscar') txtBuscar! : ElementRef<HTMLInputElement>;

  constructor( private gifsService : GifsService) {}
  
  buscar( ){
      //  console.log(this.txtBuscar);
      //  document.querySelector('input')?.value = ''; 
      const  valor = this.txtBuscar.nativeElement.value;
      if(valor != ''){
        this.gifsService.buscarGifs(valor);
        this.txtBuscar.nativeElement.value = '';        
      }
      console.log('está vacio');
        

  }  
}
