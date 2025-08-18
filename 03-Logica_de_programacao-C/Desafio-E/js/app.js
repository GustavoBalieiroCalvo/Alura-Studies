let amigosArray = [];

function adicionar() {


    let amigoInput = document.getElementById('nome-amigo').value;

    if (inputVazio(amigoInput)) {
        return;
    }
    if (amigosArray.includes(amigoInput)) {
        alert('Este nome já foi inserido');
        document.getElementById('nome-amigo').value = ''
        return;
    }

amigosArray.push(amigoInput);

let amigosLista = document.getElementById('lista-amigos');
amigosLista.innerHTML = amigosArray.join(', ');

//limpa input

let caixaInput = document.getElementById('nome-amigo');
caixaInput.value = "";

}

function sortear() {

    //Forbbiden if número de amigos é menor que 4

    if (amigosArray.length < 4) {
        alert('Insira ao menos quatro participantes');
    }

    //

    amigosArrayCopia = embaralhar(amigosArray);

    let caixaImprimir = document.getElementById('lista-sorteio');
    caixaImprimir.innerHTML = '';

    for (let i = 0; i < amigosArrayCopia.length; i++) {

        if (i == amigosArray.length - 1) {
            caixaImprimir.innerHTML = caixaImprimir.innerHTML + amigosArrayCopia[i] + ' --> ' + amigosArrayCopia[0] + '<br>';
        } else {
            caixaImprimir.innerHTML = caixaImprimir.innerHTML + amigosArrayCopia[i] + ' --> ' + amigosArrayCopia[i + 1] + '<br>';
        }


    }
}

function reiniciar() {

    let caixaInput = document.getElementById('nome-amigo');
    let amigosLista = document.getElementById('lista-amigos');
    let caixaImprimir = document.getElementById('lista-sorteio')

    caixaInput.value = '';
    amigosLista.innerHTML = '';
    caixaImprimir.innerHTML = '';
    amigosArray = [];

}


function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
    return lista;
}

function inputVazio(input) {
    if (input === '') {
        alert("ERRO! Valor inserido é inválido");
        return true;
    } else {
        return false;
    }
}