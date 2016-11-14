var React = require('react');
var connect = require('react-redux').connect;

var actions = require('../actions/index');
var GuessCounter = require('./guesses');

/*var Counter = React.createClass({
	updateCounter: function(number) {
		this.props.dispatch(actions.guessNumber(this.props.guess.length))
	}
});*/