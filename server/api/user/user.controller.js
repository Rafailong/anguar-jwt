'use strict';

var _ = require('lodash');
var User = require('./user.model');


// Get a single user
exports.show = function(req, res) {
  User.findById(req.user.id, function (err, user) {
    if(err) { return handleError(res, err); }
    if(!user) { return res.send(404); }
    return res.json(user);
  });
};

function handleError(res, err) {
  return res.send(500, err);
}