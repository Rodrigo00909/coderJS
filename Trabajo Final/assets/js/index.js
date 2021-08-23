const generarCv = () => {
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

/*     nombre = prompt("Tu nombre? ");
    profesion = prompt("Tu profesión? ");
    linkedin = prompt("Tu linkedIn? (ej: manuelito09) ");
    github = prompt("Tu github? (ej: manuelito09) "); */
    
    
    const nameField = document.querySelector("#nameField").value;
    const setName = document.querySelector("#name");

    const professionField = document.querySelector("#professionField").value;
    const setProf = document.querySelector("#prof");

    const telField = document.querySelector("#telField").value;
    const setTel = document.querySelector("#tel");

    const linkField = document.querySelector("#linkField").value;
    const setLinkedin = document.querySelector("#linkedin");

    const mailField = document.querySelector("#mailField").value;
    const setEmail = document.querySelector("#mail");

    
    const perfil = new Perfil(nameField, professionField, telField, linkField, mailField);
    

    // Pintar en HTML
    setName.innerHTML = `<h3>${perfil.nameField}</h3>`;
    setProf.innerHTML = `<p>${perfil.professionField}</p>`;
    setTel.innerHTML = `<p>${perfil.telField}</p>`;
    setLinkedin.innerHTML = `<p>https://github.com/${perfil.linkField}</p>`;
    setEmail.innerHTML = `<p>https://www.linkedin.com/in/${perfil.mailField}</p>`;
    /* /Generar Perfil */

    /* Generar Experiencias */
    class Experiencias {
        constructor(e,d,h,p) {
            this.objField = e;
            this.expField = d;
            this.academicaField = h;
        }
        mensaje() {
            console.log("Experiencia agregada con exito!");
        }
    }

    const objField = document.querySelector("#objField");
    const setObjetivo = document.getElementById("empresa");

    const expField = document.querySelector("#expField");
    const setExperiencia = document.getElementById("desde");

    const academicaField = document.querySelector("#academicaField");
    const setEstudio = document.getElementById("hasta")

    
    const perfilProfesional = new Experiencias(objField, expField, academicaField);
    
    // DA ERROR
    
    setObjetivo.innerHTML = perfilProfesional.objField;
    setExperiencia.innerHTML = perfilProfesional.expField;
    setEstudio.innerHTML = perfilProfesional.academicaField;

    perfilProfesional.mensaje();
    /* / Generar Experiencias */

    /* Generar Formacion Academica */
    class FormacionAcademica {
        constructor(lugar, titulo) {
            this.lugar = lugar.toUpperCase();
            this.titulo = titulo;
        }
        mensaje() {
            console.log("Formación Académica agregada con exito!");
        }
    }

    const estudios = [];
    lugar = prompt("En que universidad o instituto estudiaste? ");
    titulo = prompt("que título obtuviste? ");


    estudios.push(new FormacionAcademica(lugar, titulo));
    console.log(estudios)

    const insertFormacion = document.getElementById("estudios");


    const mapear = estudios.map( (estudio) => `<p>${estudio.lugar}</p><p>${estudio.titulo}</p>`);
    insertFormacion.innerHTML = mapear;

    /* / Generar Formacion Academica */
    document.querySelector(".dnone").style.display="block";

    document.getElementById("formulario").style.display="none";

}

const añadirFormacion = () => {
    /* Añade un nuevo campo de Formación académica junto con el botón */
    let nuevoCampo = document.createElement("textarea");
    nuevoCampo.classList.add("form-control");
    nuevoCampo.classList.add("mt-2");
    nuevoCampo.setAttribute("rows", 3);
    nuevoCampo.setAttribute("placeholder", "Tus estudios");

    let añadirBtnAcademica = document.querySelector("#academicaAñadirBtn");
    let padre = document.querySelector("#formacionAcademica").parentNode;
    
    // Inserta los elementos hijos dentro del padre
    padre.insertBefore(nuevoCampo,añadirBtnAcademica)
}

const añadirExp = () => {
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

}


const importarCV = () => {
    alert("Importando CV como PDF...");
}


/* var exp = document.getElementById("cv_Exp");
var p = document.createElement("p");
const experiencia = "Tengo 10 años de experiencia"
p.innerHTML = experiencia;
exp.appendChild(p); */

