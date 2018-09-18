let mongoose = require('mongoose');

let Customer = new mongoose.Schema(
{	
	productImage: { type: String, required:true}, 
	name : {type : String, required:true},
	age : {type : Number},
	gender : {type : String},
	address : {type : String},
	createdAt : {type : Date, default : Date.now}
}
);

module.exports =  mongoose.model('customer', Customer);