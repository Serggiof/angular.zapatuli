import { Component, OnInit,DoCheck, OnDestroy } from "@angular/core";

@Component({
    selector: 'videojuego',
    templateUrl: './videojuego.component.html'
     
})
export class VideoJuegoComponent implements OnInit, DoCheck, OnDestroy{
    public titulo: string;
    public listado: string;
    
    constructor(){
        this.titulo= "Componente Videojuego"
        this.listado= "."

       //console.log('Se a cargado el componente: videojuego.component.ts')
    }
    ngOnInit(){
       //console.log("OnInit ejecutado")
        
    }
    ngDoCheck(){
      //  console.log("El Docheck se ejecuto")
        
    }
    
    CambiarTitulo(){
       // this.titulo=" Cambiamos el titulo del component";
    }
    ngOnDestroy(){
      //  console.log("El OnDestroy se a ejecutado");

        
    }
}
// el decorador no se cierra con 