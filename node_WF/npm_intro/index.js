
var express  = require('express');

var app      = express();

var path = require('path');                               // create our app w/ express

app.use(express.static('public'));

app.get('*',(req,res)=>{

res.sendFile(__dirname + '/public/index.html');

 });

app.listen(8000);

console.log("App listening on port 8000");