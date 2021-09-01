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

// Añadir localstorage 
// Añadir json


