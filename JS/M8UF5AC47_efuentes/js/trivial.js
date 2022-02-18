const enlace = window.location.search;
const params = new URLSearchParams(enlace);
const nomusuari = params.get('nombreusuario');

var contingut = document.querySelector('#contingut');

function preguntar(x, y) {
    codi_usuari = y.value;
    validat = false;
    if(x.value == "nom"){
        if(localStorage.getItem("nomsave") && y.value == localStorage.getItem("nomsave")) {
            window.open('web/trivial-api.htm?nombreusuario='+codi_usuari);
        } else {
            localStorage.setItem("nomcc", y.value);
            window.open('web/anysidenti.htm?nombreusuario='+codi_usuari);
        }
    }
}

// Una vez iniciado sesion con un nombre nuevo, pregunta la edad y pasa o no al trivial
function edat(x) {
    if(x == "major") {
        window.open("trivial-api.htm?nombreusuario="+nomusuari);
        localStorage.setItem("nomsave", nomusuari);
    } else if(x == "menor") {
        window.open("../index.htm")
    }
}

// Foto de perfil y nombre de usuario
function agafar() {
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => {
    console.log(data.results['0'])
    contingut.innerHTML = `
    <img src="${data.results['0'].picture.large}"
    width="100px" style="border-radius:50%;" class="img-fluid rounded-circle">
    ` + nomusuari
    })
    respostes();
}

function respostes() {
    localStorage.setItem("resp1", "1-2");
    localStorage.setItem("resp2", "2-1");
    localStorage.setItem("resp3", "3-3");
    localStorage.setItem("resp4", "4-4");
    localStorage.setItem("resp5", "5-3");
    localStorage.setItem("resp6", "6-1");
}

function limpiar() {
    localStorage.clear()
}

function comprovar(x) {
    if(x == localStorage.getItem("resp1") || x == localStorage.getItem("resp2") || x == localStorage.getItem("resp3") || x == localStorage.getItem("resp4") || x == localStorage.getItem("resp5") || x == localStorage.getItem("resp6")) {
        alert("Molt bé");
    } else {
        alert("Malament");
    }
}
