const gameArea = document.getElementById('gameSection');
let game = [];

gameArea.addEventListener('click', (event) => {
  // gameArea.childNodes.forEach((grid) => {
  //   game.push(grid);
  // })
  
  console.log(game);
  

  event.target.innerHTML = 'X';
})