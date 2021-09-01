/* Construir CV */
const btnGenerarCv = document.querySelector(".btnGenerarCv");

btnGenerarCv.addEventListener("click", () => {
    /* Generar Perfil */
    class Perfil {
        constructor(n,p,t,l,g) {
            this.nameField = n;
            this.professionField = p;
            this.telField = t;
            this.linkField = l;
            this.mailField = g;
        }
    }
    
    
    const nameField = document.querySelector("#nameField").value;
    localStorage.setItem('nombre', nameField);
    const setName = document.querySelector("#name");

    const professionField = document.querySelector("#professionField").value;
    localStorage.setItem('profesion', professionField);
    const setProf = document.querySelector("#prof");

    const telField = document.querySelector("#telField").value;
    localStorage.setItem('telefono', telField);
    const setTel = document.querySelector("#tel");

    const linkField = document.querySelector("#linkField").value;
    localStorage.setItem('linkedin', linkField);
    const setLinkedin = document.querySelector("#linkedin");

    const mailField = document.querySelector("#mailField").value;
    localStorage.setItem('mail', mailField);
    const setEmail = document.querySelector("#mail");

    
    const perfil = new Perfil(nameField, professionField, telField, linkField, mailField);

    
    // Pintar en HTML
    setName.innerHTML = `${perfil.nameField}`;
    setProf.innerHTML = `${perfil.professionField}`;
    setTel.innerHTML = `${perfil.telField}`;
    setLinkedin.innerHTML = `<a href="https://www.linkedin.com/in/${perfil.linkField}" target="_blank">${perfil.linkField}</a>`; // Agregarlo en el constructor no aca
    setEmail.innerHTML = `${perfil.mailField}`;
    /* /Generar Perfil */

    /* Generar PerfilProfesional */
    // Genera el PerfilProfesional a partir de un objeto que recibe los valores de los inputs
    class PerfilProfesional {
        constructor(e,d,h) {
            this.objField = e;
            this.expField = d;
            this.academicaField = h;
        }
        mensaje() {
            console.log("Experiencia agregada con exito!");
        }
    }

    const objField = document.querySelector("#objField").value;
    const setObjetivo = document.querySelector("#objDiv");

    const expField = document.querySelector("#expField").value;
    const setExperiencia = document.querySelector("#expDiv");

    const academicaField = document.querySelector("#academicaField").value;
    const setEstudio = document.querySelector("#estudiosDiv")

    
    const perfilProfesional = new PerfilProfesional(objField, expField, academicaField);

    
    setObjetivo.innerHTML = `<p>${perfilProfesional.objField}</p>`;
    setExperiencia.innerHTML = `<p>${perfilProfesional.expField}</p>`;
    setEstudio.innerHTML = `<p>${perfilProfesional.academicaField}</p>`;

    perfilProfesional.mensaje();
    /* / Generar PerfilProfesional */

    /* Generar Skills */
    // Genera Skills a partir de un Array de objetos obteniendo valores de los inputs
    class Skills {
        constructor(skill) {
            this.skill = skill;

        }
        mensaje() {
            console.log("Skills agregados con exito");
        }
    }

    let arraySkills = [];
    const setSkills = document.querySelector("#cv_skills");

    let skill = document.querySelectorAll(".skill");

    // Obtiene cada valor de los inputs con la clase skill, crea un objeto con dichos valores y luego los
    /// asigna a un array para generarlos en el html
    for(let i = 0; i < skill.length; i++) {
        // arraySkills[i] = skills[i].value;
        arraySkills = new Skills(skill[i].value);
        //console.log(arraySkills);
        setSkills.innerHTML += `<p>- ${arraySkills.skill}</p>`
    }

    /* /Generar Skills */

    /* Generar Tecnologías */

    class Tecnologies {
        constructor(tecnology) {
            this.tecnology = tecnology;
        }
    }

    const cvTecnologies = document.querySelector("#cv_tecnologies");
    
    // const arrayTecnologies = ["item 1", "item 2", "item 3"];
    let arrayTecnologies = [];

    const fragment = document.createDocumentFragment();
    let tecnology = document.querySelectorAll(".tecnology");

    for(let i = 0; i < tecnology.length; i++) {
        // Constructor + asignar valor de constructor al array
        arrayTecnologies = new Tecnologies(tecnology[i].value);
        // Crear elemento
        const li = document.createElement("li");
        // Asignarle cada elemento como texto al li
        li.textContent = arrayTecnologies.tecnology;
        // Asignar como hijo el li al fragmento para no generar reflow
        fragment.appendChild(li);
    }

    cvTecnologies.appendChild(fragment);

    /* /Generar Tecnologías */
    
    /* Esconder Formulario - Mostrar CV */
    const formulario = document.querySelector("#formulario");
    formulario.setAttribute("class", "dnone");

    const curriculum = document.querySelector("#curriculum");
    setTimeout(() => {
        curriculum.setAttribute("class", "slide-in-right");
        curriculum.classList.remove("dnone");
    }, 250);
    /* / Esconder Formulario - Mostrar CV */
})
/* /Construir CV */

