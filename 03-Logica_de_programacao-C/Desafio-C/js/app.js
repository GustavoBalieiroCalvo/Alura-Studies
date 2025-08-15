function adicionar() {

    //extrai o valor do produto selecionado

    let produtoSelecionado = document.getElementById("produto").value;
    let match = produtoSelecionado.match(/R\$(\d+)/);
    let precoProduto = match ? parseInt(match[1]) : 0;
    /* console.log(precoProduto);*/

    //extrai a quantidade

    let quantidadeProduto = parseInt(document.getElementById("quantidade").value);

    if(isNaN(quantidadeProduto) || quantidadeProduto < 0) {
        alert("ERRO! Você não inseriu uma quantidade válida.");
        return;
    }

    //atribui valor total corrente à variável valorTotal

    let valorTotalSpan = document.getElementById("valor-total");
    let valorTotalAtual = valorTotalSpan.innerText.match(/R\$(\d+)/);
    let valorTotal = valorTotalAtual ? parseInt(valorTotalAtual[1]) : 0;

    //calcula valor total

    let novoTotal = valorTotal + (precoProduto * quantidadeProduto);

    //imprime valor total

    valorTotalSpan.innerHTML = `R\$${novoTotal},00`
    /* console.log(novoTotal); */

    //adiciona o produto à lista do carrinho

    let listaProdutos = document.getElementById("lista-produtos");

    //atribui ao nomeProduto a parte da str produtoSelecionado 
    // antes do () que se encontrará na posição[0] do array

    let nomeProduto = produtoSelecionado.split(" - R$")[0];

    let produtoHTML = `
        <section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidadeProduto}x</span> ${nomeProduto} <span class="texto-azul">R$${precoProduto}</span>
        </section>
    `;

    listaProdutos.innerHTML += produtoHTML;


    // atribui valor 1 no input de quantidade após o incremento no valor total

    let quantidadeInput = document.getElementById("quantidade");
    quantidadeInput.value = 1;

}

function limpar() {

    let valorTotalSpan = document.getElementById("valor-total");
    valorTotalSpan.innerHTML = "R$ 0,00";

    let listaProdutos = document.getElementById("lista-produtos");

    listaProdutos.innerHTML = "";
}