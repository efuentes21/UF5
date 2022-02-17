/*
// Obtiene el campo de texto que vamos a moniterear
var field = document.getElementById("nom");
// Verificamos si tenemos algún valor auto guardado
// (esto solo ocurrirá si la página es recargada accidentalmente)
if (sessionStorage.getItem("autosave")) {
  // Restaura el contenido al campo de texto
  field.value = sessionStorage.getItem("autosave");
}
// Espera por cambios en el campo de texto
field.addEventListener("change", function() {
  // Almacena el resultado en el objeto de almacenamiento de sesión
  sessionStorage.setItem("autosave", field.value);
});
*/

var nomusu = document.getElementById("nomreg");
var contrausu = document.getElementById("contra");
var contrausurep = document.getElementById("contra2");
var nomusuari = document.getElementById("nom");
var cognomusuari = document.getElementById("cognom");

var nomususave = sessionStorage.getItem("nomusufield");
var contraususave = sessionStorage.getItem("contrausufield");
var contrausurepsave = sessionStorage.getItem("contrausurepfield");
var nomusuarisave = sessionStorage.getItem("nomusuarifield");
var cognomusuarisave = sessionStorage.getItem("cognomusuarifield");

var recuperado = false;

function guardar() {
    if(contrausu.value == contrausurep.value) {
        sessionStorage.setItem("nomusufield", nomusu.value);
        sessionStorage.setItem("nomusuarifield", nomusuari.value);
        sessionStorage.setItem("cognomusuarifield", cognomusuari.value);
        sessionStorage.setItem("contrausufield", contrausu.value);
        sessionStorage.setItem("contrausurepfield", contrausurep.value);
    } else {
        alert("Error al guardar");
    }
}

function recuperar() {
    if(sessionStorage.getItem("nomusufield")) {
        nomusu.value = nomususave;
    }
    if(sessionStorage.getItem("nomusuarifield")) {
        nomusuari.value = nomusuarisave;
    }
    if(sessionStorage.getItem("cognomusuarifield")) {
        cognomusuari.value = cognomusuarisave;
    }
}

function comprov() {
    if(contrausu.value == contraususave && contrausurep.value == contrausurepsave && contrausu.value == contrausurep.value) {
        alert("Benvingut " + nomusu.value + " " + cognomusuari.value)
    } else {
        alert("Error al iniciar sessió");
    }
}

function esborrar() {
    sessionStorage.clear();
}