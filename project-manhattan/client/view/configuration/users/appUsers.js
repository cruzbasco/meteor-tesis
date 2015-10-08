Template.appUsers.helpers({
	users: function(){
		return (Meteor.users.find()).emails;
	}
});


Meteor.subscribe("appUsers");