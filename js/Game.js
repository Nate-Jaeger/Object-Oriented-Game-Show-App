class Game {
   constructor() {
      this.missed = 0;
      this.phrases = this.createPhrases();
      this.activePhrase = this.getRandomPhrase();
   }

   /**
    * Creates phrases for use in game
    * @return {array} An array of phrases that could be used in the game
    */
   createPhrases() {
      const phrases = [];
      phrases.push(new Phrase("Life is like a box of chocolates"));
      phrases.push(new Phrase("Carpe Diem"));
      phrases.push(new Phrase("The stuff that dreams are made of"));
      phrases.push(new Phrase("Just keep swimming"));
      phrases.push(new Phrase("Rosebud"));

      return phrases;
   }

   /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
   getRandomPhrase() {
      let ranNum = Math.floor(Math.random() * this.phrases.length);
      return this.phrases[ranNum];
   }

   /**
    * Begins game by selecting a random phrase and displaying it to user
    */
   startGame() {
      //Hide the start screen overlay
		document.querySelector("#overlay").style.display = "none";
		//Clear classes so we can apply win/lose classes later
		document.querySelector("#overlay").classList = '';
      //Call addPhraseToDisplay on the active phrase
      this.activePhrase.addPhraseToDisplay();
	}
	
	/**
	* Checks for winning move
	* @return {boolean} True if game has been won, false if game wasn't
	won
	*/
	checkForWin(){
		//Collect all LI elements with class of hide and letter
		const unrevealedLetters = document.querySelectorAll('li.hide.letter');
		//Ternary to check length of unreaveledLetters. Return true if 0
		return unrevealedLetters.length === 0 ? true : false;
	}

	/**
	* Increases the value of the missed property
	* Removes a life from the scoreboard
	* Checks if player has remaining lives and ends game if player is out
	*/
	removeLife(){
		//Increase missed tries by 1
		this.missed += 1;

		//Collect all of the liveHeart icons on screen
		let tries = document.querySelectorAll('img[src="images/liveHeart.png"]');
		let heart = tries[0];

		//Replace liveHeart img with lostHeart image
		heart.setAttribute("src", "images/lostHeart.png");

		//Check if player missed 5 times, if so call the gameOver method
		this.missed === 5 ? this.gameOver() : false;
	}

	/**
	* Displays game over message
	* @param {boolean} gameWon - Whether or not the user won the game
	*/
	gameOver(gameWon){
		const overlay = document.querySelector('#overlay');
		const title = document.querySelector('.title');
		//Show game overlay screen
		overlay.style.display = "";

		if (gameWon){
			//Update H2 tag to tell user they won
			title.textContent = "You Won!";
			overlay.classList.add("win");
		} else {
			title.textContent = "You Lost";
			overlay.classList.add("lose");
		}
	}

	/**
	* Handles onscreen keyboard button clicks
	* @param (HTMLButtonElement) button - The clicked button element
	*/
	handleInteraction(button) {
		console.log(button);
	};
}
