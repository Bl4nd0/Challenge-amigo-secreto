let nomesArray = [];

function adicionarAmigo() {
    let inputNome = document.getElementById("amigo");
    let nome = inputNome.value.trim();

    if (nome === "") {
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

    let sorteio = [...nomesArray];
    let resultado = [];

    // Mistura aleatoriamente os nomes da lista
    sorteio.sort(() => Math.random() - 0.5);

    // Verifica se o sorteio é inválido e tenta novamente
    while (verificarSorteioInvalido(sorteio)) {
        sorteio.sort(() => Math.random() - 0.5);
    }

    // Exibe o resultado do sorteio
    let resultadoU1 = document.getElementById("resultado");
    resultadoU1.innerHTML = "";
    nomesArray.forEach((nome, index) => {
        let li = document.createElement("li");
        li.textContent = `$(nome) tirou ${sorteio[index]}`;
        resultadoU1.appendChild(li);
    });
}

function verificarSorteioInvalido(listaSorteada) {
    // Verifica se algum nome sorteado é o mesmo da posição original
    return nomesArray.some((nome, index) => nome === listaSorteada[index]);
}
            
                
            