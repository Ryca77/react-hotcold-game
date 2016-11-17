var React = require('react');
var connect = require('react-redux').connect;

var actions = require('../actions/index');

var Record = function(props) {
	console.log(props);
	if(props.gameWon == true) {
		console.log(props.gameWon);
		props.dispatch(actions.postRecord(props.guesses));
	}
	var record = props.record;
	return (
		<div className="record">Record: {record}</div>
	);
};

var mapStateToProps = function(state, props) {
	return {
		userGuess: state.userGuess,
		number: state.number,
		guessArray: state.guessArray,
		response: state.response,
		guesses: state.guesses,
		gameWon: state.gameWon,
		record: state.record
	};
};

var Container = connect(mapStateToProps)(Record);

module.exports = Container;