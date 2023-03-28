'use strict';

const express = require('express');
const path = require('path');
const app = express();

const PORT = 8080;

app.get('/test', function(req, res) {
  console.log('Incoming GET `test` request');
  res.send('This is a `test` response');
});

app.get('/index', function(req, res) {
  console.log('Incoming GET `index` request');
  res.sendFile(path.join(__dirname+'/index.html'));
});

const server = app.listen(PORT, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log('>>> Listening at %s:%s', host, port);
});
