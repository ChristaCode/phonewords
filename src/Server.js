const express        = require('express');
var cors             = require('cors')
const app            = express();

const port = 8000;

var whitelist = ['http://localhost:3000']; //whitelisted for dev purposes
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors(corsOptions));

app.get('/translate/:number', function (req, res) {
  console.log(req.params.number);
  // res.send(req.params);
  res.send('test' + req.params.number);
})

app.listen(port, () => {
  console.log('We are live on ' + port);
});