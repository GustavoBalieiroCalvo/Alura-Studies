function sortear(){
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let min = parseInt(document.getElementById("de").value);
    let max = parseInt(document.getElementById("ate").value);
    let resultado = document.getElementById("resultado");
    let numerosSorteados = [];

    for(let i = 0; i < quantidade; i++) {
        let numero;
        numero = geraNumeroAleatorio(min, max);

        while(numerosSorteados.includes(numero)) {
            numero = geraNumeroAleatorio(min, max);
        }
        numerosSorteados.push(numero);
    }
    
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${numerosSorteados}</label>`
    alterarStatusBotao();
}



function geraNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function reiniciar() {
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
    document.getElementById("resultado").innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`
    alterarStatusBotao();

}

function alterarStatusBotao() {
    let botao = document.getElementById("btn-reiniciar");
    
    if(botao.classList.contains("container__botao-desabilitado")) {
        botao.classList.remove("container__botao-desabilitado");
        botao.classList.add("container__botao");
    } else {
        botao.classList.remove("container__botao");
        botao.classList.add("container__botao-desabilitado");
    }
}
