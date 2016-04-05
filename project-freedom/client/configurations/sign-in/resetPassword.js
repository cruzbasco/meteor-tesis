Template.resetPassword.events({
    'click .go-to-signup': function(event) {
        event.preventDefault();
        $(".reset-to-signup").toggle();
    },
    'submit form': function(event, template) {
        event.preventDefault();
        var email = template.$('#reset-mail').val();
        
        Accounts.forgotPassword({email:email}, function(err){
            if (err){
                
            } else {
                
            }
        })
    }
});