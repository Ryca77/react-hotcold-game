var React = require('react');
var connect = require('react-redux').connect;

var actions = require('../actions/index');
var Feedback = require('./feedback');
var Guesses = require('./guesses');
var Counter = require('./counter');

var GameContainer = React.createClass({
	getInitialState: function() {
		return {
			userGuess: ''
		}
	},

	enterGuess: function(event) {
		this.setState({userGuess: event.target.value})
	},

	submitGuess: function(event) {
		event.preventDefault();
		var guess = this.refs.guessInput.value;
		console.log(guess);
		this.props.dispatch(actions.guessNumber(guess));
		this.props.dispatch(actions.response());
		this.setState({userGuess: ''});
	},

	newGame: function(event) {
		//event.preventDefault();
		this.props.dispatch(actions.newGame());
	},

	render: function(){
    	return (
    		<div>
    			<Feedback className="feedback" guess={this.state.guess} />
    			<form>
					<input type="text" className="guess" ref="guessInput" placeholder="Enter your Guess" onChange={this.enterGuess} value={this.state.userGuess} />
      				<button type="button" className="button" onClick={this.submitGuess}>Submit</button>
      			</form>
      			<Guesses className="guesses" />
      			<Counter className="counter" />
      			<button type="button" className="newgame" onClick={this.newGame}>New Game</button>
      		</div>
    	);
  	}
});

var Container = connect()(GameContainer);

module.exports = Container;