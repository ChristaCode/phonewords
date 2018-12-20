const express        = require('express');
var cors             = require('cors')
const app            = express();
// const conversion = './Conversion.js';
// import { getWords } from './Conversion.js';


const port = 8000;

let map = new Map();
map.set(2, ['A', 'B', 'C']);
map.set(3, ['D', 'E', 'F']);
map.set(4, ['G', 'H', 'I']);
map.set(5, ['J', 'K', 'L']);
map.set(6, ['M', 'N', 'O']);
map.set(7, ['P', 'Q', 'R', 'S']);
map.set(8, ['T', 'U', 'V']);
map.set(9, ['W', 'X', 'Y', 'Z']);

function Node(data) {
  this.data = data;
  this.isWord = false;
  this.prefixes = 0;
  this.children = {};
}

function Trie() {
  this.root = new Node('');
}

Trie.prototype.add = function(word) {
  if(!this.root) {
    return null;
  }
  this._addNode(this.root, word);
};
Trie.prototype._addNode = function(node, word) {
  if(!node || !word) {
    return null;
  }
  node.prefixes++;
  var letter = word.charAt(0);
  var child = node.children[letter];
  if(!child) {
    child = new Node(letter);
    node.children[letter] = child;
  }
  var remainder = word.substring(1);
  if(!remainder) {
    child.isWord = true;
  }
  this._addNode(child, remainder);
};

Trie.prototype.getWords = function(numbers) {
  var words = [];
  var word = '';
  this._getWords(this.root, words, word, numbers, 0);
  return words;
};
Trie.prototype._getWords = function(node, words, word, numbers, level) {
  if (level >= numbers.length) {
    return;
  }
  for(var child in node.children) {
    if(node.children.hasOwnProperty(child)) {
      if (child == letters[numbers[level]][0] ||
          child == letters[numbers[level]][1] ||
          child == letters[numbers[level]][2]) {
      word += child;
      if (node.children[child].isWord && word.length == numbers.length) {
        words.push(word);
      }
      this._getWords(node.children[child], words, word, numbers, level + 1);
      word = word.substring(0, word.length - 1);
    }
    }
  }
};

  var letters = [['a','b','c'],['d','e','f'],['g','h','i'],['j','k','l'],['m','n','o'],['p','r','s']
  ,['t','u','v'],['w','x','y','z']];

  const fs = require('fs');

  var trie = new Trie();
  let txtFile = "1000.txt";
  let str = fs.readFileSync(txtFile,'utf8');
  str = str.toLowerCase()
  var words = str.split('\n');
  for (var i = 0; i < 1000; i++) {
    trie.add(words[i]);
  }

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
  let num = [];
  for(let i = 0; i < req.params.number.length; i++){
    if(i % 2 === 0)
     num.push(parseInt(req.params.number[i], 10) - 2);
  }
  console.log('feeding ' + num);
  let arr = trie.getWords(num);
  console.log('output: ' + arr);
  let strArr = arr.toString();

  if(!strArr){
    strArr = 'no predictions';
  }

  res.send(strArr);
})

app.listen(port, () => {
  console.log('We are live on ' + port);
});