let game;

//Add click event listener to the "Start Game" button
document.getElementById("btn__reset").addEventListener("click", function () {
   game = new Game;
   game.startGame();
});

//Click listener to monitor clicks only on keyboard button elements
document.getElementById('qwerty').addEventListener('click', e => {
	if(e.target.className === "key"){
		game.handleInteraction(e.target);
	}
});

//Keypress event listener to filter Keypresses from EnterKey
document.addEventListener('keypress', e => {
	if(e.code !== "Enter"){
		let buttons = [...document.querySelectorAll('.key')];
		let targetButton = buttons.filter(button => button.textContent === e.key)[0];

		//Check if button has a disabled property before executing action
		if(!targetButton.disabled){
			game.handleInteraction(targetButton);
		}
	}
	else {
		game = new Game;
		game.startGame();
	}
});