Template.forms.helpers({
	form: function(){
		return Forms.find({}, { sort: { name: 1 } });
	}
});

Template.forms.events({
	"click .delete-form": function(){
		Meteor.call("removeForm", this._id);
	},
	
	"click #dropdownMenuForm": function(){
		Router.go("/formBuilder");
	}
});