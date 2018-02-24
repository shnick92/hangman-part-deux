var letter = require("./letter.js");

function Word(input, letterArr, addLetter, show) {
	this.input = input;
	this.letterArr = [];
	this.addLetter = function(char){
		this.letterArr.push(new Letter(char));
	};
	this.show = function(){
		var string = "";
		for (var i = 0; i < this.letterArr.length; i++) {
			string += this.letterArr[i].toString() + " ";
		};
		return string;
	};
	this.check = function(char){
		for (var i = 0; i < this.lettArr.length; i++) {
			this.lettArr[i].match(char);
		}
	}
	return this.show();
};

module.exports = Word;