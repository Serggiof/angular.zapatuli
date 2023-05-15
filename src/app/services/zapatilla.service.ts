// Lo primero que tiene que tener un servicio es tener un injectable
import { Injectable } from "@angular/core";
// Para poder usar el modelo zapatillas necesitamos importarlo
import { Zapatilla } from "../modelos/zapatilla";

// Con este import necesitamos el decorador
@Injectable()
 export class ZapatillaService{
    public zapatillas: Array<Zapatilla>
   constructor(){
        this.zapatillas = [
            new Zapatilla('Reebok Clasic', 'Reebok', 'Blanco', 80, true),
            new Zapatilla('Reebok Clasic', 'Reebok', 'Blanco', 80, true),
            new Zapatilla('Nike AirMax', 'Nike', 'Rojo y Blaco', 120, true),
            new Zapatilla('Zalomon outdoor', 'Zalomon', 'negras', 99, true),
            new Zapatilla('Adidas running', 'Adidas', 'negras', 90, false)
    
        ];
    }
    //Metodo para pruebas
   getTexto(): string{
    return "Hola mundo desde un servicio"
   }
   //Agremamos un metodo para de volver el array de zapatillas
   getZapatillas(): Array<Zapatilla>{
        return this.zapatillas
   }
}