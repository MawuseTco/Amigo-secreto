// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// En este desafío, deberás crear una aplicación web que permita a un grupo de amigos sortear un amigo secreto. Para ello, deberás desarrollar la lógica necesaria para sortear un amigo secreto de manera aleatoria y mostrar el resultado en la pantalla.
// Para ello, deberás crear una lista de amigos en la que cada amigo tenga un nombre. Luego, deberás sortear un amigo secreto de manera aleatoria y mostrar el resultado en la pantalla.
// Además, deberás permitir a los usuarios agregar amigos a la lista y eliminar amigos de la lista. También, deberás permitir reiniciar el juego en cualquier momento.

// Para resolver este desafío, deberás seguir los siguientes pasos:
// 1. Crear un array para almacenar los nombres de los amigos.
// 2. Crear una función para agregar un amigo al array.
// 3. Crear una función para actualizar la lista de amigos en el DOM.
// 4. Crear una función para eliminar un amigo del array.
// 5. Crear una función para sortear un amigo secreto de manera aleatoria.
// 6. Crear una función para mostrar el resultado del sorteo en el DOM.
// 7. Crear una función para reiniciar el juego.
// 8. Crear un botón para sortear un amigo secreto.
// 9. Crear un botón para reiniciar el juego.


// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo al array
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    if (nombre && /^[a-zA-Z\s]+$/.test(nombre)) {
        amigos.push(nombre);
        actualizarListaAmigos();
        input.value = '';
    } else {
        alert('Por favor, ingrese un nombre válido (solo letras).');
    }
}

// Función para actualizar la lista de amigos en el DOM
function actualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');

        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.className = 'button-delete';
        botonEliminar.onclick = () => eliminarAmigo(index);

        li.appendChild(botonEliminar);
        li.appendChild(document.createTextNode(amigo));
        lista.appendChild(li);
    });
}

// Función para eliminar un amigo del array
function eliminarAmigo(index) {
    amigos.splice(index, 1);
    actualizarListaAmigos();
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos en la lista para sortear.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    mostrarResultado(amigoSecreto);
}

// Función para mostrar el resultado del sorteo en el DOM
function mostrarResultado(amigoSecreto) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    const li = document.createElement('li');
    li.textContent = `El amigo secreto es: ${amigoSecreto}`;
    resultado.appendChild(li);
}

// Función para reiniciar el juego
function reiniciarJuego() {
    amigos = [];
    actualizarListaAmigos();
    document.getElementById('resultado').innerHTML = '';
}