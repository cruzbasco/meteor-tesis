Template.addCareer.events({
    "submit form": function (event, template) {
        event.preventDefault();
        
        var name = template.$('$name').val();
        
        Meteor.call("addCareer", name);
        
    }         
});

       
Template.careerList.onCreated( function () {
    Meteor.subscribe("careers");
})

Template.careerList.helpers({
  "careers": function () {
      return  Careers.find();
  }
});