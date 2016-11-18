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
var saveFewestGuesses = function(guesses) {	
	return {
		type: SAVE_FEWEST_GUESSES,
		record: guesses
	};
};

var getRecord = function() {
	console.log('getting');
	return function(dispatch) {
		var method = {method: 'GET'};
		var url = '/fewest-guesses';	
		return fetch(url, method)
		.then(function(response) {
            if(response.status < 200 || response.status >= 300) {
                var error = new Error(response.statusText);
        		error.response = response;
        		throw error;
            }
            return response;
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            var record = data.record;
            return dispatch(fetchFewestGuesses(record));
        })
        .catch(function() {
            console.log('error');
        });
	}
};

var postRecord = function(guesses) {
	console.log('posting');
	console.log(guesses);
	return function(dispatch) {
		var url = '/fewest-guesses';
		var headers = {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		};
		var totalGuesses = JSON.stringify({guesses: guesses});
		return fetch(url, {method: 'POST', headers: headers, body: totalGuesses, mode: 'cors'}).then(function(response) {
       	    if (response.status < 200 || response.status >= 300) {
           	    var error = new Error(response.statusText);
        		error.response = response;
           	    throw error;
            }
            console.log('success 1');
            return response;
    	    })
		.then(function(response) {
            console.log('success 2');
            return response.json();
        })
    	.then(function(data) {
    		console.log(data);
            var record = data.guesses;
   	        return dispatch(saveFewestGuesses(record));
   	    })
        .catch(function() {
   	        console.log('error');
   	    });
	}
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