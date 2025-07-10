const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const pelota = {
  x:200,
  y:30,
  raio:20,
  cor: 'green',
  velocidade:2
};

function desenhar(bola){
  ctx.beginPath();
  ctx.arc(bola.x, bola.y, bola.raio, 0, Math.PI*2);
  ctx.fillStyle = bola.cor;
  ctx.fill();
  ctx.closePath();
}


function animar(){
   //limpa a tela
  ctx.clearRect(0,0, canvas.width, canvas.height); 
  pelota.y+=pelota.velocidade;
  
  if(pelota.y+pelota.velocidade>canvas.height ||
    pelota.y+pelota.velocidade<0){
      pelota.velocidade = pelota.velocidade*-1;
  }
  
  desenhar(pelota);
  requestAnimationFrame(animar)
}

animar();