
//guess number and record with counter
//respond with hot or cold options, or correct
//start new game

//guess number
var  GUESS_NUMBER = 'GUESS_NUMBER';
var guessNumber = function(guess) {
	return {
		type: GUESS_NUMBER,
		guess: guess
	};
};

//respond with hot or cold options, or correct
var RESPONSE = 'RESPONSE';
var response = function(response) {
	return {
		type: RESPONSE,
		response: response
	};
};

//start new game
var NEW_GAME = 'NEW_GAME';
var newGame = function(number) {
	return {
		type: NEW_GAME,
		number: number
	};
};

exports.GUESS_NUMBER = GUESS_NUMBER;
exports.guessNumber - guessNumber;
exports.RESPONSE = RESPONSE;
exports.response = response;
exports.NEW_GAME = NEW_GAME;
exports.newGame = newGame;