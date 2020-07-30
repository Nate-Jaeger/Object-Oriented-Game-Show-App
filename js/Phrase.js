class Phrase {
   constructor(phrase) {
      this.phrase = phrase.toLowerCase();
   }

   /**
    * Display phrase on game board
    */
   addPhraseToDisplay() {
      const phraseUL = document.querySelector("#phrase ul");

      for (const letter of this.phrase) {
         //Create, append, and set text for letter LI's
         let li = document.createElement("li");
         li.textContent = letter;
         phraseUL.appendChild(li);

         //Assign different classes based on if the letter is a space or not
         li.setAttribute("class", letter !== " " ? `hide letter ${letter}` : "space");
      }
	}
	
	/**
	* Checks if passed letter is in phrase
	* @param (string) letter - Letter to check
	*/
	checkLetter(letter){
		return this.phrase.includes(letter);
	};

	/**
	* Displays passed letter on screen after a match is found
	* @param (string) letter - Letter to display
	*/
	showMatchedLetter(letter){
		let letters = document.getElementsByClassName(letter);
		
		for (const letter of letters) {
			letter.classList.remove('hide');
			letter.classList.add('show');
		}
	};
}
