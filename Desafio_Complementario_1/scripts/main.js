/* 
1) El precio de tu carrito es de $(numero random), con cuanto deseas abonar?
2) Resta la cifra indicada por el usuario al precio del carrito
3) Devuelve resultado 
*/

const Abono = (numRandom) => {
    /* Muestra el carrito y pregunta con cuanto se desea abonar */
    const userCash = parseInt(prompt(`El precio de tu carrito es de ${numRandom}, con cuanto deseas abonar?`));

    return userCash;
}

const CalcularVuelto = (numRandom, userCash) => {
    /* Calcula la resta entre el dinero del usuario y su carrito */
    const resultado = userCash - numRandom;

    return resultado;
}

const MostrarVuelto = (vuelto) => {
    /* Muestra el resultado de la función anterior por consola */
    const mostrar = console.log(`Tu vuelto es de $${vuelto}`);

    return mostrar;
}

const numRandom = Math.floor(Math.random() * 500);
//console.log(numRandom)

const userAbono = Abono(numRandom);
//console.log(userAbono)

if (userAbono < numRandom) {
    console.log("no te alcanza");
} else {
    const vuelto = CalcularVuelto(numRandom, userAbono);
    const mostrar = MostrarVuelto(vuelto);
}

