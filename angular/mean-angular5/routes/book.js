var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var passport = require('passport');
require('../config/passport')(passport);
var jwt = require('jsonwebtoken');
var Book = require("../models/Book");
var config = require('../config/database');

/* GET ALL BOOKS */
router.get('/', passport.authenticate('jwt', { session: false}), function(req, res) {
  var token = getToken(req.headers);
   if (token) {
    Book.find(function (err, books) {
      if (err) return next(err);
      res.json(books);
    });
  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }
});
  
/* GET SINGLE BOOK BY ID */
router.get('/:id', passport.authenticate('jwt', { session: false}), function(req, res) {
var token = getToken(req.headers); 
if (token) {
     Book.findById(req.params.id, function(err,books) {
	  if (err) return next(err);
      res.json(books);	 
  });
  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }
});

/* SAVE BOOK */
router.post('/', passport.authenticate('jwt', { session: false}), function(req, res) {
  var token = getToken(req.headers);
  if (token) {
   Book.create(req.body, function(err,post) {
      if (err) {
        return res.json({success: false, msg: 'Save book failed.'});
      }
 //     res.json({success: true, msg: 'Successful created new book.'});
	  res.json(post);
	});
  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }
});

/* UPDATE BOOK */
router.put('/:id', passport.authenticate('jwt', { session: false}), function(req, res) {
  var token = getToken(req.headers);
  if (token) {
    Book.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
      if (err) {
        return res.json({success: false, msg: 'Update book failed.'});
      }
      res.json(post);
    });
  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }
});

/* DELETE BOOK */
router.delete('/:id', passport.authenticate('jwt', { session: false}), function(req, res) {
  var token = getToken(req.headers);
  if (token) {
    Book.findByIdAndRemove(req.params.id, req.body, function (err, post) {
      if (err) {
        return res.json({success: false, msg: 'Delete book failed.'});
      }
      res.json(post);
    });
  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }
});

getToken = function(headers) {
	if (headers && headers.authorization) {
		var parted = headers.authorization.split(' ');
		if (parted.length === 2) {
			return parted[1];
		} else {
			return null;
		}
	} else {
		return null;
	}
}	

module.exports = router;
