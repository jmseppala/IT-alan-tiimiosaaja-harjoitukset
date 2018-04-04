/*

1) Created a directory for this exercise

2) Add Express and postgre
npm init
npm install express --save
npm install postgre --save
npm install body-parser

*/

// 1) Express
const express = require('express');

// 2) postgres support
const pg = require('pg');

// 3) body-parser support for POST commands
const bodyparser = require('body-parser');

//
// CONNECT TO DBSERVER
// 

console.log("Contact DB Server");

var conString = "postgres://postgres:admin@localhost:5432/postgres";

var client = new pg.Client(conString);
client.connect();

console.log("Contact DB server END");


//
// END SERVER CONNECT
//


//
// SERVER START
//

// This line starts a server

var app = express();
// Register bodyparser with json support
app.use(bodyparser.json());

//
// CAT ROUTING
//

// GET ALL CATS
// SELECT * FROM cat;

app.get('/cats', function (req, res, next) {
	 client.query('select * from cat')
    .then(function (data) {
      res.status(200)
        .json({
			status: 'success',
			data: data.rows,
			message: 'Retrieved ALL cats'
        });
    })
    .catch(function (err) {
      return next(err);
    });
});

// Get one cat
app.get('/cats/:id', function (req, res, next) { 
	var catID = [ parseInt(req.params.id) ];
	client.query('select * from cat where catid = $1', catID)
	.then(function (data) {
      res.status(200)
        .json({
			status: 'success',
			data: data,
			message: 'Retrieved ONE cat'
        });
    })
    .catch(function (err) {
      return next(err);
    });
});
	
	
// Add one new cat


app.post('/cats', function (req, res, next) { 
  req.body.name = String(req.body.name);
  req.body.age = parseInt(req.body.age); 
  req.body.ownerid = parseInt(req.body.ownerid);
  client.query('insert into cat(name, age, ownerid)' +
      'values($1, $2, $3)',
	 [ req.body.name, req.body.age, req.body.ownerid ])
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Inserted ONE cat'
        });
    })
    .catch(function (err) {
      return next(err);
    });
});
	
// Update one cat
app.put('/cats/:id', function (req, res, next) { 
  client.query('update cat set name=$1, age=$2, ownerid=$3 where catid=$4',
    [req.body.name, parseInt(req.body.age),
     parseInt(req.body.ownerid), parseInt(req.params.id)])
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Updated cat'
        });
    })
    .catch(function (err) {
      return next(err);
    });
});

	
// Delete one cat
app.delete('/cats/:id', function (req, res, next) { 
 var catID = [ parseInt(req.params.id) ];
  client.query('delete from cat where catid = $1', catID)
    .then(function (result) {
      /* jshint ignore:start */
      res.status(200)
        .json({
          status: 'success',
          message: `Removed ${result.rowCount} cat`
        });
      /* jshint ignore:end */
    })
    .catch(function (err) {
      return next(err);
    });
});

//
// CAT ROUTING END
//

//
// NODEJS SERVER START
//


console.log("Node JS Server START");

// Start nodeJS servers
var server = app.listen(1234, function()
{
	var hostport = server.address().port;
	console.log("Express server is listening");
	console.log("Port is %s", hostport);
});

console.log("Node JS Server END");

//
// NODEJS SERVER END
//


//client.end();
