'use strict';

var express = require('express');
var controller = require('./user.controller');

var router = express.Router();

router.get('/me', ensureAuthorized, controller.show);
router.post('/signin', controller.create);

function ensureAuthorized(req, res, next) {
  var bearerToken;
  var bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== 'undefined') {
    var bearer = bearerHeader.split(" ");
    bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    res.send(403);
  }
}

module.exports = router;