document.addEventListener('DOMContentLoaded', () => {

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'ejemplos-cv.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            // console.log(this.responseText); // Respuesta en texto
            let datosParseados = JSON.parse(this.responseText);
            // console.log(datosParseados); // Respueta parseada a objetos
            
            let res = document.querySelector("#res");
            res.innerHTML = '';

            for(let i of datosParseados) {
                res.innerHTML += `
                <div class="div-imagen-cv mb-5"><img class="imagen-cv" src="${i.img}"/></div>
                `
            }

        }
    }

});