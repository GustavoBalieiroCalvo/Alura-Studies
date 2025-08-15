function comprar() {

    //resgatar valores

    let tipoIngresso = document.getElementById('tipo-ingresso').value;

    let quantidadeInput = document.getElementById('qtd').value;

    let totalSuperiorValue = parseInt(document.getElementById('qtd-superior').innerHTML);
    let totalInferiorValue = parseInt(document.getElementById('qtd-inferior').innerHTML);
    let totalPistaValue = parseInt(document.getElementById('qtd-pista').innerHTML);

    //decrementar ingressos disponíveis

    if(tipoIngresso == 'superior') {
        totalSuperiorValue -= quantidadeInput;
        let totalSuperior = document.getElementById('qtd-superior');
        totalSuperior.innerHTML = totalSuperiorValue;
    } else if(tipoIngresso == 'inferior') {
        totalInferiorValue -= quantidadeInput;
        let totalInferior = document.getElementById('qtd-inferior');
        totalInferior.innerHTML = totalInferiorValue;
    } else {
        totalPistaValue -= quantidadeInput;
        let totalPista = document.getElementById('qtd-pista');
        totalPista.innerHTML = totalPistaValue;
    }

    

    
    //zerar input quantidade
}