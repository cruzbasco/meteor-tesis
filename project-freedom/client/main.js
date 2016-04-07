Template.main.onRendered(function () {
   this.$("#tags").tagsInput(); 
});

Template.main.events({
    'click #click-here': function (){
        console.log("pressed button");
        
    }
});