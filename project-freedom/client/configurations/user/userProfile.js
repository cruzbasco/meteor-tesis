

Template.userProfile.events({
    'submit form': function(event, template) {
        event.preventDefault();
        var name = template.$('#user-name').val();
        var mail = template.$('#user-mail').val();
        var phone = template.$('#user-phone').val();

        Meteor.call("updateUsers", Meteor.userId(), name, mail, phone)
    }
});