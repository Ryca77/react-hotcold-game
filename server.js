var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(express.static('build'));

var currentRecord = null;

var Storage = {
	currentRecord: null,
	add: function(guesses) {
		if(guesses < this.currentRecord || this.currentRecord === null) {
			this.currentRecord = guesses;
    	}
    return this.currentRecord;
	}
};


var createStorage = function() {
	var storage = Object.create(Storage);
	return storage;
};

var storage = createStorage();

app.get('/fewest-guesses', function(req, res) {
	res.json({record: storage.currentRecord});
});

app.post('/fewest-guesses/:guesses', function(req, res) {
	var record = req.params.guesses;
	storage.add(guesses);
});

app.listen(process.env.PORT || 8080, process.env.IP);
//app.listen(8080, process.env.IP);

console.log("Listening on port 8080, yeah");