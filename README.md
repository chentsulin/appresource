# appresource [![Build Status](https://travis-ci.org/chentsulin/appresource.svg)](https://travis-ci.org/chentsulin/appresource)

> Rails, Laravel -like resource routes for [express][1]

## Install

```sh
$ npm install appresource
```

## Usage

```js
var app = express();
var appresource = require('appresource')(app);
var UserController = require('./controller/UserController');

app.get('/hello', function(req, res) {});

appresource('/users', UserController);

```

Or use on `express.Router`

```js
var router = express.Router();
var routerresource = require('appresource')(app);
var UserController = require('./controller/UserController');

router.get('/hello', function(req, res) {});

routerresource('/users', UserController);

```

UserController.js:

```js
module.exports = {
  index: function(req, res) {},
  create: function(req, res) {},
  store: function(req, res) {},
  show: function(req, res) {},
  edit: function(req, res) {},
  update: function(req, res) {},
  destroy: function(req, res) {}
}
```


## License
MIT © [C. T. Lin](https://github.com/chentsulin)

  [1]: http://expressjs.com/
