Template.main.onRendered(function () {
   this.$("#tags").tagsInput(); 
});

Template.main.events({
    'click #click-here': function (){
        Meteor.call("updateUsers", Meteor.userId());
        console.log("pressed button");
        
    }
});