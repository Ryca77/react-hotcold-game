var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(express.static('build'));

var currentRecord = null;

app.get('/fewest-guesses', function(req, res) {
	res.status(200).json({'record': currentRecord});
});

app.post('/fewest-guesses', function(req, res) {
	var record = req.body.total;
	if(record < currentRecord || currentRecord == null) {
		currentRecord = record;
	}
	res.json({'record': currentRecord});
});

app.listen(8080, process.env.IP);

console.log("Listening on port 8080");