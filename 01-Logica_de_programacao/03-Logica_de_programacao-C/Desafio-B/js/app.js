function alterarStatus(n) {
    let item = document.getElementById(`game-${n}`);
    let imagem = item.querySelector("div");
    let botao = item.querySelector("a");
    if(botao.classList.contains("dashboard__item__button--return")) {
        if(confirm("Tem certeza que gostaria de devolver o Game?")){
        botao.textContent = "Alugar";
        botao.classList.remove("dashboard__item__button--return");
        imagem.classList.remove("dashboard__item__img--rented");
        } else {
            return;
        }
    } else {
        botao.textContent = "Devolver";
        botao.classList.add("dashboard__item__button--return");
        imagem.classList.add("dashboard__item__img--rented");
    }
}