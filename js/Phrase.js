class Phrase {
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }

    /**
    * Display phrase on game board
    */
    addPhraseToDisplay(){
        const phraseUL = document.querySelector('#phrase ul');

        //Loop over phrase string as an array
        for (const letter of this.phrase) {
            //Create, append, and create text for phrase LI's
            let li = document.createElement('li');
            li.textContent = letter;
            phraseUL.appendChild(li);

            //Assign different classes based on if the letter is a space or not
            li.setAttribute("class", letter !== ' ' ? `hide letter ${letter}` : "space");
        }
    }
}