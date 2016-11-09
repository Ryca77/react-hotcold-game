//start game and generate random number
//guess number
//respond with hot or cold options, or correct
//record guessed numbers
//start new game

//start game and generate random number
var START_GAME = 'START_GAME';
var startGame = function(number) {
	return {
		type: START_GAME,
		number: number
	};
};

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

//record guessed numbers
var RECORD_GUESSED = 'RECORD_GUESSED';
var recordGuessed = function(record) {
	return {
		type: RECORD_GUESSED,
		record: record
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

exports.START_GAME = START_GAME;
exports.startGame = startGame;
exports.GUESS_NUMBER = GUESS_NUMBER;
exports.guessNumber - guessNumber;
exports.RESPONSE = RESPONSE;
exports.response = response;
exports.RECORD_GUESSED = RECORD_GUESSED;
exports.recordGuessed = recordGuessed;
exports.NEW_GAME = NEW_GAME;
exports.newGame = newGame;