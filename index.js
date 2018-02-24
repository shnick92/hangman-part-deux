var word = require("./word.js");
var inquirer = require('inquirer');

console.log("--------------------------------");
console.log("Hip Hop Hangman!");
console.log("Guess a letter of a rap group/artist!");
console.log("--------------------------------");

var guessesRemaining = 8;
var wins = 0;
var wordBank = ['yeezy', 'kendrick', 'nwa', 'logic', 'run dmc', 'public enemy']
var currentWord = new word(wordBank[Math.floor(Math.random() * wordBank.length)]);


inquirer.prompt([
		{
			type: "input",
			message: "What is your guess?",
			name: "guessd"
		}])
		.then(function(res) {
		
		});