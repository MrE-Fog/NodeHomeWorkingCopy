var YearView=Backbone.View.extend({
    render:function(){
       this.$el.html("Year View");
       return this
    }
});

var MonthView=Backbone.View.extend({
    render:function(){
      return  this.$el.html("Month View");
    }
});

var DayView=Backbone.View.extend({
    render:function(){
     return   this.$el.html("Day View");
    }
});

var ApplicationRouter=Backbone.Router.extend({
    routes:{
        "year":"yearRoute",
        "month":"monthRoute",
        "day":"dayRoute",
    },

    dayRoute:function(){
     var dayView=new DayView({el:"#container"});
     dayView.render();
    }, 
    yearRoute:function(){ 
     var yearView=new YearView({el:"#container"});
     yearView.render();  
    },
    monthRoute:function(){
     var monView=new MonthView({el:"#container"});
     monView.render();
    },  
});

var routertt=new ApplicationRouter();
Backbone.history.start();

var MainView=Backbone.View.extend({
    events:{
        "click":"onClick",
    },

    onClick:function(e){
        var $li=$(e.target);
        routertt.navigate($li.attr("data-url"),{trigger:true})
    }
});

var navView=new MainView({el:"#nav"});


