function alterarStatus(n) {
    let item = document.getElementById(`game-${n}`);
    let botao = item.querySelector("a");

    if(botao.classList.contains("dashboard__item__button--return")) {
        botao.textContent = "Alugar";
        botao.classList.remove("dashboard__item__button--return");
    } else {
        botao.textContent = "Devolver";
        botao.classList.add("dashboard__item__button--return");
    }
}