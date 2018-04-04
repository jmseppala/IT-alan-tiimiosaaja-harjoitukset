// 1) Express
const express = require('express');

// 2) mongoose support
const mongoose = require('mongoose');

// 3) body-parser support for POST commands
const bodyparser = require('body-parser');

mongoose.connect('mongodb://localhost/testdb');

var Schema = mongoose.Schema;

// create a schema
var catSchema = new Schema({
  name: String,
  age: Number
}, {collection: "catcollection", versionKey: false});

// map schema to collection
var Cat = mongoose.model('catmodel', catSchema);

module.exports = Cat;

// SERVER START

var app = express();

app.use(bodyparser.json());

// SERVER START END


// GET ALL CATS
// SELECT * FROM cat;

app.get('/cats', function (req, res, next) {
	// console.log("GET CHECK");
	
  Cat.find({}, function(err, results) {
		if (err) throw err;
		// object of all the users
		console.log(results);
		res.set('Access-Control-Allow-Origin','*');
		res.json(results);
	});
});


// Get one cat
app.get('/cats/:id', function (req, res, next) { 
	var catID = req.params.id;
	Cat.find({ name: catID }, function(err, results) {
	if (err) throw err;
	// object of all the users
	console.log(results);
	res.set('Access-Control-Allow-Origin','*');
	res.json(results);	
   });
});


// kill cat by name
app.delete('/cats/:id', function (req, res, next) { 
 var catID = req.params.id;
// find the cat with id 
Cat.findOneAndRemove({ name: catID }, function(err, results) {
	if (err) throw err;
	console.log('Cat deleted!');
	res.set('Access-Control-Allow-Origin','*');
	res.json(results);	
  });
});


// find one and update
app.put('/cats/:id', function (req, res, next) { 
 var catID = req.params.id;
 Cat.findOneAndUpdate(
	{ name: catID }, 
	req.body, 
	{ new : true }, 
	function(err, cat) {
		if (err) throw err;
  	res.set('Access-Control-Allow-Origin','*');
	res.json(cat);	
	}
  );
   console.log('Cat updated!');
});



// create new cat
app.post('/cats', function (req, res, next) { 
	var newcat = new Cat(req.body);
	newcat.save(function(err, cat) {
		if (err) throw err;
		console.log('Cat created!');
		res.set('Access-Control-Allow-Origin','*');
		res.json(cat);	
  });
});
	
	
//
// NODEJS SERVER START
//


// Start nodeJS servers
var server = app.listen(1111, function()
{
	var hostport = server.address().port;
	console.log("Express server is listening");
	console.log("Port is %s", hostport);
});

//
// NODEJS SERVER START END
//
