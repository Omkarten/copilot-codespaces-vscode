//create a web server using express
const express = require('express');
const app = express();
const port = 3000;

//create a route for the home page
app.get('/', (req, res) => {
  res.send('Hello World!');
});

//create a route for the comments page
app.get('/comments', (req, res) => {
  res.send('This is the comments page');
});

//start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
}); 
