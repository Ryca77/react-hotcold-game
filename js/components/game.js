var React = require('react');
var connect = require('react-redux').connect;

var GameContainer = require('./game-container');

var Game = function() {
	return (
		<div className="game">
			<GameContainer />
		</div>
	);
};

module.exports = Game;