/* Hello World! program in Node.js */
console.log("Hello World!");

// file streaming support module is necessary
var fs = require('fs');

// This is resulting data
var result = '';

// Create a file stream reader object
// connected to file to be read (tiedosto.txt)
var reader = fs.createReadStream('tiedosto.txt');

// Set stream encoding to utf8 (just in case)
reader.setEncoding('UTF8');

// Read the stream object
reader.on('data', function(bufferi)
{ 
	result += bufferi;
});

// Error handling in case of problems...
reader.on('error', function(err) 
{ 
	console.log (err.stack);
}); 

// if file has been read succesfully (end)
// write it to console
reader.on('end', function() 
{ 
	console.log (result);
}); 

/* Kaikki on kunnossa? */
console.log("Hello World Again!");