var esquerda = 0;
var direita = 0;

function pontuacaoEsquerda(ponto){
    esquerda+=ponto; //soma à pontuação
    //pega o elemento e imprime
    var pontoE = document.getElementById("pontoE")
    pontoE.innerHTML = esquerda;
}

function pontuacaoDireita(ponto){
    direita+=ponto; //soma à pontuação
    //pega o elemento e imprime
    var pontoD = document.getElementById("pontoD")
    pontoD.innerHTML = direita;
}
