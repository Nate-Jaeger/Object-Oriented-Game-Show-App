class Game {
   constructor() {
      this.missed = 0;
      this.phrases = this.createPhrases();
      this.activePhrase = null;
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
	 * Clears previous game and resets keyboard
    * Begins game by selecting a random phrase and displaying it to user
    */
   startGame() {
		//Reset li,keyboard, and heart elements
		document.querySelectorAll('.letter').forEach(letter => letter.remove());
		document.querySelectorAll('.space').forEach(space => space.remove());
		document.querySelectorAll('.key').forEach(key => {
			key.disabled = false;
			key.classList = 'key';
		});
		document.querySelectorAll('.tries img')
				  .forEach(heart => heart.setAttribute("src", "images/liveHeart.png"));

		//Clear overlay screen / Add new phrase to screen
		document.querySelector("#overlay").style.display = "none";
		document.querySelector("#overlay").classList = '';
		this.activePhrase = this.getRandomPhrase();
      this.activePhrase.addPhraseToDisplay();
	}
	
	/**
	* Checks for winning move
	* @return {boolean} True if game has been won, false if game wasn't
	won
	*/
	checkForWin(){
		const unrevealedLetters = document.querySelectorAll('li.hide.letter');
		return unrevealedLetters.length === 0 ? true : false;
	}

	/**
	* Increases the value of the missed property
	* Removes a life from the scoreboard
	* Checks if player has remaining lives and ends game if player is out
	*/
	removeLife(){
		this.missed += 1;

		let tries = document.querySelectorAll('img[src="images/liveHeart.png"]');
		let heart = tries[0];
		heart.setAttribute("src", "images/lostHeart.png");

		//Check if player missed 5 times, if so call the gameOver method
		this.missed === 5 ? this.gameOver(false) : null;
	}

	/**
	* Displays game over message
	* @param {boolean} gameWon - Whether or not the user won the game
	*/
	gameOver(gameWon){
		const overlay = document.querySelector('#overlay');
		const title = document.querySelector('#game-over-message');
		overlay.style.display = "";

		//Add appropriate text to title and class to overlay
		title.textContent = gameWon ? "Congratulations, you won!" : "Better luck next time!";
		overlay.classList.add(gameWon ? "win" : "lose");
	}

	/**
	* Handles onscreen keyboard button clicks
	* @param (HTMLButtonElement) button - The clicked button element
	*/
	handleInteraction(button) {
		button.disabled = true;

		//Check if letter is in activePhrase
		if (this.activePhrase.checkLetter(button.textContent)){
			button.classList.add("chosen");
			this.activePhrase.showMatchedLetter(button.textContent);

			//Check for win
			this.checkForWin() ? this.gameOver(true) : null;
		} else {
			button.classList.add("wrong");
			this.removeLife();
		}
	}
}
