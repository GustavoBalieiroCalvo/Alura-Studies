titulo = document.querySelector('h1');

titulo.innerHTML = "Hora de desafio!";


function botaoClicado() {
    console.log("Botão clicado");
}

function alertAmoJS() {
    alert("I love JS!");
}

function cidadeBrasil() {
    let cidade = prompt("Escreva o nome de uma cidade do Brasil");
    alert(`Estive em ${cidade} e lembrei de você!`);
}

function soma() {
    n1 = parseInt(prompt("Diga o primeiro número"));
    n2 = parseInt(prompt("Diga o segundo número"));
    alert("Resultado " + (n1+n2))

}