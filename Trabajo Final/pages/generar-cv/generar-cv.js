/* Construir CV */
const btnGenerarCv = document.querySelector(".btnGenerarCv");


$(btnGenerarCv).click( (e) => {
    e.preventDefault();

    const nombre = $.trim($("#nameField").val());
    const profesion = $.trim($("#professionField").val());
    const tel = $.trim($("#telField").val());
    const email = $.trim($("#mailField").val());
    const objetivo = $.trim($("#objField").val());

    const btnComprobar = $("#agregarAlert");

    if(nombre == '' || profesion == '' || tel == '' || email == '' || objetivo == ''){
        /* console.log('Hay campos sin completar');
        return false; */
        $(document).ready(function() {
            $(btnComprobar).html("Porfavor, llenar los campos obligatorios")
        })
    } else {
    
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

        /* Generar Objetivo Personal */
        const objField = document.querySelector("#objField").value;
        const setObjetivo = document.querySelector("#objDiv");
        setObjetivo.innerHTML = `<p class="mb-0">${objField}</p>`;
        /* // Generar Objetivo Personal */


        /* Generar Estudios */
       
        let estFieldFac = document.querySelectorAll(".estudioFacultad");

        let estField = document.querySelectorAll(".estField");

        let estFacStrings = [];
        for(let f of estFieldFac) {
            let fac = {
                nom2: `<h4 class="resume-timeline-item">${f.value}</h4>`
            }
            estFacStrings.push(fac);
        }

        let divEst = document.getElementById("datoFacultades");

        let estStrings = [];
        for(let f of estField) {
            let desc = {
                ds: `<p>${f.value}</p>`
            }
            estStrings.push(desc);
        }

        for(let i = 0; i < estStrings.length; i++) {
            divEst.innerHTML += 
            `
            <h4>${estFacStrings[i].nom2}</h4>
            <div class="resume-timeline position-relative">${estStrings[i].ds}</div>
            `
        }
        

        /* // Generar Estudios */

        /* Generar Experiencia */
       
        let expFieldEmpresa = document.querySelectorAll(".experienciaEmpresa");

        let expField = document.querySelectorAll(".expField");

        let expEmpresaStrings = [];
        for(let e of expFieldEmpresa) {
            let emp = {
                nom: `<h4 class="resume-timeline-item">${e.value}</h4>`
            }
            expEmpresaStrings.push(emp);
        }

        let divExp = document.getElementById("datoEmpresas");

        let expStrings = [];
        for(let e of expField) {
            let exp = {
                xp: `<p>${e.value}</p>`
            }
            expStrings.push(exp);
        }

        for(let i = 0; i < expStrings.length; i++) {
            divExp.innerHTML += 
            `
            <h4 id="expH4">${expEmpresaStrings[i].nom}</h4>
            <div class="resume-timeline position-relative">${expStrings[i].xp}</div>
            `
        }
        
        /* // Generar Experiencia */

        /* Generar Skills */

        let skillsFields = document.querySelectorAll(".skill");
        const setSkills = document.querySelector("#cv_skills");

        let skillStrings = '';
        for(let s of skillsFields) {
            skillStrings = skillStrings + `<p>- ${s.value}</p>`;
        }

        setSkills.innerHTML = skillStrings;

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
            const p = document.createElement("p");
            // Asignarle cada elemento como texto al li
            p.textContent = arrayTecnologies.tecnology;
            // Asignar como hijo el li al fragmento para no generar reflow
            fragment.appendChild(p);
        }

        cvTecnologies.appendChild(fragment);

        /* /Generar Tecnologías */

        /* Generar Idiomas */

        let idiomaFields = document.querySelectorAll(".idioma");
        const setidioma = document.querySelector("#cv_idioma");

        let idiomaStrings = '';
        for(let i of idiomaFields) {
            idiomaStrings = idiomaStrings + `<p>- ${i.value}</p>`;
        }

        setidioma.innerHTML = idiomaStrings;

        /* /Generar Idiomas */
        
        /* Esconder Formulario - Mostrar CV */
        const formulario = document.querySelector("#formulario");
        formulario.setAttribute("class", "dnone");

        const curriculum = document.querySelector("#curriculum");
        setTimeout(() => {
            curriculum.setAttribute("class", "slide-in-right");
            curriculum.classList.remove("dnone");
        }, 250);
        /* / Esconder Formulario - Mostrar CV */

    }/* /Construir CV */
});

