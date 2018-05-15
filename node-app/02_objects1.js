var myHonda={
    color:"red",
    wheels:4,
    engine: {cylinders:4 ,size:2.2},
    getInfo: function(){
        var result="A Beautiful " + this.color+"car with "+this.engine.cylinders+" cylinders with "+this.engine.size +" size";
        console.log(result);
    }
}

console.log(myHonda);
myHonda.getInfo();

var myMaruti={
    color : "green",
    wheels:4,
     engine: {cylinders:4 ,size:2.2},
}

console.log(myMaruti);
console.log(myMaruti.color);
console.log(myMaruti.wheels);
