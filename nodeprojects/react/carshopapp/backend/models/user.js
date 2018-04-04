let mongoose = require("mongoose");
let bcrypt = require("bcrypt-nodejs");

let Schema = mongoose.Schema({
	uname:{
		type: String,
		required:true,
		unique:true
	},
	passphrase: String
})

Schema.methods.generateHash=function(passphrase) {
	return bcrypt.hashSync(passphrase, bcrypt.genSaltSync(8),null);
}

Schema.methods.isPassphraseValid = function(passphrase) {
	return bcrypt.compareSync(passphrase, this.passphrase);
}

module.exports = mongoose.model("user",Schema);