/* btnGenerarCv.addEventListener("click", (e) => {

}) */


/* Añadir Formación */
const añadirFormacion = document.querySelector(".añadirFormacion");
añadirFormacion.addEventListener("click", (e) => {
    e.preventDefault();
        /* Añade un nuevo campo de Formación académica junto con el botón */
    let nuevoCampo = document.createElement("textarea");
    let nuevoDiv = document.createElement("div");
    let nuevoSpan = document.createElement("span");
    let nuevoI = document.createElement("i");
    // Facultad
    let nuevoCampoFacultad = document.createElement("input");
    let nuevoDivFacultad = document.createElement("div");
    let nuevoSpanFacultad = document.createElement("span");
    let nuevoIFacultad = document.createElement("i");
    //Clases
    // Nuevo Textarea
    nuevoCampo.classList.add("form-control");
    nuevoCampo.classList.add("academicaField");
    nuevoCampo.classList.add("estudio");
    // Nuevo Input Facultad
    nuevoCampoFacultad.classList.add("form-control");
    nuevoCampoFacultad.classList.add("experienciaEmpresa");
    // Nuevo Div
    nuevoDiv.classList.add("input-group");
    nuevoDiv.classList.add("mb-3");
    nuevoDiv.classList.add("estudios");
    // Nuevo Div Facultad
    nuevoDivFacultad.classList.add("input-group");
    nuevoDivFacultad.classList.add("mb-1");
    nuevoDivFacultad.classList.add("experienciasEmpresa");
    // Nuevo SPan
    nuevoSpan.classList.add("input-group-text");
    nuevoSpan.classList.add("bg-icons")
    // Nuevo Span Facultad
    nuevoSpanFacultad.classList.add("input-group-text");
    nuevoSpanFacultad.classList.add("bg-icons")
    // Nuevo I
    nuevoI.classList.add("form-redes");
    nuevoI.classList.add("fas");
    nuevoI.classList.add("fa-user-graduate");
    // Nuevo I Facultad
    nuevoIFacultad.classList.add("form-redes");
    nuevoIFacultad.classList.add("fas");
    nuevoIFacultad.classList.add("fa-briefcase");
    // Atributos
    nuevoCampo.setAttribute("rows", 3);
    nuevoCampo.setAttribute("placeholder", "Tus estudios");
    // Atributos Facultad
    nuevoCampoFacultad.setAttribute("placeholder", "Nombre de facultad")

    let añadirBtnAcademica = document.querySelector("#academicaAñadirBtn");
    let padre = document.querySelector("#formacionAcademica").parentNode;
    let padreFacultad = document.querySelector("#experiencia").parentNode;

    // Juntar Icono con span
    nuevoSpan.append(nuevoI);

    nuevoSpanFacultad.append(nuevoIFacultad);

    // Asignar el input al Div
    nuevoDiv.append(nuevoSpan);
    nuevoDiv.append(nuevoCampo);

    nuevoDivFacultad.append(nuevoSpanFacultad);
    nuevoDivFacultad.append(nuevoCampoFacultad);

    padreFacultad.insertBefore(nuevoDivFacultad, añadirBtnAcademica);
    
    // Inserta el hijo y el boton
    padre.insertBefore(nuevoDiv,añadirBtnAcademica);
});
/* /Añadir Formación */

