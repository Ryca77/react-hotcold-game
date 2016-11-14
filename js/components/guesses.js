var React = require('react');
var connect = require('react-redux').connect;

var Guesses = function(props) {
	console.log(props);
	var guessArray = [];
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
		guessArray: state.guessArray,
		response: state.response,
		guesses: state.guesses
	}
}

var Container = connect(mapStateToProps)(Guesses);

module.exports = Container;