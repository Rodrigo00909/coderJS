let resultado = Math.floor(Math.random() * 5);

let adivina = prompt("Adivina el número: ");

if(resultado == adivina) {
    console.log("Adivinaste!");
} else {
    console.log(`No Adivinaste. El número era ${resultado}`);
}
