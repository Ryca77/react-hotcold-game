var React = require('react');
var connect = require('react-redux').connect;

var Guesses = function(props) {
	console.log(props);
	var guessList = [];
	var guess = props.guessArray;
	for(var i = 0; i < guess.length; i++) {
		guessList.push(<li key={i}>{guess[i]}</li>);
	}
	return (
		<div className="guesses">Guesses: {guessList}</div>
	)
};

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

var Container = connect(mapStateToProps)(Guesses);

module.exports = Container;