/* Añadir Experiencia */
const añadirExp = document.querySelector(".añadirExp");
añadirExp.addEventListener("click", (e) => {
    e.preventDefault();
    /* Añade un nuevo campo de Experiencia junto con el botón */
    
    // Crear nodo a insertar
    // Descripcion
    let nuevoCampo = document.createElement("textarea");
    let nuevoDiv = document.createElement("div");
    let nuevoSpan = document.createElement("span");
    let nuevoI = document.createElement("i");
    // Empresa
    let nuevoCampoEmpresa = document.createElement("input");
    let nuevoDivEmpresa = document.createElement("div");
    let nuevoSpanEmpresa = document.createElement("span");
    let nuevoIEmpresa = document.createElement("i");
    // Clases
    // Nuevo Textarea
    nuevoCampo.classList.add("form-control");
    nuevoCampo.classList.add("expField");
    nuevoCampo.classList.add("experiencia");
    // Nuevo Input Empresa
    nuevoCampoEmpresa.classList.add("form-control");
    nuevoCampoEmpresa.classList.add("experienciaEmpresa");
    // Nuevo Div
    nuevoDiv.classList.add("input-group");
    nuevoDiv.classList.add("mb-3");
    nuevoDiv.classList.add("experiencias");

    // Nuevo Div Empresa
    nuevoDivEmpresa.classList.add("input-group");
    nuevoDivEmpresa.classList.add("mb-1");
    nuevoDivEmpresa.classList.add("experienciasEmpresa");
    // Nuevo SPan
    nuevoSpan.classList.add("input-group-text");
    nuevoSpan.classList.add("bg-icons")
    // Nuevo Span Empresa
    nuevoSpanEmpresa.classList.add("input-group-text");
    nuevoSpanEmpresa.classList.add("bg-icons")
    // Nuevo I
    nuevoI.classList.add("form-redes");
    nuevoI.classList.add("fas");
    nuevoI.classList.add("fa-briefcase");
    // Nuevo I Empresa
    nuevoIEmpresa.classList.add("form-redes");
    nuevoIEmpresa.classList.add("fas");
    nuevoIEmpresa.classList.add("fa-briefcase");
    // Atributos
    nuevoCampo.setAttribute("rows", 3);
    nuevoCampo.setAttribute("placeholder", "Tu Experiencia en otra empresa");
    // Atributos Empresa
    nuevoCampoEmpresa.setAttribute("placeholder", "Nombre de nueva Empresa")

    // Boton que se movera
    let añadirBtnExp = document.querySelector("#expAñadirBtn");
    // Referencia al nodo padre
    let padre = document.querySelector("#experiencia").parentNode;
    let padreEmpresa = document.querySelector("#experiencia").parentNode;

    // Juntar Icono con span
    nuevoSpan.append(nuevoI);

    nuevoSpanEmpresa.append(nuevoIEmpresa);

    // Asignar el input al Div
    nuevoDiv.append(nuevoSpan);
    nuevoDiv.append(nuevoCampo);

    nuevoDivEmpresa.append(nuevoSpanEmpresa);
    nuevoDivEmpresa.append(nuevoCampoEmpresa);

    padreEmpresa.insertBefore(nuevoDivEmpresa, añadirBtnExp);
    
    // Inserta el hijo y el boton
    padre.insertBefore(nuevoDiv,añadirBtnExp);
});
/* // Añadir Experiencia */

/* Añadir Skill */
const añadirSkill = document.querySelector(".añadirSkill");
añadirSkill.addEventListener("click", (e) => {
    e.preventDefault();
    // Crear nodo a insertar
    let nuevoCampo = document.createElement("input");
    let nuevoDiv = document.createElement("div");
    let nuevoSpan = document.createElement("span");
    let nuevoI = document.createElement("i");
    // Clases
    // Nuevo Input
    nuevoCampo.classList.add("form-control");
    nuevoCampo.classList.add("skill");
    nuevoCampo.classList.add("skillField");

    // Nuevo Div
    nuevoDiv.classList.add("input-group");
    nuevoDiv.classList.add("mb-3");
    nuevoDiv.classList.add("skills");
    // Nuevo SPan
    nuevoSpan.classList.add("input-group-text");
    nuevoSpan.classList.add("bg-icons")
    // Nuevo I
    nuevoI.classList.add("form-redes");
    nuevoI.classList.add("far");
    nuevoI.classList.add("fa-lightbulb");

    // Atributos
    nuevoCampo.setAttribute("placeholder", "Skill");

    // Juntar Icono con span
    nuevoSpan.append(nuevoI);

    // Asignar el input al Div
    nuevoDiv.append(nuevoSpan);
    nuevoDiv.append(nuevoCampo);

    // Boton que se movera
    // Referencia al nodo padre
    let padre = document.querySelector("#skillAñadirBtn").parentNode;
    
    // Insertar
    padre.append(nuevoDiv);
});
/* // Añadir Skill */

