import { Component, OnInit } from "@angular/core";
//Usamos la interfaz onInit para la verificacion del codigo por consola
//Hacemos la importacio de la clase zapatillas
import { Zapatilla } from "../modelos/zapatilla";


@Component({
    selector: 'zapatillas', //seria el nombre de la carpeta
    templateUrl: './zapatillas.component.html',
    styleUrls: ['./zapatillas.styles.css']

})
export class ZapatillasComponent implements OnInit {
    public titulo: string;
    public listado: string;
    //agregamos un array de zapatillas poder acceder a nuestro modelo
    public zapatillas: Array<Zapatilla>;
    public marcas: String[];
    public color: string;
    public mi_marca: string
    public mi_marca2: string

    constructor() {
        this.mi_marca2= ''
        this.mi_marca = ''
        this.color = 'yellow'
        this.marcas = new Array();

        //creamos una arrar para rellenar la clase creada en zapatilla.ts
        this.zapatillas = [
            new Zapatilla('Reebok Clasic', 'Reebok', 'Blanco', 80, true),
            new Zapatilla('Reebok Clasic', 'Reebok', 'Blanco', 80, true),
            new Zapatilla('Nike AirMax', 'Nike', 'Rojo y Blaco', 120, true),
            new Zapatilla('Adidas running', 'Adidas', 'negras', 90, false)

        ];
        this.titulo = "Marcas de Zapatillas"
        
        this.listado = ""
               /* METODOS */
    }
    ngOnInit() {
        console.log(this.zapatillas)
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