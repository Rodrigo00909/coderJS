console.log("Parseados de números")

let num = "2"

console.log(num);
console.log(parseInt(num));
console.log(parseFloat(num));
console.log(Number(num));
console.log(+num);

console.log("----------")

let num2 = 0.1234
let num3 = 5

console.log(Number.isInteger(num2));
console.log(Number.isInteger(num3));

let resultado;
//Clase Math
resultado = Math;
//Pi
resultado = Math.PI;
resultado = Math.round(2.49); // Retorna un número redondeado justamente: 2.48 retorna 2, 2.51 retorna 3
resultado = Math.ceil(2.1) // Retorna un número redondeado para mayor: 2.1 retorna 3
resultado = Math.floor(2.9) // Retorna un número redondeado para menos: 2.9 retorna 2
resultado = Math.sqrt(144) // Retorna la raíz. 144 retorna 12
resultado = Math.abs(-500) // Retorna valor absoluto. -500 retorna 500 positivo
resultado = Math.pow(8, 3) // Retorna una potencia: 8, 3 igual 8 al cubo(3)
resultado = Math.min(3,5,6,1,8,-33,0) // Retorna el mínimo de los números dados. Sirve mucho en los array (en este caso retorna -33)
resultado = Math.max(3,5,6,1,8,-33,0) // Retorna el máximo: 8 en este caso
resultado = Math.random() // Retorna un número aleatorio entre 0 y 1

resultado = Math.floor(Math.random() * 100) // Retorna un número aleatorio PARA ABAJO (floor) entre el 0 al 99 (100 no lo toca xq redondea al piso siempre)

console.log(resultado)