/* Añadir Tecnologías */
const añadirTech = document.querySelector(".añadirTech");
añadirTech.addEventListener("click", (e) => {
    e.preventDefault();
    // Crear nodo a insertar
    let nuevoCampo = document.createElement("input");
    let nuevoDiv = document.createElement("div");
    let nuevoSpan = document.createElement("span");
    let nuevoI = document.createElement("i");

    // Clases
    // Nuevo Input
    nuevoCampo.classList.add("form-control");
    nuevoCampo.classList.add("tecnology");
    nuevoCampo.classList.add("tecnologyField");
    // Nuevo Div
    nuevoDiv.classList.add("input-group");
    nuevoDiv.classList.add("mb-3");
    nuevoDiv.classList.add("skills");
    // Nuevo Span
    nuevoSpan.classList.add("input-group-text");
    nuevoSpan.classList.add("bg-icons")
    // Nuevo I
    nuevoI.classList.add("form-redes");
    nuevoI.classList.add("fas");
    nuevoI.classList.add("fa-laptop");

    // Atributos
    nuevoCampo.setAttribute("placeholder", "Software - Nivel");

    // Juntar Icono con span
    nuevoSpan.append(nuevoI);

    // Asignar el input al Div
    nuevoDiv.append(nuevoSpan);
    nuevoDiv.append(nuevoCampo);

    // Boton que se movera
    // Referencia al nodo padre
    let padre = document.querySelector("#techAñadirBtn").parentNode;
    
    // Insertar
    padre.append(nuevoDiv);
});
/* // Añadir Tecnologías */

/* Añadir Idioma */
const añadirIdioma = document.querySelector(".añadirIdioma");
añadirIdioma.addEventListener("click", (e) => {
    e.preventDefault();
    // Crear nodo a insertar
    let nuevoCampo = document.createElement("input");
    let nuevoDiv = document.createElement("div");
    let nuevoSpan = document.createElement("span");
    let nuevoI = document.createElement("i");

    // Clases
    // Nuevo Input
    nuevoCampo.classList.add("form-control");
    nuevoCampo.classList.add("idioma");
    nuevoCampo.classList.add("idiomaField");
    // Nuevo Div
    nuevoDiv.classList.add("input-group");
    nuevoDiv.classList.add("mb-3");
    nuevoDiv.classList.add("idiomas");
    // Nuevo Span
    nuevoSpan.classList.add("input-group-text");
    nuevoSpan.classList.add("bg-icons")
    // Nuevo I
    nuevoI.classList.add("form-redes");
    nuevoI.classList.add("fas");
    nuevoI.classList.add("fa-globe-europe");

    // Atributos
    nuevoCampo.setAttribute("placeholder", "Idioma - Nivel");

    // Juntar Icono con span
    nuevoSpan.append(nuevoI);

    // Asignar el input al Div
    nuevoDiv.append(nuevoSpan);
    nuevoDiv.append(nuevoCampo);

    // Boton que se movera
    // Referencia al nodo padre
    let padre = document.querySelector("#idiomaAñadirBtn").parentNode;
    
    // Insertar
    padre.append(nuevoDiv);
});
/* // Añadir Idioma */


