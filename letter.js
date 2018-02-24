// using inquirer, take each letter guess and store it within a new variable
// that is an empty array 'guess'. with each guess, run it through 'guess'
// and see if the letter has been guessed using a boolean statement. 
// if so and right, do nothing. if so and wrong, do nothing. if letter
// hasn't been guessed, and is right, display. if letter hasn't been guessed
// and is wrong, make a mark (6-8 marks total) and put it into an empty
// array 'wrongGuess'. count down marks until 0 = game over.

// have a word array as well that has the answers in it. run the guess
// through there first to see if correct, else place into the 'wrongGuess'
// array and make a mark.

// using callbacks, create a log of sorts to say whether the guess was
// correct the first time or wrong.

// use ".hide" to hide the word and have them be replaced by underscores
// (look at the hangman exercise you did earlier).

function Letter(char, guess, match, letterGuess) {
	this.char = char;
	this.guess = false;
	this.match = function(letter) {
		if (letter === this.char) {
			this.guess === true
		} else {
			console.log("you already guessed this!")
		};
	};
};

Letter.prototype.toString = function(){
	if (guess === true) {
		return this.char;
	} else {
		return "_";
	}
};

module.exports = Letter;