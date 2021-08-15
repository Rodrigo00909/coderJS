const generarCv = () => {
    /* Generar Perfil */
    class Perfil {
        constructor(n,p,l,g) {
            this.nombre = n;
            this.profesion = p;
            this.linkedin = l;
            this.github = g;
        }
    }

    nombre = prompt("Tu nombre? ");
    profesion = prompt("Tu profesión? ");
    linkedin = prompt("Tu linkedIn? (ej: manuelito09) ");
    github = prompt("Tu github? (ej: manuelito09) ");

    const perfil = new Perfil(nombre, profesion, linkedin, github);
    
    const setName = document.getElementById("name");
    const setProf = document.getElementById("prof");
    const setLinkedin = document.getElementById("linkedin")
    const setGithub = document.getElementById("github");

    setName.innerHTML = perfil.nombre;
    setProf.innerHTML = perfil.profesion;
    setLinkedin.innerHTML = `https://www.linkedin.com/in/${perfil.linkedin}`;
    setGithub.innerHTML = `https://github.com/${perfil.github}`;
    /* /Generar Perfil */

    /* Generar Experiencias */
    class Experiencias {
        constructor(e,d,h,p) {
            this.empresa = e.toUpperCase();
            this.desde = d;
            this.hasta = h;
            this.puesto = p;
        }
        mensaje() {
            console.log("Experiencia agregada con exito!");
        }
    }

    empresa = prompt("Ahora compconstemos su experiencia. Introduzca el nombre de la empresa en la que trabajo: ")
    desde = prompt("Introduzca la fecha de ingreso a la compañía: ")
    hasta = prompt("Introduzca la fecha de salida de la compañía: ")
    puesto = prompt("Introduzaca el puesto en el cual se desempeñó: ")

    
    const experiencia1 = new Experiencias(empresa, desde, hasta, puesto);

    const insertEmpresa = document.getElementById("empresa");
    const insertDesde = document.getElementById("desde");
    const insertHasta = document.getElementById("hasta")
    const insertPuesto = document.getElementById("puesto");
    
    insertEmpresa.innerHTML = experiencia1.empresa;
    insertDesde.innerHTML = experiencia1.desde
    insertHasta.innerHTML = experiencia1.hasta
    insertPuesto.innerHTML = experiencia1.puesto

    experiencia1.mensaje();
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

}


const importarCV = () => {
    alert("Importando CV como PDF...");
}


/* var exp = document.getElementById("cv_Exp");
var p = document.createElement("p");
const experiencia = "Tengo 10 años de experiencia"
p.innerHTML = experiencia;
exp.appendChild(p); */

