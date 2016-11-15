var React = require('react');
var connect = require('react-redux').connect;

var Counter = function(props) {
	var count = props.guesses
	return (
		<div className="counter">Guess Count: {count}</div>
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

var Container = connect(mapStateToProps)(Counter);

module.exports = Container;