let tabela = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
];

let contador = 0;   

function verificarVencedor(){
    
    //verificando as linhas
    if(tabela[0][0]==tabela[0][1] & tabela[0][1]==tabela[0][2]){
        if(tabela[0][0]!=""){
           alert("Parabéns jogador "+tabela[0][0]); 
        }     
    }
    if(tabela[1][0]==tabela[1][1] & tabela[1][1]==tabela[1][2]){
        if(tabela[1][0]!=""){
            alert("Parabéns jogador "+tabela[1][0]);
        }
    }
    if(tabela[2][0]==tabela[2][1] & tabela[2][1]==tabela[2][2]){
        if(tabela[2][0]!=""){
            alert("Parabéns jogador "+tabela[1][0]);
        }
    }

    //verificando colunas
    if(tabela[0][0]==tabela[1][0] & tabela[1][0]==tabela[2][0]){
        if(tabela[0][0]!=""){
            alert("Parabéns jogador "+tabela[0][0]);
        }
    }

    if(tabela[0][1]==tabela[1][1] & tabela[1][1]==tabela[2][1]){
        if(tabela[0][1]!=""){
            alert("Parabéns jogador "+tabela[0][1]);
        }
    }

    if(tabela[0][2]==tabela[1][2] & tabela[1][2]==tabela[2][2]){
        if(tabela[0][2]!=""){
            alert("Parabéns jogador "+tabela[0][2]);
        }
    }

    //verificando diagonais
    if(tabela[0][0]==tabela[1][1] & tabela[1][1]==tabela[2][2]){
        if(tabela[0][0]!=""){
            alert("Parabéns jogador "+tabela[0][0]);
        }
    }

    if(tabela[2][0]==tabela[1][1] & tabela[1][1]==tabela[0][2]){
        if(tabela[2][0]!=""){
            alert("Parabéns jogador "+tabela[2][0]);
        }
    }

}

function escrever(lugar, x, y){
    //verificar o símbolo do jogador
    if(contador%2==0){
        lugar.innerHTML = "O"; 
        tabela[x][y] = "O";   
    }else{
        lugar.innerHTML = "X";
        tabela[x][y] = "X";
    }
}

function jogar(cell){
    if(cell=='00'){ 
        var lugar = document.getElementById("00");
        if(tabela[0][0] == ""){
            contador++;
            escrever(lugar, 0, 0); 
        }  
    }
    
    if(cell=='01'){ 
        var lugar = document.getElementById("01");
        if(tabela[0][1] == ""){
            contador++;
            escrever(lugar, 0, 1);
        }
        
    }

    if(cell=='02'){
        var lugar = document.getElementById("02");
        if(tabela[0][2] == ""){
            contador++;
            escrever(lugar, 0, 2);
        }
    }

    if(cell=='10'){
        var lugar = document.getElementById("10");
        if(tabela[1][0] == ""){
            contador++;
            escrever(lugar, 1, 0);
        }
    }

    if(cell=='11'){ 
        var lugar = document.getElementById("11");
            if(tabela[1][1] == ""){
            contador++;
            escrever(lugar, 1,1);
        }
    }

    if(cell=='12'){ 
        var lugar = document.getElementById("12");
        if(tabela[1][2] == ""){
            contador++;
            escrever(lugar,1 ,2);
        }
    }

    if(cell=='20'){   
        var lugar = document.getElementById("20");
        if(tabela[2][0] == ""){
            contador++;
            escrever(lugar,2,0);
        }
    }

    if(cell=='21'){ 
        var lugar = document.getElementById("21");
        if(tabela[2][1] == ""){
            contador++;
            escrever(lugar,2,1);
        }
    }

    if(cell=='22'){ 
        var lugar = document.getElementById("22");
        if(tabela[2][2] == ""){
            contador++;
            escrever(lugar,2,2);
        }
    }

    verificarVencedor();

}