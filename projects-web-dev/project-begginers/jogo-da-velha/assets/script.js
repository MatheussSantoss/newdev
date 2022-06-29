const gameArea = document.getElementById('gameSection');
const playerArea = document.getElementById('charSelect');
const modal = document.getElementById('myModal');
// const btnRematch= document.getElementById('btnRematch');
const btnReset = document.getElementById('btnReset');

let player1 = null; 
let player2 = null; 
let check = 0;

playerArea.addEventListener('click', (event) => {
  if(event.target == document.getElementById('playerX')){
    player1 = 'X';
    player2 = 'O';
    playerArea.classList.add('hide');
    gameArea.classList.remove('hide');
  } else if(event.target == document.getElementById('playerO')){
    player1 = 'O';
    player2 = 'X';
    playerArea.classList.add('hide');
    gameArea.classList.remove('hide');
  };
});


gameArea.addEventListener('click', (event) => {
  if(check%2 == 0){
    if (event.target.innerHTML == '') {     
      event.target.setAttribute('style', 'color: #3454b4;'); 
      event.target.innerHTML = player1;
      check++;
    }
  }else{
    if (event.target.innerHTML == '') {
      event.target.setAttribute('style', 'color: #b32922;');
      event.target.innerHTML = player2;
      check++;
    }
  };

  checkWin();
});

// btnRematch.addEventListener('click', (event) => {
//   gameArea.childNodes.splice(0,18);
//   modal.style.display = "flex";
// })

btnReset.addEventListener('click', (event) => {
  location.reload();
})

function checkWin() {
  // Verificação de empate
  if (check == 9) {
    modal.style.display = "block";
    // btnRematch.setAttribute('style', 'background-color: #3454b4;');
    btnReset.setAttribute('style', 'background-color: #b32922;');
    document.getElementById('modalTxt').innerHTML = 'Empatamo Família';
  };

  // Verificação de vitória Horizontal para o P1 e o P2
  for(var i = 0; i < 9; i+=3) {
    if(gameArea.children[i].innerHTML == player1 && gameArea.children[i+1].innerHTML == player1 && 
      gameArea.children[i+2].innerHTML == player1){
      modal.style.display = "block";
      // btnRematch.setAttribute('style', 'background-color: #3454b4;');
      btnReset.setAttribute('style', 'background-color: #3454b4;');
      document.getElementById('modalTxt').innerHTML = 'Parabéns Player 1,<br> tu é muito Gamer';
    }else if(gameArea.children[i].innerHTML == player2 && gameArea.children[i+1].innerHTML == player2 && 
      gameArea.children[i+2].innerHTML == player2){
        modal.style.display = "block";
        // btnRematch.setAttribute('style', 'background-color:  #b32922;');
        btnReset.setAttribute('style', 'background-color:  #b32922;');
      document.getElementById('modalTxt').innerHTML = 'Parabéns Player 2,<br> tu é muito Poggers';
    };
  };

  // Verificação de vitória Vertical para o P1 e o P2
  for(var i = 0; i < 3; i+=1) {
    if(gameArea.children[i].innerHTML == player1 && gameArea.children[i+3].innerHTML == player1 && 
      gameArea.children[i+6].innerHTML == player1){
      modal.style.display = "block";
      // btnRematch.setAttribute('style', 'background-color: #3454b4;');
      btnReset.setAttribute('style', 'background-color: #3454b4;');
      document.getElementById('modalTxt').innerHTML = 'Parabéns Player 1,<br> tu é muito Gamer';
    }else if(gameArea.children[i].innerHTML == player2 && gameArea.children[i+3].innerHTML == player2 && 
      gameArea.children[i+6].innerHTML == player2){
        modal.style.display = "block";
        // btnRematch.setAttribute('style', 'background-color: #b32922;');
        btnReset.setAttribute('style', 'background-color: #b32922;');
      document.getElementById('modalTxt').innerHTML = 'Parabéns Player 2,<br> tu é muito Poggers';
    };
  };

  // Verificação de vitória Diagonal para o P1 
  if(gameArea.children[0].innerHTML == player1 && gameArea.children[0+4].innerHTML == player1 && 
    gameArea.children[0+8].innerHTML == player1){
      modal.style.display = "block";
      // btnRematch.setAttribute('style', 'background-color: #3454b4;');
      btnReset.setAttribute('style', 'background-color: #3454b4;');
      document.getElementById('modalTxt').innerHTML = 'Parabéns Player 1,<br> tu é muito Gamer';
  }else if(gameArea.children[0+2].innerHTML == player1 && gameArea.children[0+4].innerHTML == player1 && 
    gameArea.children[0+6].innerHTML == player1){
      modal.style.display = "block";
      // btnRematch.setAttribute('style', 'background-color: #3454b4;');
      btnReset.setAttribute('style', 'background-color: #3454b4;');
      document.getElementById('modalTxt').innerHTML = 'Parabéns Player 1,<br> tu é muito Gamer';
  };

  // Verificação de vitória Diagonal para o P2
  if(gameArea.children[0].innerHTML == player2 && gameArea.children[0+4].innerHTML == player2 && 
    gameArea.children[0+8].innerHTML == player2){
      modal.style.display = "block";
      // btnRematch.setAttribute('style', 'background-color: #b32922;');
      btnReset.setAttribute('style', 'background-color: #b32922;');
      document.getElementById('modalTxt').innerHTML = 'Parabéns Player 2,<br> tu é muito Poggers';
  }else if(gameArea.children[0+2].innerHTML == player2 && gameArea.children[0+4].innerHTML == player2 && 
    gameArea.children[0+6].innerHTML == player2){
      modal.style.display = "block";
      // btnRematch.setAttribute('style', 'background-color: #b32922;');
      btnReset.setAttribute('style', 'background-color: #b32922;');
      document.getElementById('modalTxt').innerHTML = 'Parabéns Player 2,<br> tu é muito Poggers';
  };
}