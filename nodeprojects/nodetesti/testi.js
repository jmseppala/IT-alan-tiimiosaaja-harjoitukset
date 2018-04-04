/* Hello World! program in Node.js */
console.log("Hello World!");

// We need HTTP module for making http instance
var http = require("http");

// Lets create a simple server
http.createServer(function(request,response)
{
	response.writeHead(200, {'Content-Type': 'text/plain'});	
	response.end('Test palvelin\n');
}
).listen(1234);

// Kaikki on kunnossa?
console.log("Hello World Again!");