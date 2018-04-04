// vaaditaan express (express js googleen) ja bodyparser

let express = require("express");
let bodyParser = require("body-parser");

// startataan express

let app = express();
app.use(bodyParser.json());

// "Database"

let contactList = [];
let id=100;

//REST api

app.get("/api/contact", function(req,res) {
	console.log("GET all contacts!");
	res.status(200).json(contactList);
});	

//Startup

app.post("/api/contact", function(req,res) {
	console.log("Add contact:");
	console.log(req.body);
	let contact = {
		id:id,
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		phone: req.body.phone
	}
	id++;
	contactList.push(contact);
	res.status(200).json({"message":"success"});
});	

app.delete("/api/contact/:id", function(req,res) {
	console.log("Delete contact:"+req.params.id);
	let tempId=req.params.id;
	for (let i=0; i < contactList.length; i++) {
		if(tempId == contactList[i].id) {
			contactList.splice(i,1);
			return res.status(200).json({"message":"success"});
		}	
		
	}
	res.status(404).json({"message":"not found"});
});	

//Startup

app.listen(3001);
console.log("Running in port 3001");