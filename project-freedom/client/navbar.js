Template.navbar.events({
    "click #signOut": function(events, template) {
        event.preventDefault();
        Meteor.logout();
        Router.go("/");
    }
})