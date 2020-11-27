'use strict';

const express = require('express');

// Constants
const PORT = 8080;
// const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World from Node.js app!');
});

// app.listen(PORT, HOST);
// console.log(`Running on http://${HOST}:${PORT}`);
app.listen(PORT, () => {
  console.log('Server is running on port 3000');
});
