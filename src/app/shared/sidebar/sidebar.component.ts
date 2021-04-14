import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent  {

  constructor( private gifsService : GifsService) {};            //inyeccion de servicio;

  get historial() : string[]{
    return this.gifsService.historial;
  }
  
  buscar( termino : string){

    // console.log(termino);
    this.gifsService.buscarGifs(termino);    
  }

}
