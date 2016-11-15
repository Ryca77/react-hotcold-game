var React = require('react');
var connect = require('react-redux').connect;

var Feedback = function(props) {
	var response = props.response;
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