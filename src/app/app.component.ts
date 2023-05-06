import { Component } from '@angular/core';
import { Configuracion } from './modelos/configuration';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = '.Master en JavScript.';
  public mostrar_videojuego: boolean=true;
  public descripcion: String;
  public config;
  public encabezado= 'ZAPATULI';
  constructor(){
    this.config= Configuracion;
    this.title= Configuracion.titulo;
    this.descripcion= ' Vamos a aprender Angular y javaScript -Victor';
    
  }
}
