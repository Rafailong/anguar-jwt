'use strict';

var _ = require('lodash');
var jwt = require('jsonwebtoken');
var User = require('./user.model');


// Get a single user
exports.show = function(req, res) {
  User.findById(req.user.id, function (err, user) {
    if(err) { return handleError(res, err); }
    if(!user) { return res.send(404); }
    return res.json(user);
  });
};

exports.create = function (req, res) {
	User.findOne({email: req.body.email, password: req.body.password}, function(err, user) {
    if (err) {
      res.json({
        type: false,
        data: "Error occured: " + err
      });
    } else {
      if (user) {
        res.json({
          type: false,
          data: "User already exists!"
        });
      } else {
        var userModel = new User();
        userModel.email = req.body.email;
        userModel.password = req.body.password;
        userModel.save(function(err, user) {
	        user.token = jwt.sign(user, process.env.JWT_SECRET);
	        user.save(function(err, user1) {
	          res.json({
	            type: true,
	            data: user1,
	            token: user1.token
	          });
	        });
      	});
      }
    }
  });
}

function handleError(res, err) {
  return res.send(500, err);
}