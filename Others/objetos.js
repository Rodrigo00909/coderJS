const objeto1 = {
    nombre: "Rodrigo",
    edad: 39,
    calle: roma,
}

//console.log(objeto1.nombre);

const {nombre, edad, domicilio=calle} = objeto1;


// crear objetos a partir de objetos ya creados (instancias)

// constructor de objeto
function Persona(n, e, c) {
    this.nombre = n;
    this.edad = e;
    this.calle = c;
}

//crear nueva instancia
const persona1 = new Persona("Jesus", 37, "Roma");


// PARA EL TP FINAL PUEDO HACER UN CONSTRUCTOR PARA CADA EXP LABORAL POR EJEMPLO: ExpLaboral { empresa: Motomel, desde: 10/02/2022, hasta: 12/09/2023, puesto: soporte it}

// UN OBJETO TAMBIEN PUEDE SER UN MENU POR EJEMPLO