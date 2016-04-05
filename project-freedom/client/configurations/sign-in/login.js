Template.login.onRendered(function (){
   $('#login-mail').focus();
});

Template.login.events({
    'click #go-to-create': function (event) {
        event.preventDefault();
        $(".create-to-signup").toggle();
    },
   'click #go-to-reset': function (event) {
       event.preventDefault();
       $(".reset-to-signup").toggle();
   },
   'submit form': function(event, template){
        event.preventDefault();
        var email = template.$('#login-mail').val();
        var password = template.$('#login-password').val();
        Meteor.loginWithPassword(email, password, function(err){
            if (err){
                // The user might not have been found, or their passwword
                // could be incorrect. Inform the user that their
                // login attempt has failed. 
            }else{
                // The user has been logged in.
            }
        });
        $('#login-modal').modal('hide');
    }  
});