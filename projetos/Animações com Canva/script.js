const player = document.getElementById('player');
const enemy = document.getElementById('enemy');
const gameArea = document.querySelector('.game-area');

// Posição inicial do jogador
let playerX = gameArea.offsetWidth / 2 - player.offsetWidth / 2;
player.style.left = `${playerX}px`;

// Movimento do jogador
document.addEventListener('keydown', function (event) {
  const step = 15;
  if (event.key === 'ArrowLeft' && playerX > 0) {
    playerX -= step;
  } else if (
    event.key === 'ArrowRight' &&
    playerX < gameArea.offsetWidth - player.offsetWidth
  ) {
    playerX += step;
  }
  player.style.left = `${playerX}px`;
});

// Função para detectar colisão (bounding box)
function checkCollision(playerRect, enemyRect) {
  return !(
    playerRect.top > enemyRect.bottom ||
    playerRect.bottom < enemyRect.top ||
    playerRect.left > enemyRect.right ||
    playerRect.right < enemyRect.left
  );
}

// Movimento do inimigo
let enemyY = 0;
let enemyX = Math.random() * (gameArea.offsetWidth - enemy.offsetWidth);
enemy.style.left = `${enemyX}px`;

function moveEnemy() {
  enemyY += 4; // velocidade do inimigo
  if (enemyY > gameArea.offsetHeight) {
    // reinicia o inimigo no topo
    enemyY = 0;
    enemyX = Math.random() * (gameArea.offsetWidth - enemy.offsetWidth);
    enemy.style.left = `${enemyX}px`;
  }
  enemy.style.top = `${enemyY}px`;

  // Verifica colisão
  const playerRect = player.getBoundingClientRect();
  const enemyRect = enemy.getBoundingClientRect();
  if (checkCollision(playerRect, enemyRect)) {
    alert('💥 Colisão! Fim de jogo.');
    location.reload(); // reinicia o jogo
  }

  requestAnimationFrame(moveEnemy);
}

// Inicia o jogo
moveEnemy();
