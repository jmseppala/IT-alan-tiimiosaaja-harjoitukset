let express = require("express");
let mongoose = require("mongoose");
let carModel = require("./models/car");

let carRouter = express.Router();

carRouter.get("/cars",function(req,res) {
	carModel.find(function(err,items) {
	if (err) {
		console.log(err);
		res.status(404).json({"message":"not found"});		
	}
	return res.status(200).json(items);	
  });
});

carRouter.post("/cars", function(req,res) {
	let car = new carModel({
	type: req.body.type,
	price: req.body.price,
	year: req.body.year
});
	car.save(function(err,item) {
		if (err) {
		console.log(err);
		res.status(409).json({"message":"conflict"});		
	}
		return res.status(200).json({"message":"success"});
	});

});		

carRouter.delete("/cars/:id", function(req,res) {
	carModel.remove({"_id": req.params.id}, function(err) {
		if(err) {
			console.log(err);
			return res.status(409).json({"message":"conflict"});
		}
		return res.status(200).json({"message":"success"});
	});
});

carRouter.put("/cars/:id", function(req,res) {
	let updatedCar = {
		type:req.body.type,
		price:req.body.price,
		year:req.body.year
	}

	carModel.findOneAndUpdate({'_id': req.params.id},updatedCar,{},
	function(err,item) {	
		if(err) {
			console.log(err);
			return res.status(409).json({"message":"conflict"});
		}
		return res.status(200).json({"message":"success"});
		});
	});
		
module.exports = carRouter;