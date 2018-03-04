var express = require('express');
var router = express.Router();
var mongoClient=require('mongodb').MongoClient;

mongoClient.connect("mongodb://127.0.0.1:27017",function(err,connection){
  db=connection.db("projector");
});
/* GET users listing. */
router.get('/all', function(req, res, next) {
  db.collection("movie").find({}).toArray(function(err, data){
    if(!err)
    {
      return res.json({"status":"true","data":data});
    }
    else{
      return res.json({"status":"false"})
    }
  });
});


router.get('/:movieName', function(req, res){
  console.log(req.params.movieName);
  res.json({
    "name":req.params.movieName
  });
});
  

  router.post('/addMovie', function(req, res, next) {
    console.log(req.body);
    res.json({
      "jk":"mjhg"
    });
  });


module.exports = router;
