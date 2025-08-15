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
    let amigosArrayCopia = amigosArray;
    let numerosSorteados = [];
    for(i = 0; i <= amigosArrayCopia.length; i++) {
        let numero = parseInt(Math.random() * amigosArrayCopia.length)
        numerossorteados.push(numero)
        amigosArrayCopia[i] = amigosArray[numero]
    }

    alert(amigosArrayCopia.join(', '));
}

function reiniciar() {



   /*  for(let i = 1; i <= 200; i++){
       console.log(parseInt(Math.random() * (5))); 
    } */

}