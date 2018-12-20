const express        = require('express');
var cors             = require('cors')
const app            = express();

const port = 8000;

let map = new Map();
map.set(1, ['A', 'B', 'C']);
map.set(2, ['D', 'E', 'F']);
map.set(3, ['G', 'H', 'I']);
map.set(4, ['J', 'K', 'L']);
map.set(5, ['M', 'N', 'O']);
map.set(6, ['P', 'Q', 'R', 'S']);
map.set(7, ['T', 'U', 'V']);
map.set(8, ['W', 'X', 'Y', 'Z']);

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
  let num = req.params.number;
  num = parseInt(num, 10);
  res.send(map.get(num).toString());
})

app.listen(port, () => {
  console.log('We are live on ' + port);
});