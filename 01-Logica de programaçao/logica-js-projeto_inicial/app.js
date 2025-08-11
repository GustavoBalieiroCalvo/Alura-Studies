alert("Boas vindas ao jogo do número secreto!");
let numeroSecreto = 4;
let chute = prompt("Escolha um número entre 1 e 10");

if(chute == numeroSecreto) {
    alert(`Você descobriu o número secreto. É o número ${numeroSecreto}`);
}

else {
    alert("Você errou");
}
