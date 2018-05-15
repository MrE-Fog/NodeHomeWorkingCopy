var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/node-users');

var Schema = mongoose.Schema;

//Defining your schema
var commentsSchema=new Schema({
    from : String,
    comment: String
});

//Creating a model

var Comments=mongoose.model("Comment",commentsSchema);
module.exports=Comments;

module.exports.createComment = function(insertedComment,callback) {
insertedComment.save(callback);  
};

