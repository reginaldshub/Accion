var mongoose = require('mongoose');
const schema = mongoose.Schema({
  
    name:String,
    age:Number
});
module.export = mongoose.model('user',schema);