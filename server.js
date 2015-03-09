var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var logger = require('morgan');

var app = express();
var port = process.env.PORT || 1234;

app.set('port', port);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));


app.get('*', function(req, res) {
  res.redirect('/#' + req.originalUrl);
});

app.listen(port, function() {
  console.log('Express server listening on port', port);
});
