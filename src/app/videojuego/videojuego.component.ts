import { Component, OnInit,DoCheck, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
 //usamos este import para tomar los parametros que pasemos por router

@Component({
    selector: 'videojuego',
    templateUrl: './videojuego.component.html',
    styleUrls: ['./videojuego.styles.css' ] 
})
export class VideoJuegoComponent implements OnInit, DoCheck, OnDestroy{
  /*Creamos la Propiedades*/
    public titulo: string;
    public listado: string;
    public nombre: string;

    // En el constructor inyectamos las propiedades para routes
    constructor(
      private _route: ActivatedRoute,
      private _router: Router
    ){
      this.nombre=
      this.titulo= "Componente Videojuego" 
      this.listado= ""

       //console.log('Se a cargado el componente: videojuego.component.ts')
    }
    //Para recojer los parametros por de la url usamos:
    ngOnInit(){
      this._route.params.subscribe((params: Params)=>{
        //Comprobamso si esta funcionando el metodo
        //console.log(params)
        this.nombre = params ['nombre']
        //console.log(this.nombre)
        // Este if serviria si no podriamos un nombre en la url 
       /*if( this.nombre =='nada'){
        this._router.navigate(['/home'])
       }*/

      })
       //console.log("OnInit ejecutado")  
    }
    //Metodo para redirigir
    redirigir(){
      this._router.navigate(['/home'])
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