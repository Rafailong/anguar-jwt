'use strict';

var express = require('express');
var controller = require('./thing.controller');

var router = express.Router();

router.get('/', ensureAuthorized, controller.index);
router.get('/:id', ensureAuthorized, controller.show);
router.post('/', ensureAuthorized, controller.create);
router.put('/:id', ensureAuthorized, controller.update);
router.patch('/:id', ensureAuthorized, controller.update);
router.delete('/:id', ensureAuthorized, controller.destroy);

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