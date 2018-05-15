var express = require('express');
var router = express.Router();

var emp =[{'id':1,name:"king",dept:"it",age:35},
        {'id':2,name:"deepa",dept:"hr",age:35},
        {'id':3,name:"sabya",dept:"finance",age:26},
        {'id':4,name:"Raj",dept:"it",age:26}
        ]


 router.get('/', function(req, res, next) {
 res.send(emp);
});    

// router.get('/:id', function(req, res, next) {
//      var index=parseInt(req.params.id,10);
//     for(var i=1;i<=emp.length;i++){
//         if(emp[i].id===index){
//             res.json (emp[i]);
//             console.log("Employee Found ");
//         }else{
//              res.sendStatus(404);
//              console.log("Employee Does not exist in database");
//         }
//     } 
// }); 

function findEmployee(id){
  for(var i=0;i<emp.length;i++){
    if(emp[i].id===id){
      return {"emp11":emp[i],"index":i};
    }
  }
  return null;
}


router.get("/:id",function(req,res,next){
    var returnVal= findEmployee(parseInt(req.params.id,10));
    if(returnVal==null){
      //res.sendStatus(404);
      res.json({errors:"No Employee found with the following Id!"});
    }else{
      res.json (returnVal.emp11);
    }
});   

router.post("/",function(req,res,next){
   var employee=req.body;
   if(!employee.name){
      res.json({errors:"Name is a required field!"});
   }else{
      lastId=emp[emp.length-1].id;
      employee.id=lastId+1;
      emp.push(employee);
      res.json({message:"Book successfully added!",employee});
   }
   
});   

router.put("/:id",function(req,res,next){
   var employee=req.body;
   var returnVal= findEmployee(parseInt(req.params.id,10));
    if(returnVal==null){
      
      res.json({errors:"No Employee found with the following Id!"});
    res.sendStatus(404);
    }else{
      //res.json (returnVal.book);
      emp[returnVal.index]=employee;
      res.json ({message:"Employee updated!",employee});
    }
   
}); 

router.delete("/:id",function(req,res,next){
   //var employee=req.body;
   var returnVal= findEmployee(parseInt(req.params.id,10));
    if(returnVal==null){
      
    res.json({errors:"No Employee found with the following Id!"});
    res.sendStatus(404);
    }else{
      if (returnVal.index > -1) {
        emp.splice(returnVal.index, 1);
        res.json ({message:"Employee successfully removed!", removed:returnVal.emp11});
    }
      
    }
   
});
   
module.exports=router;
