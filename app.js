/* 
OBJETIVO:
El principal objetivo de este desafío es fortalecer mis habilidades en 
lógica de programación.
*/

let listaPersonas = [];

function agregarAmigo() {
    let nombre = document.getElementById('amigo').value.toLowerCase()
                                                .replace(/\b\w/g, letra => letra.toUpperCase());                             
    if (nombre !== '') {
        let respuesta = validarNombre(nombre);

        if (respuesta) {
            if (listaPersonas.includes(nombre)) {
                asignarTexto('h2', 'Utilice otro nombre, el que eligió ya está registrado 🥹');
            } else {
                listaPersonas.push(nombre);
                asignarTexto('h2', 'Nombre de su amigo registrado 🥳');
                asignarTexto("#resultado", "");
                limpiarContenido();
                listarRegistrados();
                
            }
        } else {
            asignarTexto('h2', 'Por favor, introduzca un nombre válido 🥹');
            limpiarContenido();
        }
    } else {
        alert("Ingrese un nombre válido");
        asignarTexto('h2', 'Por favor, introduzca un nombre 🥹');
    }
}

function asignarTexto(etiqueta, texto) {
    let elementoHTML = document.querySelector(etiqueta);
    elementoHTML.innerHTML = texto;
    return elementoHTML;
}

function validarNombre(nombre) {
    let regex = /^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/;
    return regex.test(nombre);
}

function limpiarContenido() {
    document.querySelector('#amigo').value = "";
}

function listarRegistrados() {
    var lista = asignarTexto("#listaAmigos", "");

    for (let i = 0; i < listaPersonas.length; i++) {
        let item = document.createElement("li");
        item.textContent = listaPersonas[i];
        lista.appendChild(item);
    }
}

function sortearAmigo() {
    let indiceAleatorio = Math.floor(Math.random() * listaPersonas.length);
    let personaAleatoria = listaPersonas[indiceAleatorio];
    asignarTexto('h2', '🎉 ¡FELICITACIONES! 🥳');
    asignarTexto("#resultado", `El amigo secreto sorteado es: ${personaAleatoria}`);
    asignarTexto("#listaAmigos", "");
    // listaPersonas = [];
}