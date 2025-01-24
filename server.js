'use strict';

const express = require('express');

// Constants
const PORT = 8000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world I am samarth and gaurav');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
