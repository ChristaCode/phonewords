const express        = require('express');
const app            = express();

const port = 8000;

app.get('/hello', function (req, res) {
  res.send('hello world')
})

app.listen(port, () => {
  console.log('We are live on ' + port);
});