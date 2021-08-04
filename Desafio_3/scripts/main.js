let num = parseInt(prompt("Ingrese un número que actuará como la cantidad de escalones de una escalera de asteriscos: "));
let escaleraImprimida = "";

for(let i = 1; i <= num; i++) {
    let escalera = "";
    
    for(let j = 1; j <= i; j++) {
        escalera += "*";
    }

    escaleraImprimida += escalera + "<br>";
}

document.write(escaleraImprimida);