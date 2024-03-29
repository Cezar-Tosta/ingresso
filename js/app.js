function comprar(){
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value); // Quando traz da página, é uma string. Tem que converter para inteiro então

    if(tipo.value == 'pista'){
        comprarPista(qtd);
    }
}

function comprarPista(qtd){
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (qtd > qtdPista){
        alert('Quantidade indisponível para a Pista!');
    } else {
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizada com sucesso!');
    }
}