let mongoose = require("mongoose");

let Schema = mongoose.Schema;

module.exports = mongoose.model("car",new Schema({
	type: String,
	price: Number,
	year: Number
}));

