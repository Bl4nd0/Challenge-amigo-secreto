//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let nomesArray = [];

function adicionarAmigo() {
    let inputNome = document.getElementById("amigo");
    let nome = inputNome.value.trim();

    if (!nome) {
        alert("Por favor, adicione um nome!");
        return;
    }

    if (nomesArray.includes(nome)) {
        alert("Este nome já foi adicionado!");
        return;
    }

    nomesArray.push(nome);
    inputNome.value = "";
    atualizarListaDeAmigos();
}

function atualizarListaDeAmigos() {
    let listaDeAmigos = document.getElementById("listaAmigos");
    listaDeAmigos.innerHTML = "";

    nomesArray.forEach(nome => {
        let li = document.createElement("li");
        li.textContent = nome;
        listaDeAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (nomesArray.length < 3) {
        alert("Você precisa de pelo menos 3 amigos para sortear!");
        return;
    }

    let sorteio;
    do {
        sorteio = [...nomesArray].sort(() => Math.random() - 0.5);
    } while (!validarSorteio(sorteio));

    // Exibe o resultado do sorteio
    let resultadoUl = document.getElementById("resultadoUl");
    resultadoUl.innerHTML = "";
    
    nomesArray.forEach((nome, index) => {
        let li = document.createElement("li");
        li.textContent = `${nome} tirou ${sorteio[index]}`;
        resultadoUl.appendChild(li);
    });
}

function validarSorteio(listaSorteada) {
    return !nomesArray.some((nome, index) => nome === listaSorteada[index]);
}