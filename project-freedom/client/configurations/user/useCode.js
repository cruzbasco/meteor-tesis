Template.useCode.events({
    "submit form": function (event, template) {
        event.preventDefault();
        var code = template.$("#entry-code").val();
        
        console.log(code);
        
        Meteor.call("useCode", code, Meteor.userId());
        
        Router.go("/");
        
    }
})