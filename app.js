// dependencies
var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var Client = require('node-rest-client').Client;
 
var client = new Client();
// create instance of express
var app = express();

// require routes

// define middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.get('/', function(req, res) {
	var args = {
		headers: {
			'Content-type': 'application/json',
			'JsonStub-User-Key': 'a67c3db7-405f-4d0d-9958-265eaa47fad4',
			'JsonStub-Project-Key': 'feef8e12-f80b-4886-a567-0ec30a53b730'
		  }
	};
 
	client.get("http://jsonstub.com/QnA/2", args, function (data, response) {
		// parsed response body as js object 
		res.json(data);
		// raw response 
		console.log(response);
	});
});

// error hndlers
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res) {
  res.status(err.status || 500);
  res.end(JSON.stringify({
    message: err.message,
    error: {}
  }));
});

module.exports = app;
