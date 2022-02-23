var mongoose = require("mongoose");
const { stringify } = require("querystring");
const { Schema } = mongoose;


var aboutuser = new mongoose.Schema({
	Address:String,
    Pin:Number,
    fatherName:String,
    userBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"

    } 

});

var AboutUser=mongoose.model("aboutUser",aboutuser);
module.exports = AboutUser;

