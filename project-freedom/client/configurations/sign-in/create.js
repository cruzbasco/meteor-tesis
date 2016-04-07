Template.create.events({
    'click .go-to-signup': function(event) {
        event.preventDefault();
        $(".create-to-signup").toggle();
    },
    'submit form': function(event, template) {
        event.preventDefault();
        var email = template.$('#create-mail').val();
        var password = template.$('#create-password').val();
        Accounts.createUser({
            email: email,
            password: password
        }, function(err) {
            if (err) {

            } else {
                Meteor.call("updateUsers", Meteor.userId(), "", email, "")
            }
        })

        $('#login-modal').modal('hide');
    }
});