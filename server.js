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

/*app.get('/fewest-guesses', function(req, res) {
	res.json({record: storage.currentRecord});
});*/

app.post('/fewest-guesses/:guesses', function(req, res) {
	var record = req.params.guesses;
	var session = req.session;
	console.log(session);
});

app.listen(process.env.PORT || 8080, process.env.IP);
//app.listen(8080, process.env.IP);

console.log("Listening on port 8080, yeah");