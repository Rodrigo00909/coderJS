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
    setEmail.innerHTML = `<p>${perfil.mailField}</p>`;
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

    const objField = document.querySelector("#objField").value;
    const setObjetivo = document.querySelector("#objDiv");

    const expField = document.querySelector("#expField").value;
    const setExperiencia = document.querySelector("#expDiv");

    const academicaField = document.querySelector("#academicaField").value;
    const setEstudio = document.querySelector("#estudiosDiv")

    
    const perfilProfesional = new Experiencias(objField, expField, academicaField);
    
    // DA ERROR
    
    setObjetivo.innerHTML = perfilProfesional.objField;
    setExperiencia.innerHTML = perfilProfesional.expField;
    setEstudio.innerHTML = perfilProfesional.academicaField;

    perfilProfesional.mensaje();
    /* / Generar Experiencias */

    /* Generar Formacion Academica */
    // /RE-VER: NO TRAE NADA 
    class Skills {
        constructor(skill) {
            this.skill1 = skill;

        }
        mensaje() {
            console.log("Skills agregados con exito");
        }
    }

    let arraySkills = [];
    const setSkills = document.querySelector("#cv_skills");

    let skills = document.querySelectorAll(".skill");

    for(let i = 0; i < skills.length; i++) {
        // arraySkills[i] = skills[i].value;
        arraySkills = new Skills(skills[i].value)
        console.log(arraySkills);
    }

    /* const mapear = arraySkills.map(function(skill) {
        return `<li>${skill}</li>`
    });
    setSkills.innerHTML = mapear; */

    // /RE-VER: NO TRAE NADA 


    /* / Generar Formacion Academica */
    
    document.querySelector(".dnone").style.display="block";

    document.querySelector("#formulario").style.display="none";
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

