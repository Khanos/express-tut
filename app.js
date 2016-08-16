var express = require('express');

var app = express();

var port = process.env.PORT || 5000;

app.use(express.static('public'));
app.set('views', './src/views');
// app.set('view engine', 'pug');
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index', {title: 'Hello from Ejs', list: ['a', 'b', 'c', 'd']});
});

app.get('/books', function(req, res) {
    res.send('Hello Books - From NodeJs and Express');
});

app.listen(port, function(err) {
    console.log('running server on port ' + port);
});
