var express = require('express');
var app = express();
var morgan = require('morgan');
var path = require('path');
var fs = require('fs');

app.use('/src', express.static(__dirname + '/src'));


app.use(morgan('common', {
	stream: fs.createWriteStream('./access.log', {flags: 'a'})
}));
app.use(morgan('dev'));


app.get('/books', function(req, res) {
	res.sendFile(path.join(__dirname + '/books.html'));
});

app.get('/authors', function(req, res) {
	res.sendFile(path.join(__dirname + '/authors.html'));
});

app.listen(3000);