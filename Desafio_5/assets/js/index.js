const generarPerfil = () => {
    const nombre = prompt("Tu nombre? ");
    const profesion = prompt("Tu profesión? ");
    const linkedin = prompt("Tu linkedIn? (ej: manuelito09) ");
    const github = prompt("Tu github? (ej: manuelito09) ");
    
    const setName = document.getElementById("name");
    const setProf = document.getElementById("prof");
    const setLinkedin = document.getElementById("linkedin")
    const setGithub = document.getElementById("github");

    setName.innerHTML = nombre;
    setProf.innerHTML = profesion;
    setLinkedin.innerHTML = `https://www.linkedin.com/in/${linkedin}`;
    setGithub.innerHTML = `https://github.com/${github}`;
}



const generarExperiencia = () => {

        class Experiencias {
        constructor(e,d,h,p) {
            this.empresa = e;
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

}


const importarCV = () => {
    alert("Importando CV como PDF...");
}


/* var exp = document.getElementById("cv_Exp");
var p = document.createElement("p");
const experiencia = "Tengo 10 años de experiencia"
p.innerHTML = experiencia;
exp.appendChild(p); */

