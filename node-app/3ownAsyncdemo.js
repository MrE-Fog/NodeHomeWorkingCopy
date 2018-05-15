
var AsyncFuncCall=function(dir,callback){
console.log("inside higher order function");
fs.readdir(dir,function(err,list){
                
                if(err){
                    return callback(err);
                }

                list =list.filter(function (file){
                    return path.extname(file) === "."+filterstr
                });
                console.log("call solution provided");
                callback(null,list);
        });

};

var dir=process.argv[2];
var filterstr=process.argv[3];
function methodCallback(err,list){
    console.log("=======");
    if(err){
        return console.log("Error occured:", err);
    }
     var noOfFiles=0;
    list.forEach(function(file){
        noOfFiles ++;
    });
    console.log("Total no of files" + noOfFiles);
}



console.log("Program execution starts==========");
AsyncFuncCall(data,methodCallback);
console.log("Program execution ends==========");
console.log("");