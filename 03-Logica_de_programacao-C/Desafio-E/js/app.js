let amigosArray = [];

function adicionar() {
    
    let amigoInput = document.getElementById('nome-amigo').value;
    amigosArray.push(amigoInput);
    
    let amigosLista = document.getElementById('lista-amigos');
    amigosLista.innerHTML = amigosArray.join(', ');

    //limpa input

    let caixaInput = document.getElementById('nome-amigo');
    caixaInput.value = "";

}

function sortear() {

    amigosArrayCopia = embaralhar(amigosArray);

    let caixaImprimir = document.getElementById('lista-sorteio');
    caixaImprimir.innerHTML = '';

    for(let i = 0; i < amigosArrayCopia.length; i++) {

        if(i == amigosArray.length - 1) {
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

} 


function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
    return lista;
}