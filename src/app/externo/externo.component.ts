import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers:[PeticionesService]
})
export class ExternoComponent implements OnInit{
  public user: any
  public userId: any
  constructor(
    private _peticionesService: PeticionesService
  ){
    //Dejamos el userId por defecto en 1 
    this.userId= 1
  }
  ngOnInit(){
   this.cargarUsuario()
  }
  cargarUsuario(){
    /* El Observable siempre ya trae incorporado el metodo subcribe, este sirve
    para subcribirme y obterner el resultado que me devuelve(recoje 2 valores
    result y error)
  */
 //el metodo subscribe esta casi obsoleto (aun no supe resolver esto) pero funciona
   this._peticionesService.getUser(this.userId).subscribe(
      result =>{
       this.user = result.data;
       //console.log(result)
      }, 
      error =>{
       console.log(<any>error);
      }
   )
  }
}


