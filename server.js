#!/usr/bin/env node

var app = require('./app');

var server = app.listen(4000, function() {
  console.log('Express server listening on port ' + 4000);
});


