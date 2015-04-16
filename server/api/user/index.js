'use strict';

var express = require('express');
var controller = require('./user.controller');

var router = express.Router();

router.get('/me', controller.show);
router.get('/signin', controller.create);

module.exports = router;