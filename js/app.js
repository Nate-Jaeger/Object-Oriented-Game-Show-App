let game;

//Add click event listener to the "Start Game" button
document.getElementById("btn__reset").addEventListener("click", function () {
   game = new Game;
   game.startGame();
});

//Click listener to listen for clicks only on keyboard button elements
document.getElementById('qwerty').addEventListener('click', e => {
	if(e.target.className === "key"){
		game.handleInteraction(e.target);
	}
});