var actions = require('../actions/index');

var number = Math.floor(Math.random() * 100) + 1;

var initialGameState = {
	userGuess: '',
	number: number,
	guessArray: [],
	response: 'Make your guess!',
	guesses: 0,
	gameWon: false,
	record: ''
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
			response = 'Boiling hot';
		}
		else if(difference <= 20) {
			response = 'Hot';
		}
		else if(difference <= 30) {
			response = 'Warm';
		}
		else if(difference <= 50) {
			response = 'Cold';
		}
		else {
			response = 'Freezing cold';
		}
		return Object.assign({}, state, {response: response}, {gameWon: gameWon});
	}
	else if(action.type === actions.NEW_GAME) {
		return Object.assign({}, state, initialGameState, {number: Math.floor(Math.random() * 100) + 1}, {guessArray: []});
	}

	else if(action.type === actions.FETCH_FEWEST_GUESSES) {
		var record = action.record;
		return Object.assign({}, state, {record: record});
	}
	else if(action.type === actions.SAVE_FEWEST_GUESSES) {
		var guesses = action.record;
		return Object.assign({}, state, {record: guesses});
	}

	return state;
}

exports.gameReducer = gameReducer;