/* Añadir Formación */
const añadirFormacion = document.querySelector(".añadirFormacion");
añadirFormacion.addEventListener("click", () => {
        /* Añade un nuevo campo de Formación académica junto con el botón */
    let nuevoCampo = document.createElement("textarea");
    nuevoCampo.classList.add("form-control");
    nuevoCampo.classList.add("mt-2");
    nuevoCampo.setAttribute("rows", 3);
    nuevoCampo.setAttribute("placeholder", "Tus estudios");

    let añadirBtnAcademica = document.querySelector("#academicaAñadirBtn");
    let padre = document.querySelector("#formacionAcademica").parentNode;
    
    // Inserta los elementos hijos dentro del padre
    padre.insertBefore(nuevoCampo,añadirBtnAcademica);
});
/* /Añadir Formación */
//console.log("DISTE CLICK")
/* Añadir Experiencia */
const añadirExp = document.querySelector(".añadirExp");
añadirExp.addEventListener("click", () => {
    /* Añade un nuevo campo de Experiencia junto con el botón */
    
    // Crear nodo a insertar
    let nuevoCampo = document.createElement("textarea");
    // Clases
    nuevoCampo.classList.add("form-control");
    nuevoCampo.classList.add("mt-2");
    // Atributos
    nuevoCampo.setAttribute("rows", 3);
    nuevoCampo.setAttribute("placeholder", "Tu experiencia");

    /* let nuevoSpan = document.createElement("span");
    nuevoSpan.classList.add("input-group-text"); */


    // Boton que se movera
    let añadirBtnExp = document.querySelector("#expAñadirBtn");
    // Referencia al nodo padre
    let padre = document.querySelector("#experiencia").parentNode;

    
    // Inserta el hijo y el boton
    padre.insertBefore(nuevoCampo,añadirBtnExp);
});
/* /Añadir Experiencia */

/* Importar CV como PDF */
const importarCV = document.querySelector(".importarCV");
importarCV.addEventListener("click", () => {
    alert("Importando CV como PDF...");
})

// Cambiar color de fondo y titulos + LocalStorage
// PENDIENTE: Llevarlo a un archivo JS aparte

// Titulos con Subrayados
const tituloObjetivos = document.querySelector(".spanObjetivos");
const tituloExp = document.querySelector(".spanExp");
const tituloEstudios = document.querySelector(".spanEstudios");
// Fondo del CV
const cvFondo = document.querySelector(".cv_Data");
// Contenedor Botones
const botones = document.querySelector("#botones");
// Boton principal
const btnBotones = document.querySelector(".BtnBotones");

// Pintar botones
const agregarBotones = (e) => {
    e.preventDefault();
    botones.innerHTML = `
        <button type="button" class="btn btn_green1 circulo"></button>
        <button type="button" class="btn btn_green2 circulo"></button>
        <button type="button" class="btn btn_green3 circulo"></button>
        <button type="button" class="btn btn_green4 circulo"></button>    
    `
}
// Delegar acción
const delegacion = (e) => {
    e.preventDefault();
    const colorBoton = e.target.classList[1];

    switch(colorBoton) {
        case('btn_green1'): // En el caso de que colorBoton tenga esta clase
            cvFondo.className = "col-md-4 bg_green1";
            localStorage.setItem('colorFondo', "col-md-4 bg_green1");

            tituloObjetivos.className = "span_green1";
            localStorage.setItem('colorObjetivos', "span_green1");

            tituloExp.className = "span_green1";
            localStorage.setItem('colorExp', "span_green1");

            tituloEstudios.className = "span_green1";
            localStorage.setItem('colorEstudios', "span_green1");
            break;

        case('btn_green2'):
            cvFondo.className = "col-md-4 bg_green2";
            localStorage.setItem('colorFondo', "col-md-4 bg_green2");

            tituloObjetivos.className = "span_green2";
            localStorage.setItem('colorObjetivos', "span_green2");

            tituloExp.className = "span_green2";
            localStorage.setItem('colorExp', "span_green2");

            tituloEstudios.className = "span_green2";
            localStorage.setItem('colorEstudios', "span_green2");
            break;

        case('btn_green3'): 
            cvFondo.className = "col-md-4 bg_green3";
            localStorage.setItem('colorFondo', "col-md-4 bg_green3");
            
            tituloObjetivos.className = "span_green3";
            localStorage.setItem('colorObjetivos', "span_green3");

            tituloExp.className = "span_green3";
            localStorage.setItem('colorExp', "span_green3");

            tituloEstudios.className = "span_green3";
            localStorage.setItem('colorEstudios', "span_green3");
            break;

        case('btn_green4'): 
            cvFondo.className = "col-md-4 bg_green4";
            localStorage.setItem('colorFondo', "col-md-4 bg_green4");

            tituloObjetivos.className = "span_green4";
            localStorage.setItem('colorObjetivos', "span_green4");

            tituloExp.className = "span_green4";
            localStorage.setItem('colorExp', "span_green4");

            tituloEstudios.className = "span_green4";
            localStorage.setItem('colorEstudios', "span_green4");
            break;
    }
}
// IIFEs
// Agregar botones y delegaciones
(() =>{
    btnBotones.addEventListener("click", agregarBotones);
    botones.addEventListener("click", delegacion);
})();

// Leer info de LocalStorage
(() => {
    const colorDeFondo = localStorage.getItem('colorFondo');
    const colorObjetivos = localStorage.getItem('colorObjetivos');
    const colorExp = localStorage.getItem('colorExp');
    const colorEstudios = localStorage.getItem('colorEstudios');

    if(colorDeFondo === null) {
        cvFondo.className = "col-md-4 cv_Data";
    } else {
        cvFondo.className = colorDeFondo;
        tituloObjetivos.className = colorObjetivos;
        tituloExp.className = colorExp;
        tituloEstudios.className = colorEstudios;
    }


})(); // (Se ejecuta cuando el navedaor se refresca parecido a onload)
