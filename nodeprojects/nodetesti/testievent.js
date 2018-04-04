/* Hello World! program in Node.js */
console.log("Hello World!");

// Events require event module
var events = require('events');

// Event object (eventEmitter) is used to fire events
var eventEmitter = new events.EventEmitter();

// Event must be caught and acted upon by eventhandler
// Thus every event is bind to event handler

// Event handler is function that is executed
// Then event is caught.

var eventHandler = function executeFunction()
{
	console.log("eventhandler is executing");	
}	

var eventHandlerToo = function executeFunctionToo()
{
	console.log("eventhandlerToo is executing");	
}	

// Here the existing eventhandler and eventemitter are
// bound together, otherwise event is not caught
eventEmitter.on('eventAlpha',eventHandler);
eventEmitter.on('eventBeta',eventHandler);

// Event can also be fired from code!

eventEmitter.emit('eventAlpha');
eventEmitter.emit('eventBeta');

/*
BUFFER
======
*/

var bufferi = new Buffer(120);

var somedata = "hippopankki ja puttepossu";

// Write data to buffer...
bufferi.write(somedata); 

// Read data from buffer...
var resultdata = bufferi.toString('utf8',5,20);

console.log(resultdata);

/* Kaikki on kunnossa? */
console.log("Hello World Again!");