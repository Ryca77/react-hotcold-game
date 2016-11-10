var redux = require('redux');
var createStore = redux.createStore;

var reducers = require('./reducers/index');
var actions = require('./actions/index');

var store = createStore(reducers.gameReducer);
module.exports = store;