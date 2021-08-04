console.log("Cards")
const title = `Batman`
const imagen = `<img src="img/batmanTelltale.jpg" alt="foto de batman">`
const info = `" Let's spread the joy , here is Christmas , the most awaited day of the year.Christmas Tree is what one need the most. Here is the correct tree which will enhance your Christmas.`
const price = "$ 500"

//document.getElementById('prueba').innerHTML = algo;

document.querySelector('.title').innerHTML = title;
document.querySelector('.imagen').innerHTML = imagen;
document.querySelector('.information').innerHTML = info;
document.querySelector('.price').innerHTML = price;


const title2 = document.createElement("h1");
console.log(title2)
title2.innerText = `Joker`
document.querySelector('.buy').innerHTML = title2; // test
const imagen2 = `<img src="img/jokerTelltale.jpg" alt="Foto joker"`;
const info2 = `El Joker de Telltale Games. Tiene dos futuros dependiendo de la elección del jugador: Villano o Antihéroe.`;
const price2 = "$ 480";
{/* <h1 class="title">${title2}</h1> */}

const joker = `
    <div class="container">	
        <div class="product-details">
            
            <div>${title2}</div>
            <span class="hint-star star">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star-o" aria-hidden="true"></i>
            </span>
            <p class="information">${info2}</p>
            <div class="control">

                <button class="btn">
                    <span class="price">${price2}</span>
                <span class="shopping-cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i></span>
                <span class="buy">Get now</span>
                </button>

            </div>
        </div>
        <div class="product-image">
            <div class="imagen">${imagen2}</div>
            <div class="info">
                <h2> Description</h2>
                <ul>
                    <li><strong>Height : </strong>5 Ft </li>
                    <li><strong>Shade : </strong>Olive green</li>
                    <li><strong>Decoration: </strong>balls and bells</li>
                    <li><strong>Material: </strong>Eco-Friendly</li>
                    
                </ul>
            </div>
        </div>
    </div>
`;

document.write(joker);


/* let num = prompt("Numero de repetidos: ");
for(let i = 1; i < num; i++) {
    document.write(joker);
} */
