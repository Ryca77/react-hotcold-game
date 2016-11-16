var fetch = require('isomorphic-fetch');
var $ = require('jquery');

//guess number
var GUESS_NUMBER = 'GUESS_NUMBER';
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

//get fewest guesses
var FETCH_FEWEST_GUESSES = 'FETCH_FEWEST_GUESSES';
var fetchFewestGuesses = function(record) {
	return {
		type: FETCH_FEWEST_GUESSES,
		record: record
	};
};

//save fewest guesses
var SAVE_FEWEST_GUESSES = 'SAVE_FEWEST_GUESSES';
var saveFewestGuesses = function(record) {
	return {
		type: SAVE_FEWEST_GUESSES,
		record: record
	};
};

var getRecord = function() {
	return function(dispatch, record) {
		var url = "/fewest-guesses";	
		return fetch(url)
		.then(function(response) {
            if (response.status < 200 || response.status >= 300) {
                throw error;
            }
            return response;
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            var record = data.record;
            return dispatch(
                fetchFewestGuesses(record)
            );
        })
        .catch(function() {
            console.log('error');
        });
	};
};

var postRecord = function(total) {
	record = total;
	return function(dispatch) {
		return $.ajax({
			method: "POST",
			url: "/fewest-guesses",
			data: {record: record}
		})
		.then(function(response) {
            if (response.status < 200 || response.status >= 300) {
                throw error;
            }
            return response;
        })
        .then(function(data) {
            var record = data.total;
            return dispatch(
                saveFewestGuesses(response.record.record)
            );
        })
        .catch(function() {
            console.log('error');
        });
	};
};

exports.GUESS_NUMBER = GUESS_NUMBER;
exports.guessNumber = guessNumber;
exports.RESPONSE = RESPONSE;
exports.response = response;
exports.NEW_GAME = NEW_GAME;
exports.newGame = newGame;

exports.FETCH_FEWEST_GUESSES = FETCH_FEWEST_GUESSES;
exports.fetchFewestGuesses = fetchFewestGuesses;
exports.getRecord = getRecord;
exports.SAVE_FEWEST_GUESSES = SAVE_FEWEST_GUESSES;
exports.saveFewestGuesses = saveFewestGuesses;
exports.postRecord = postRecord;