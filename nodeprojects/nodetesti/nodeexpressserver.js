/* Hello World! program in Node.js */
console.log("Hello World!");

//
// This is a simple express server
//

// First, we need several modules
// Modules should be added at the beginning

var express = require('express');

// fs module is added because we get data from file

var fs = require('fs');

//
// END MODULE SET
//


// This line starts a server that uses
// Express framework with Node.js
var app = express();

//
// PUT HERE ALL THE ROUTING NEEDED
//


// List All Users
// List Some Users
// List One Users
app.get('/user:id', function (req, res) {
	});

// Add new User
app.put('/user', function (req, res) {
	});

// Update User
app.post('/user', function (req, res) {
	});
	
// Delete User
app.delete('/user'), function (req,res) {
	});

//
// END ROUTING
//

// This is where readily configures server
// will start listening to web browser

var server = app.listen(1234, function()
{
	var hostaddress = server.address().address;
	var hostport = server.address().port;
	console.log("Express server is listening");
	console.log("Address is: %s", hostaddress);
	console.log("Port is: %s", hostport);
});	


// Kaikki on kunnossa?
console.log("Hello World Again!");