// Titulos con Subrayados
const tituloObjetivos = document.querySelector(".spanObjetivos");
const tituloExp = document.querySelector(".spanExp");
const tituloEstudios = document.querySelector(".spanEstudios");
const tituloSkills = document.querySelector(".spanSkills");
const tituloTecnologias = document.querySelector(".spanTecnologias");
const tituloIdiomas = document.querySelector(".spanIdiomas")
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
            cvFondo.className = "btn_green1";
            localStorage.setItem('colorFondo', "btn_green1");

            tituloObjetivos.className = "resume-section-title-storage1";
            localStorage.setItem('colorObjetivos', "resume-section-title-storage1");

            tituloExp.className = "resume-section-title-storage1";
            localStorage.setItem('colorExp', "resume-section-title-storage1");

            tituloEstudios.className = "resume-section-title-storage1";
            localStorage.setItem('colorEstudios', "resume-section-title-storage1");

            tituloSkills.className = "resume-section-title-storage1";
            localStorage.setItem('colorSkills', "resume-section-title-storage1");

            tituloTecnologias.className = "resume-section-title-storage1";
            localStorage.setItem('colorTecnologias', "resume-section-title-storage1");

            tituloIdiomas.className = "resume-section-title-storage1";
            localStorage.setItem('colorIdiomas', "resume-section-title-storage1");
            break;

        case('btn_green2'):
            cvFondo.className = "btn_green2";
            localStorage.setItem('colorFondo', "btn_green2");

            tituloObjetivos.className = "resume-section-title-storage2";
            localStorage.setItem('colorObjetivos', "resume-section-title-storage2");

            tituloExp.className = "resume-section-title-storage2";
            localStorage.setItem('colorExp', "resume-section-title-storage2");

            tituloEstudios.className = "resume-section-title-storage2";
            localStorage.setItem('colorEstudios', "resume-section-title-storage2");

            tituloSkills.className = "resume-section-title-storage2";
            localStorage.setItem('colorSkills', "resume-section-title-storage2");

            tituloTecnologias.className = "resume-section-title-storage2";
            localStorage.setItem('colorTecnologias', "resume-section-title-storage2");

            tituloIdiomas.className = "resume-section-title-storage2";
            localStorage.setItem('colorIdiomas', "resume-section-title-storage2");
            break;

        case('btn_green3'): 
            cvFondo.className = "btn_green3";
            localStorage.setItem('colorFondo', "btn_green3");
            
            tituloObjetivos.className = "resume-section-title-storage3";
            localStorage.setItem('colorObjetivos', "resume-section-title-storage3");

            tituloExp.className = "resume-section-title-storage3";
            localStorage.setItem('colorExp', "resume-section-title-storage3");

            tituloEstudios.className = "resume-section-title-storage3";
            localStorage.setItem('colorEstudios', "resume-section-title-storage3");

            tituloSkills.className = "resume-section-title-storage3";
            localStorage.setItem('colorSkills', "resume-section-title-storage3");

            tituloTecnologias.className = "resume-section-title-storage3";
            localStorage.setItem('colorTecnologias', "resume-section-title-storage3");

            tituloIdiomas.className = "resume-section-title-storage3";
            localStorage.setItem('colorIdiomas', "resume-section-title-storage3");
            break;

        case('btn_green4'): 
            cvFondo.className = "btn_green4";
            localStorage.setItem('colorFondo', "btn_green4");

            tituloObjetivos.className = "resume-section-title-storage4";
            localStorage.setItem('colorObjetivos', "resume-section-title-storage4");

            tituloExp.className = "resume-section-title-storage4";
            localStorage.setItem('colorExp', "resume-section-title-storage4");

            tituloEstudios.className = "resume-section-title-storage4";
            localStorage.setItem('colorEstudios', "resume-section-title-storage4");

            tituloSkills.className = "resume-section-title-storage4";
            localStorage.setItem('colorSkills', "resume-section-title-storage4");

            tituloTecnologias.className = "resume-section-title-storage4";
            localStorage.setItem('colorTecnologias', "resume-section-title-storage4");

            tituloIdiomas.className = "resume-section-title-storage4";
            localStorage.setItem('colorIdiomas', "resume-section-title-storage4");
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
    const colorSkills = localStorage.getItem('colorSkills');
    const colorTecnologias = localStorage.getItem('colorTecnologias');
    const colorIdiomas = localStorage.getItem('colorIdiomas');

    if(colorDeFondo === null) {
        cvFondo.className = "cv_Data";
    } else {
        cvFondo.className = colorDeFondo;
        tituloObjetivos.className = colorObjetivos;
        tituloExp.className = colorExp;
        tituloEstudios.className = colorEstudios;
        tituloSkills.className = colorSkills;
        tituloTecnologias.className = colorTecnologias;
        tituloIdiomas.className = colorIdiomas;
    }


})(); // (Se ejecuta cuando el navedaor se refresca parecido a onload)


/* Importar CV como PDF */
const importarCV = document.querySelector(".importarCV");
importarCV.addEventListener("click", () => {
    
    const elemento = document.querySelector("#importar");

    const convertirElemento = elemento;
    html2pdf() // Funcion en html2pdf
    .set({ // promesas
        height: 0,
        margin: 0.2,
        padding: 0,
        filename: 'cv.pdf',
        image: {
            type: 'png',
            quality: 0.2
        },
        html2canvas: {
            scale: 3, // A mayor escala, mejores gráficos, pero más peso
            letterRendering: true,
        },
        jsPDF: {
            unit: "in",
            format: "a3",
            orientation: 'landscape' // landscape o portrait
        }
    })
    .from(convertirElemento)
    .save()
    .catch(err => console.log(err));
});



//mediaprint

/* <link href="print.css" rel="stylesheet" type="text/css" media="print">
 */

/* https://www.w3schools.com/css/css3_mediaqueries.asp
 */