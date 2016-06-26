const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

require('dotenv').config();

app.get('/', function(req, res) {
  res.send('hello world');
});

app.get('/api/images', function(req, res) {
  var query = req.query.q ? req.query.q : res.status(422).send({'error': 'specify q'});
  require('./routes/images').search(query, req, res);
});

app.get('/api/wikipedia', function(req, res) {
  res.send('hello world');
});

app.listen(PORT, function () {
  console.log('Example app listening on port', PORT);
});