# appresource

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Quality][codeclimate-image]][codeclimate-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Dependency Status][david_img]][david_site]

> Rails, Laravel -like resource routes for [express][express-url]

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

[npm-image]: https://img.shields.io/npm/v/appresource.svg?style=flat-square
[npm-url]: https://npmjs.org/package/appresource
[travis-image]: https://travis-ci.org/chentsulin/appresource.svg
[travis-url]: https://travis-ci.org/chentsulin/appresource
[codeclimate-image]: https://img.shields.io/codeclimate/github/chentsulin/appresource.svg?style=flat-square
[codeclimate-url]: https://codeclimate.com/github/chentsulin/appresource
[coveralls-image]: https://img.shields.io/coveralls/chentsulin/appresource.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/chentsulin/appresource
[david_img]: https://img.shields.io/david/chentsulin/require-conf.svg
[david_site]: https://david-dm.org/chentsulin/require-conf
[express-url]: http://expressjs.com/
