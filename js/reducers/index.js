var actions = require('../actions/index');

var number = Math.floor(Math.random() * 100) + 1;

var initialGameState = {
	userGuess: '',
	number: number;
	guessArray: [],
	response: 'Make your guess!',
	guesses: 0,
	gameWon: false
};

var gameReducer = function(state, action) {
	state = state || initialGameState;
	if(action.type === actions.GUESS_NUMBER) {
		var newGuess = state.guessArray;
		newGuess.push(action.guess);
		return Object.assign({}, state, {guessArray: newGuess}, {guesses: newGuess.length});
	}
	else if(action.type === actions.RESPONSE) {
		var currentGuess = state.guessArray[state.guessArray.length - 1];
		var difference = Math.abs(currentGuess - state.number);
		var response = null;
		var gameWon = false;
		if(difference == 0) {
			response = 'Hooray you won!!';
			gameWon = true;
		}
		else if(difference <= 10) {
			response = 'boiling hot';
		}
		else if(difference <= 20) {
			response = 'hot';
		}
		else if(difference <= 30) {
			response = 'warm';
		}
		else if(difference <= 50) {
			response = 'cold';
		}
		else {
			response = 'freezing cold';
		}
	}
	else if(action.type === actions.NEW_GAME) {
		return Object.assign({}, initialGameState);
	}
	return state;
}

exports.gameReducer = gameReducer;