/* 
El operador IN devuelve true si la propiedad especificada existe en el objeto

El bucle FOR...IN permite acceder a todas las propiedades del objeto, obteniendo una propiedad por cada iteración
*/

const persona1 = {nombre: "homero", edad: 39, calle: "esparta"}
console.log("nombre" in persona1); // devuelve true xq nombre existe
console.log("caca" in persona1); // devuelve false xq caca no existe

for (const propiedad in persona1) {
    console.log(persona1[propiedad]); // recorremos todas las propiedades del objeto con el ciclo for...in
}


console.log("------")
// El ejemplo tpico es:
// Mostrará todas las propiedades (nombre, edad, calle)

for(element in persona1) {
    console.log(element); // o persona1[element]
}

