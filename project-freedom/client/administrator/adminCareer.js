/// <reference path="../../typings/tsd.d.ts" />

Template.adminCareer.onCreated(function() {
    Meteor.subscribe('adminUsers');    
});

Template.adminCareer.onRendered(function(){
    var career_id = $('#careerId').val();
    Session.set('career_id', career_id);
});


Template.adminCareer.helpers({
    'userName': function(user_id){
        var user = Meteor.users.findOne({_id: user_id})
        return user.emails[0].address;
    }
})

Template.adminCareer.events({
    'click #edit': function(event, template) {
        event.preventDefault();
        template.$("#name").prop('disabled', false);
        template.$(".admin-career-name").toggle();

    },
    'click #save': function(event, template) {
        event.preventDefault();
        var name = template.$('#name').val();

        Meteor.call("changeCareerName", this._id, name);

        template.$("#name").prop('disabled', true);
        template.$(".admin-career-name").toggle();
    },
    'click #addDirector': function(event, template) {
        event.preventDefault();
        var mail = template.$('#user-mail').val();

        template.$('#user-mail').val("")

        var user = Meteor.users.findOne({ 'emails.address': mail });

        if (user) {
            Meteor.call("addDirectorToCareer",this._id, user._id)

            template.$(".help-block").parent().parent().addClass("has-success");
            template.$(".help-block").text("Usuario agregado.");

        } else {
            template.$(".help-block").parent().parent().addClass("has-error");
            template.$(".help-block").text("No existe usuario registrado con ese correo.");

        }

    },
    'focus #user-mail': function(event, template) {
        template.$(".help-block").parent().parent().removeClass("has-success has-error");
        template.$(".help-block").text("");
    },
    "click .btn-danger": function(event, template) {
        Meteor.call('removeUserFromCareer', Session.get('career_id'), this.toString());
    }
});

