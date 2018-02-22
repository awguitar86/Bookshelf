const express = require('express');
const bodyParser = require('body-parser');
const bc = require('./controllers/books_controller');

const app = express();

app.use(bodyParser.json());

app.post('/api/books', bc.create);

app.get('/api/books', bc.read);

app.put('/api/books/:id', bc.update);

app.delete('/api/books/:id', bc.delete);

const port = 3000;
app.listen(port, () => { console.log(`Server is listening on port ${port}`); });
