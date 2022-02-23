var mongoose = require("mongoose");
const { type } = require("os");
const { Schema } = mongoose;


var userSchema = new mongoose.Schema({
    
	username:String,
    age:Number,
    date:String,
   
});

var User=mongoose.model("User",userSchema);
module.exports = User;

