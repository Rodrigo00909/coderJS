/* 
Codifica una función cuyas instrucciones permitan ordenar una colección (array).
Preferentemente, recibir el criterio de ordenamiento por parámetro, y mostrar el
resultado del procesamiento en una salida.


Archivo HTML y archivo JavaScript referenciado, que incluya la definición un array de objetos,
la declaración y llamada de una función que ordene la colección.
*/

class Alumnos {
    constructor(alumno, nota) {
        this.alumno = alumno;
        this.nota = parseInt(nota);
    }
}

const ordenar = (alumnos,ordenamiento) => {
    /* Ordena un array por mayor numero o por orden de letra(abecedario) */
    if(ordenamiento === 1) {
        alumnos.sort( (a,b) => {
            if(a.alumno == b.alumno) {
                return 0;
            } else if(a.alumno < b.alumno) {
                return -1;
            } else {
                return 1;
            }
        });
    } else {
        alumnos.sort( (a,b) => {
            if(a.nota == b.nota) {
                return 0;
            } else if(a.nota < b.nota) {
                return 1;
            } else {
                return -1;
            }
        });
    }
}

const alumnos = [];
/* Lógica para comprobación y carga de datos */
do{
    let comprobacion = prompt("(fin para terminar)Nombre del alumno?");
    if(comprobacion === "fin") {
        break;
    } else {
        alumno = comprobacion;
        let nota = prompt("Nota del alumno? ")
        /* Constructor */
        alumnos.push(new Alumnos(alumno, nota));
    }
} while(alumno != "fin")

alert("Alumnos cargados correctamente.")
/* Llamada a la funcion de ordenamiento */
let ordenamiento = parseInt(prompt("Como desea ordenar los alumnos? 1 = por nombre. 2 = por nota"));
ordenar(alumnos,ordenamiento);


console.log(alumnos)



