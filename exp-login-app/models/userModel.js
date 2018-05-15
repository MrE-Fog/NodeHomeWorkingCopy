var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/node-users');

var db=mongoose.connection;

var UserSchema = mongoose.Schema({
    name:{type:String},
    email:{type:String},
    username:{type:String},
    password:{type:String}

    
});

var Users=module.exports=mongoose.model('User',UserSchema);
//var Users==mongoose.model('User',UserSchema);
//module.exports=Users

module.exports.createUser=function(newUser,callback){
    newUser.save(callback);
}

