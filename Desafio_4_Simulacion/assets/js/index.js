const generarCV = () => {
    let nombre = prompt("Tu nombre? ");
    let profesion = prompt("Tu profesión? ");
    let linkedin = prompt("Tu linkedIn? (ej: manuelito09) ");
    let github = prompt("Tu github? (ej: manuelito09) ");
    
    let setName = document.getElementById("name");
    let setProf = document.getElementById("prof");
    let setLinkedin = document.getElementById("linkedin")
    let setGithub = document.getElementById("github");

    setName.innerHTML = nombre;
    setProf.innerHTML = profesion;
    setLinkedin.innerHTML = `https://www.linkedin.com/in/${linkedin}`;
    setGithub.innerHTML = `https://github.com/${github}`;
}

const importarCV = () => {
    alert("Importando CV como PDF...");
}