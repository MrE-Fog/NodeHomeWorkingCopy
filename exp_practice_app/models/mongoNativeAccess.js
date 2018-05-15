var MongoClient = require('mongodb').MongoClient;
var assert=require('assert');

var url='mongodb://localhost:27017/node-users';
MongoClient.connect(url, function(err, db) {
  //assert.equal(null,err);
  console.log("connected successfully to the server");
  
  
  if (err) {
    throw err;
  }
  db.collection('users').find().toArray(function(err, result) {
    if (err) {
      throw err;
    }
    assert.equal(err,null);
    console.log("Found the following records");
    console.log(result);
    db.close();
  });
});