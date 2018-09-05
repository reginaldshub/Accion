var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";
MongoClient.connect(url, function(err, db) {
  var dbo = db.db("mydb");
  //dbo.createCollection("customers", function(err, res) {
  //  if (err) throw err;
   // console.log("Collection created!");
   // db.close();
  //});
  var myobj = { name: "Company Inc", address: "Mysore" };
//    var myobj1 = { name: "Regi", address: "bangalore" };
//    var myobj2 = { name: "Santhosh", address: "white" };
   var myquery = { address: "bangalore" };
   var newvalues = { $set: {name: "Regi", address: "America" } };
   dbo.collection("customers").updateOne(myquery, newvalues,  function(err, res) {
    if (err) throw err;
    else console.log("inserted");
  });
//   dbo.collection("customers").insertOne(myobj1, function(err, res) {
//     if (err) throw err;
//     else console.log("inserted");
//   });
//   dbo.collection("customers").insertOne(myobj2, function(err, res) {
//     if (err) throw err;
//     else console.log("inserted");
//   });
   db.close();
});
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var query = { address: "America" };
    dbo.collection("customers").find(query).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
  });
  