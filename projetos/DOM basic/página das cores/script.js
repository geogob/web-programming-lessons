function alterarCor(option){
    //pegar o elemento que eu vou alterar a cor
    const elemento = document.getElementById("cor");

    if(option == 1){
        elemento.style.backgroundColor = "white";
    }

    if(option == 2){
        elemento.style.backgroundColor = "red";
    }

    if(option == 3){
        elemento.style.backgroundColor = "green";
    }

    if(option == 4){
        elemento.style.backgroundColor = "blue";
    }

    if(option == 5){
        elemento.style.backgroundColor = "black";
    }

}
 
function alterarTamanho(){
    const elemento = document.getElementById("cor");
    var tamanho = document.getElementById("tamanho").value;
    
    elemento.style.width = tamanho+"%"
    elemento.style.height = tamanho+"%"
}