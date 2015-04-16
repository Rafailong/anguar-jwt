'use strict';

var _ = require('lodash');
var User = require('../user/user.model');

exports.create = function(req, res) {
  User.findOne({email: req.body.email, password: req.body.password}, function(err, user) {
    if (err) {
      res.json({
        type: false,
        data: "Error occured: " + err
      });
    } else {
      if (user) {
      	res.json({
	        type: true,
	        data: user,
	        token: user.token
        }); 
      } else {
        res.json({
          type: false,
          data: "Incorrect email/password"
       	});    
      }
    }
  });
};