class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.vendido = false;
    }

    sumarIva() {
        this.precio = this.precio * 1.21;
    }
}

//Declaramos un array de productos para almacenar objetos
const productos = [];
productos.push(new Producto("arrow", "125"));
productos.push(new Producto("feideo", "70"));
productos.push(new Producto("pan", "50"));
//Iteramos el array con for...of para modificarlos a todos
for(const producto of productos) {
    producto.sumarIva();
}