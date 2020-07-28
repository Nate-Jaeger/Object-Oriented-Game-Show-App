class Phrase {
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }

    /**
    * Display phrase on game board
    */
    addPhraseToDisplay(){
        const phraseUL = document.querySelector('#phrase ul');
        for (const letter of this.phrase) {
            let li = document.createElement('li');

            if (letter !== ' ') {
                li.setAttribute("class", `hide letter ${letter}`);
                li.textContent = letter;
                phraseUL.appendChild(li);
            } else {
                li.setAttribute("class", "space");
                li.textContent = ' ';
                phraseUL.appendChild(li);
            }
        }
    }
}