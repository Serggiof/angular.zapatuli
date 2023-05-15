import { Component, OnInit } from "@angular/core";
//Usamos la interfaz onInit para la verificacion del codigo por consola
//Hacemos la importacio de la clase zapatillas
import { Zapatilla } from "../modelos/zapatilla";
import { ZapatillaService } from "../services/zapatilla.service";
// Para poder usar nuestro servicio debemos inyectarlo como un providers

@Component({
    selector: 'zapatillas', //seria el nombre de la carpeta
    templateUrl: './zapatillas.component.html',
    styleUrls: ['./zapatillas.styles.css'],
    providers: [ZapatillaService]

})

export class ZapatillasComponent implements OnInit {
    public titulo: string;
    public listado: string;
    //agregamos un array de zapatillas poder acceder a nuestro modelo 5%5
    //Ahora el array se encuentra en los servicios 14/5/23
    public zapatillas!: Array<Zapatilla>;
    public marcas: String[];
    public color: string;
    public mi_marca: string
    public mi_marca2: string

// Inyectamos como dependencia dentro de una propiedad 
    constructor(
        private _zapatillaService: ZapatillaService
    ){ 
        this.mi_marca2= ''
        this.mi_marca = ''
        this.color = 'yellow'
        this.marcas = new Array();

        //creamos una arrar para rellenar la clase creada en zapatilla.ts
        
        this.titulo = "Marcas de Zapatillas"
        this.listado = ""
               /* METODOS */
    }
    ngOnInit() {
      this.zapatillas =  this._zapatillaService.getZapatillas()
      //usamos el metodo de prueba
      //alert (this._zapatillaService.getTexto())
       // console.log(this.zapatillas)
        this.getMarcas();
    }
    getMarcas() {
        this.zapatillas.forEach((zapatilla, index) => {
            if (this.marcas.indexOf(zapatilla.marca) < 0) {
                this.marcas.push(zapatilla.marca);

            }
        });
        console.log(this.marcas);

    }
    getMarca(){
        alert(this.mi_marca);
    }
    addMarca(){
        this.marcas.push(this.mi_marca2)
    }

    borrarMarca(indice: number){
        this.marcas.splice(indice, 1);
    }
    /*Este metodo es para captura la tecla enter y lo que hay en el contenido input */
    mostrarPalabra(){
        alert(this.mi_marca)
    }
    
}
// aca exportamos la clase para poder usarla en otros archivos "complementos"