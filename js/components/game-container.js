var React = require('react');
var connect = require('react-redux').connect;

var actions = require('../actions/index');
var Guesses = require('./guesses');

var guessArray = [];
var GameContainer = React.createClass({
	getInitialState: function() {
		return {
			userGuess: '',
			guessArray: []
		}
	},

	enterGuess: function(event) {
		this.setState({userGuess: event.target.value})
	},

	submitGuess: function(event) {
		event.preventDefault();
		var guess = this.refs.guessInput.value;
		guessArray.push(guess);
		this.props.dispatch(actions.guessNumber(guess));
		this.setState({guessArray: guessArray});
		var response = this.props.dispatch(actions.response());
		this.setState({userGuess: ''});
		console.log(guess);
	},

	render: function(){
    	return (
    		<div>
    			<form>
					<input type="text" className="guess" ref="guessInput" placeholder="Enter your Guess" onChange={this.enterGuess} value={this.state.userGuess} />
      				<button type="button" className="button" onClick={this.submitGuess}>Submit</button>
      			</form>
      			<Guesses className="guesses" guess={this.state.guessArray} />
      		</div>
    	);
  	}
});

var Container = connect()(GameContainer);

module.exports = Container;