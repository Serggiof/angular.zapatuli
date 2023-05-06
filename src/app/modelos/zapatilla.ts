//creamos una clase para mi entidad zapatillas
export class Zapatilla{ //Usamos el export para poder exportala y usarla en otros complementos
    //va terner como toda clase diferente propiedades
    //Las hacemos publicas para que se pueda acceder de diferente archivos.
    /*public nombre: String;
    public marca: String;
    public color: String;
    public precio: number;
    public stock: boolean;
    // Lo siguiente es crear el constructor en el cual le pasamos por parametro las difentes propiedades del objeto
    constructor(nombre, marca, color, precio, stock) {
        this.nombre= nombre;
        this.marca= marca;
        this.color= color;
        this.precio= precio;
        this.stock= stock;*/
        // type script nos simplifica esta parte que es un monto de codigo redundante.
        // De esta forma
         constructor(
            public nombre: String,
            public marca: String,
            public color: String,
            public precio: number,
            public stock: boolean
            //Automaticamente settea el valor de cada propiedad para poder usarla
         ) {
            
         }
    }
