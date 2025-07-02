function imc(){
    var peso = document.getElementById("peso").value
    var altura = document.getElementById("alt").value
    peso = parseFloat(peso)
    altura = parseFloat(altura)
    var imc = peso/(altura*altura)
    var resultado = " "
    if(imc<18.5){
        resultado = "Abaixo do peso normal"
    }
    if(imc>=18.5 && imc<=24.9){
        resultado = "Peso normal"
    }
    if(imc>=25 && imc<=29.9){
        resultado = "Excesso de peso"
    }
    if(imc>=30 && imc<=34.9){
        resultado = "Obesidade classe 1"
    }
    if(imc>=35 && imc<=39.9){
        resultado = "Obesidade classe 2"
    }
    if(imc>=40){
        resultado = "Obesidade classe 3"
    }

    let quadro = document.getElementById("resultado")
    quadro.innerHTML = "<h2>"+resultado+"<h2>";
}