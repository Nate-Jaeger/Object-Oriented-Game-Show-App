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

	removeLife(){
		
	}
}
