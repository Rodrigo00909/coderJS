class Cliente {
    constructor(name, saldo){ // Siempre empieza con este método 'constructor'. Se declaran sin la palabra function
        this.nombre = name;
        this.saldo = saldo;
    }
}

const cliente1 = new Cliente("Rodrigo", 1350);

console.log(cliente1);

const Proveedor = class {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
    vender(precio){
        return this.saldo-=precio //podrias retornarle algo tambien
    }
    cobrar = () => {
        console.log("Cobrando");
    }
}

// Son una equivalencia a los constructores para crear objetos, pero de manera mas clara

const proveedor1 = new Proveedor("Adrian", 1700);
console.log(Proveedor);

proveedor1.vender(100)


