const express = require('express');

// init app & middleware
const app = express();

// routes
app.get('/books', (req, res) => {
  res.json({ msg: 'Welcome to the API' });
});

app.listen(3000, () => {
  console.log('App listening on port 3000');
});
