function Person(Iname,Iage,IbiographyType){
      this.Name=Iname;
      this.Age=Iage;
      this.biographyType=IbiographyType;
      this.biography=function(Ilooks){
          if(this.biographyType==="general"){
              var result= this.Name +" is a cool guy with age "+this.Age;
              console.log(result);
          }else{
              var result= this.Name +" is a  guy with age "+this.Age+"  By looks he/she is "+ Ilooks;
              console.log(result);
          }
      };
}

Person.prototype.Trick=30;
var father=new Person("Tom",26,"aaaa");
father.biography("tall");

console.log(father.Trick);

var otherFriend=new Person("Rat",42,"aaaa");
otherFriend.biography("short");
console.log(otherFriend.Trick);