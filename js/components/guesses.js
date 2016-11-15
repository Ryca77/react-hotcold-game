var React = require('react');
var connect = require('react-redux').connect;

var Guesses = function(props) {
	console.log(props);
	var guessArray = [];
	var guess = props.guessArray;
	for(var i = 0; i < props.guess.length; i++) {
		guessArray.push(<li key={i}>{props.guess[i]}</li>);
	}
	return (
		<div className="guesses">Guesses: {guessArray}</div>
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