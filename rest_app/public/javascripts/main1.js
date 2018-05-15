var Employee=Backbone.Model.extend({

    initialize:function(){
          console.log("Employee Has Been added");
    },

    defaults:{
        project:"Still in Bench",
    }
});

var Office=Backbone.Collection.extend({
    model:Employee,

    validate:function(attrs){
        
        if(attrs.years > 2018){
            return "year value is incorrect"
        }
    }
});

var EmployeeView=Backbone.View.extend({
    tagName:"tr",

    render:function(){
        this.$el.attr("id",this.model.id);
        var template=$("#employee-template").html();
        var htmlPassed=Mustache.render(template,this.model.toJSON());
        this.$el.html(htmlPassed);
        return this;
     }

});

var OfficeView=Backbone.View.extend({
    tagName:"table",
    //style:"width:100%",

    initialize:function(){
        console.log("OfficeView was initialized");
        this.model.on("add",this.onEmployeeadd,this);
        this.model.on("remove",this.onEmployeeremove,this);

        
    },

   

    onEmployeeadd:function(employee){
      console.log("Employee is added");
      if(!officeObj.isEmpty()){
            if($("tr#special").is(":visible")) {
                //It's visible
                console.log("Is visible");
            }else{
                console.log("Not Visible");
                var template11=$("#employeeHeader-template").html();
                var htmlPassed11=Mustache.render(template11);
                this.$el.html(htmlPassed11);
            }
      }
      var employeeViewObj=new EmployeeView({model:employee});
      this.$el.append(employeeViewObj.render().$el)
      
    },

    onEmployeeremove:function(employee){
        console.log("Employee is removed");
        this.$("tr#" + employee.id).remove();
        if(officeObj.isEmpty()){
        console.log("Office Collection is Empty.....");
        this.$("tr#special").remove();
      }
    },

     render:function(){
      var self = this;
        if(!officeObj.isEmpty()){
        var template11=$("#employeeHeader-template").html();
        var htmlPassed11=Mustache.render(template11);
        this.$el.html(htmlPassed11);
      }

      this.model.each(function(employee){
            var employeeViewObj=new EmployeeView({model:employee});
            self.$el.append(employeeViewObj.render().$el);
      });
      return self;
  }

});

var officeObj=new Office([
  new Employee({id:1 ,name:"Tom",project:"Bealls",salary:25000}),
  new Employee({id:2 ,name:"Ram",project:"Macys",salary:25000}),
  new Employee({id:3 ,name:"Saddler",project:"Belk",salary:35000}),
  new Employee({id:4 ,name:"surya",project:"Macys",salary:35000})

]);

var offviewOBJ=new OfficeView({el:"#book-list",model:officeObj});
offviewOBJ.render();

console.log("will add a new book in 2 sec..");
setTimeout(function(){
    
    officeObj.add(new Employee({id:5 ,name:"Karthick",salary:35000}))

},3000);

console.log("will remove a book  in 2 sec..");
setTimeout(function(){
    officeObj.remove(officeObj.at(0));
},6000);