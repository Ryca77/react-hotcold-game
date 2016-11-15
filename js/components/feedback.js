var React = require('react');
var connect = require('react-redux').connect;

var Feedback = function(props) {
	var number = props.number;
	var guess = props.guessArray;
	for(var i = 0; i < guess.length; i++) {
		var difference = Math.abs(guess[i] - number);
	}
	console.log(number);
	console.log(difference);
	var response = null;
	var gameWon = props.gameWon;
	if(difference == undefined) {
		response = 'Make your guess!'
	}
	else if(difference == 0) {
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
	return (
		<div className="feedback">{response}</div>
	)
}

var mapStateToProps = function(state, props) {
	return {
		userGuess: state.userGuess,
		number: state.number,
		guessArray: state.guessArray,
		response: state.response,
		guesses: state.guesses,
		gameWon: state.gameWon
	}
}

var Container = connect(mapStateToProps)(Feedback);

module.exports = Container;