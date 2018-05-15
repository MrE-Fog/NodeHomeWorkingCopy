var express = require('express');
var router = express.Router();
var Employee=require('../models/dbAccess');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/employee', function(req, res, next) {
  Employee.findEmployee(function(arrEmployee){
         if(arrEmployee.length===0){
           res.json({message:"No Data found"});
         }else{
           res.send(arrEmployee);
         }
      });    
});

router.post("/employee",function(req,res,next){
   var employee=req.body;
   if(!employee.name){
      res.json({errors:"Name is a required field!"});
   }else{
     console.log(employee);
      var newemp=new Employee({
        id:parseInt(employee.id,10),
        name:employee.name,
        dept:employee.dept,
        age:parseInt(employee.age,10)
      });
      Employee.createEmployee(newemp,function(err,user){
          if(err)
          throw err;
          console.log(user);
      });
      res.json({errors:"Employee inserted successfully"});

   } 
});

module.exports = router;
