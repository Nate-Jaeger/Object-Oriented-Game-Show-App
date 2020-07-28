class Game {
    constructor(){
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = this.getRandomPhrase();
    }

    /**
    * Creates phrases for use in game
    * @return {array} An array of phrases that could be used in the game
    */
    createPhrases(){
        const phrases = [];
        phrases.push(new Phrase("Life is like a box of chocolates"));
        phrases.push(new Phrase("Carpe Diem"));
        phrases.push(new Phrase("The stuff that dreams are made of"));
        phrases.push(new Phrase("Just keep swimming"));
        phrases.push(new Phrase("Rosebud"));

        return phrases;
    };

    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase(){
        let randomNumber = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomNumber];
    };
}