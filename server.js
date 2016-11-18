var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session')

var app = express();

app.use(session({
    secret: 'no one saw this',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.use(bodyParser.json());
app.use(express.static('build'));

var currentRecord = null;

app.get('/fewest-guesses', function(req, res) {
	var session = req.session;
	session.record = currentRecord;
	console.log(session.record);
	res.json({record: session.record});
});

app.post('/fewest-guesses', function(req, res) {
	var totalGuesses = req.body.guesses;
	var session = req.session;
	if(currentRecord == null || totalGuesses < currentRecord) {
		session.record = totalGuesses;
		currentRecord = totalGuesses;
	}
	res.status(201).json(currentRecord);
});

app.listen(process.env.PORT || 8080, process.env.IP);
//app.listen(8080, process.env.IP);

console.log("Listening on port 8080, yeah");