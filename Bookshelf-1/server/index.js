var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use( bodyParser.json() );

app.listen( 3000, () => console.log("Server is listening on port 3000") );

