var TodoItem = Backbone.Model.extend({
	defaults: {
		isCompleted: false
	},

	urlRoot: "/users/employee",
	
	// validate: function(attrs){
	// 	if (!attrs.title)
	// 		return "Title is required.";
	// },

	// toggle:function(){
	// 	this.set("completed",!this.get("completed"));
	// }	
});

var TodoItemView = Backbone.View.extend({
	tagName: "li",
	
	initialize: function(options){
		if (!(options && options.model))
			throw new Error("model is not specified.");
			
			this.model.on("change",this.render,this);
	},
   events:{
        "click #toggle":"onClickToggle",
        "click #delete":"onClickDelete"
    },

    onClickToggle: function(){
        //console.log("Book was clicked");
		this.model.toggle();
		this.model.save();
		
    },

    onClickDelete: function(){
        // e.stopPropagation();
        // console.log("Button  was clicked");

		console.log("OnClick delete function-----------"+JSON.stringify(this.model));
		this.model.destroy();
    },


	render: function(){
		this.$el.attr("id", this.model.id);
		//console.log("Task:" + JSON.stringify(this.model));
		
		this.$el.toggleClass("completed", this.model.get("completed"));

		var template = $("#todoItemTemplate").html();
		var html = Mustache.render(template, this.model.toJSON());
		this.$el.html(html);

		return this;
	}
});

$(document).ready(function(){
	var todoItems = new TodoItems();
	todoItems.fetch();

	var todoItemsView = new TodoItemsView({ model: todoItems });
	$("body").append(todoItemsView.render().$el);
});
