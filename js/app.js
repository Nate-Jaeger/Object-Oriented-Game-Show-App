let game;

//Add click event listener to the "Start Game" button
document.getElementById("btn__reset").addEventListener("click", function () {
   game = new Game();
   game.startGame();
});
