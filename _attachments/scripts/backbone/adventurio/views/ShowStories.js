var listAllStories_template = null;

adventurio.views.ShowStories = Backbone.View.extend({

	el : $('#mainpage'),
	initialize : function() {
	
		return this.render();
	},
	render : function(event) {
		console.log("mainpage was renedered");
		
		// data = adventurio.mocks.listStories;
		
		
		var data = new adventurio.collections.StoriesCollection;
		data.fetch({success: this.showStories});
		// function(collection, response){ console.log("SUCCESS");}
		
	},
	events : {
		"click .viewStoryLink" : "viewStory"
	},


	showStories : function(collection, response){
		if(listAllStories_template === null) {
			listAllStories_template = $("#listAllStories_template").html();
		}

		var template = Handlebars.compile(listAllStories_template);
		
		
		var context = {
			storyObjects : collection.toJSON() 
		};
		console.log("Data to display:");
		console.log(context.storyObjects);
		var html = template(context);

		// var compiled_template = _.template($("#showStories-template").html());
		// this.el.html(compiled_template(this.model.toJSON()));

		this.$("#listedStories").html(html);
		$("#listedStories").listview("refresh");

	},

	viewStory : function(e) {
		var dataUrl = $(e.currentTarget).attr("data-url");
		if(dataUrl != null) {
			$.mobile.changePage("#viewstory" + dataUrl);
		}

		// $.mobile.changePage("index.html#singleStory");
	}
});

// var adventurio_views_ShowStories = Backbone.View.extend({
// el : $('#showStories'),
// render : function(event) {
// var compiled_template = _.template($("#showStories-template").html());
// this.el.html(compiled_template(this.model.toJSON()));
// return this;
// },
// events : {
//
// }
// });