var express = require('express');
var router = express.Router();

var Comments=require('../models/commentModel');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/comments',function(req, res, next){
   //res.render('index',{'title':'Successfully','result':'successfully posted your comments'});


   var lfrom=req.body.fromm;
   var lcomment=req.body.comm;

   //Form validations
    req.checkBody('fromm','From field is required').notEmpty();
    req.checkBody('comm','Comment Field is required').notEmpty();

    //check for errors
    var errors=req.validationErrors();

    if(errors){
        res.render('comments',{
            errors : errors,
            fname  :lfrom,
            femail :lcomment,
        });
    }else{

   var newComment=new Comments({

      from : lfrom,
    comment: lcomment
   });
   Comments.createComment(newComment,function(err,insertedComment){
          if(err)
          throw err;
          console.log(insertedComment);
      });

      console.log("registration was successful");
      res.render('success',{'result':'Your Comments have been successfully Posted'});
  }
});

module.exports = router;

