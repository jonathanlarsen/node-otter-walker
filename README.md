Otter Walker [![Build Status](https://secure.travis-ci.org/jonathanlarsen/node-otter-walker.png)](http://travis-ci.org/jonathanlarsen/node-otter-walker)
============

```
$ npm install otter-walker
```

Example
-------

```javascript
var walk = require('otter-walker');

walk('example', fileCallback, done);

function fileCallback(err, file) {
    console.log(file); //filepath
}

function done(err, results) {
    console.log(results); //list of all filepaths in directory
}
```