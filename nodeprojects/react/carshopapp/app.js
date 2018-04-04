let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let carRouter = require("./backend/carRouter");
let userModel = require("./backend/models/user");

mongoose.Promise = global.Promise;

let app = express();

app.use(bodyParser.json());

let loggedUsers = [];

mongoose.connect("mongodb://localhost/carshopdatabase").then(
	() => console.log("Successfully connected to mongodb"),
	(error) => {
		console.log("Error in connecting to mongodb:");
		console.log(error);
	}
);


app.post("/register",function(req,res) {
	let newUser = new userModel({});
	newUser.uname = req.body.uname;
	newUser.passphrase = newUser.generateHash(req.body.passphrase);
	newUser.save(function(err) {
		if(err) {
			return res.status(409).json({"message":"conflict"});	
		}
		return res.status(200).json({"message":"success"});
	});	
});	


app.post("/login", function(req,res){
    userModel.findOne({'uname':req.body.uname}, function(err,item) {
        if (err) {
			console.log(err)
            return res.status(409).json({"message":"conflict 1"});
        }
        if (!item){
            return res.status(409).json({"message":"conflict 2"});
        }
        if (!item.isPassphraseValid(req.body.passphrase))
        {
            return res.status(409).json({"message":"conflict 3"});
        }
		let token = "";
		let letters = "abcdefghijklmnopqrstu012345678910";
		for (let i = 0;i<128;i++) {
			let temp = Math.floor(Math.random()*letters.length);
			token = token + letters[temp];
		}	
		console.log(token);
		loggedUsers.push(token);
        return res.status(200).json({"token":token});
    })
});

app.post("/logout", function(req,res) {
	let token = req.headers.token;
	if(token) {
		for(let i = 0; i<loggedUsers.length; i++) {
		   if(token === loggedUsers[i]) {
				loggedUsers.splice(i,1);
				return res.status(200).json({"message": "logged out"});		
		}
	  }
	  
	}
	return res.status(404).json({"message":"not found"});
});

function isUserLogged(req,res,next) {
	let token = req.headers.token;
	for (let i = 0;i<loggedUsers.length;i++) {
		if(token === loggedUsers[i]) {
				return next();
		}
	}
}

app.use("/api",isUserLogged,carRouter);
		
app.listen(3001);
console.log("Running in port 3001");		