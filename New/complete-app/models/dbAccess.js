var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/employeeDatabase');

var db=mongoose.connection;

var EmployeeSchema = mongoose.Schema({
    id:{type:Number},
    name:{type:String},
    dept:{type:String},
    age:{type:Number}

    
});

//var Employee=module.exports=mongoose.model('Employee',EmployeeSchema);
var Employee=mongoose.model('Employee',EmployeeSchema);
module.exports=Employee;

module.exports.createEmployee=function(newEmployee,callback){
    newEmployee.save(callback);
}

module.exports.findEmployee=function(callback){
    Employee.find({}, function (err, docs) {
    callback(docs);
    });    
};





