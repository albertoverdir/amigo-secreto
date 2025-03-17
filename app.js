// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    const lista = document.getElementById("listaAmigos");
    
    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido");
        return;
    }
    
    amigos.push(nombre);
    
    const listItem = document.createElement("li");
    listItem.textContent = nombre;
    lista.appendChild(listItem);
    
    input.value = "";
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay nombres para sortear");
        return;
    }
    
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];
    
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    
    const listItem = document.createElement("li");
    listItem.textContent = `🎉 Amigo Secreto: ${amigoSecreto} 🎉`;
    resultado.appendChild(listItem);
}
