var express = require('express');
var bodyParser = require('body-parser');
var bc = require(__dirname + '/controllers/books_controller.js');

var app = express();

app.use( bodyParser.json() );

const baseURL = "/api/books";
app.post( baseURL, bc.create );
app.get( baseURL, bc.read );
app.put( `${baseURL}/:id`, bc.update );
app.delete( `${baseURL}/:id`, bc.delete);

const port = 3000;
app.listen( port, () => console.log(`Server is listening on port ${port}`) );

