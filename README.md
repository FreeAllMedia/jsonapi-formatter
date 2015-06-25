# Jsonapi-formatter.js [![npm version](https://img.shields.io/npm/v/jsonapi-formatter.svg)](https://www.npmjs.com/package/jsonapi-formatter) [![license type](https://img.shields.io/npm/l/jsonapi-formatter.svg)](https://github.com/FreeAllMedia/jsonapi-formatter.git/blob/master/LICENSE) [![npm downloads](https://img.shields.io/npm/dm/jsonapi-formatter.svg)](https://www.npmjs.com/package/jsonapi-formatter) ![ECMAScript 6](https://img.shields.io/badge/ECMAScript-6-red.svg)

ES6 Component that works as an omnirouter middleware to provide jsonapi responses.

```javascript
import Jsonapi-formatter from "jsonapi-formatter";

const jsonapi-formatter = new Jsonapi-formatter;
jsonapi-formatter.saySomething(); // will output "Something"
```

# Quality and Compatibility

[![Build Status](https://travis-ci.org/FreeAllMedia/jsonapi-formatter.png?branch=master)](https://travis-ci.org/FreeAllMedia/jsonapi-formatter) [![Coverage Status](https://coveralls.io/repos/FreeAllMedia/jsonapi-formatter/badge.svg)](https://coveralls.io/r/FreeAllMedia/jsonapi-formatter) [![Code Climate](https://codeclimate.com/github/FreeAllMedia/jsonapi-formatter/badges/gpa.svg)](https://codeclimate.com/github/FreeAllMedia/jsonapi-formatter) [![Dependency Status](https://david-dm.org/FreeAllMedia/jsonapi-formatter.png?theme=shields.io)](https://david-dm.org/FreeAllMedia/jsonapi-formatter?theme=shields.io) [![Dev Dependency Status](https://david-dm.org/FreeAllMedia/jsonapi-formatter/dev-status.svg)](https://david-dm.org/FreeAllMedia/jsonapi-formatter?theme=shields.io#info=devDependencies)

*Every build and release is automatically tested on the following platforms:*

![node 0.12.x](https://img.shields.io/badge/node-0.12.x-brightgreen.svg) ![node 0.11.x](https://img.shields.io/badge/node-0.11.x-brightgreen.svg) ![node 0.10.x](https://img.shields.io/badge/node-0.10.x-brightgreen.svg)
![iojs 2.x.x](https://img.shields.io/badge/iojs-2.x.x-brightgreen.svg) ![iojs 1.x.x](https://img.shields.io/badge/iojs-1.x.x-brightgreen.svg)



*If your platform is not listed above, you can test your local environment for compatibility by copying and pasting the following commands into your terminal:*

```
npm install jsonapi-formatter
cd node_modules/jsonapi-formatter
gulp test-local
```

# Installation

Copy and paste the following command into your terminal to install Jsonapi-formatter:

```
npm install jsonapi-formatter --save
```

## Import / Require

```
// ES6
import jsonapi-formatter from "jsonapi-formatter";
```

```
// ES5
var jsonapi-formatter = require("jsonapi-formatter");
```

```
// Require.js
define(["require"] , function (require) {
    var jsonapi-formatter = require("jsonapi-formatter");
});
```

# Getting Started

## More insights

In order to say something, you should know that `jsonapi-formatter()` ... (add your test here)

# How to Contribute

See something that could use improvement? Have a great feature idea? We listen!

You can submit your ideas through our [issues system](https://github.com/FreeAllMedia/jsonapi-formatter/issues), or make the modifications yourself and submit them to us in the form of a [GitHub pull request](https://help.github.com/articles/using-pull-requests/).

We always aim to be friendly and helpful.

## Running Tests

It's easy to run the test suite locally, and *highly recommended* if you're using Jsonapi-formatter.js on a platform we aren't automatically testing for.

```
npm test
```



