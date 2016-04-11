Template.addCareer.events({
    "submit form": function(event, template) {
        event.preventDefault();

        var name = template.$('#name').val();
        template.$('#name').val("");

        Meteor.call("addCareer", name, function(err) {
            if (err) {
                // why god why!
            } else {
                // all blue
                template.$('.help-block').removeClass('hidden')
            }
        });

    },
    "focus input": function(event, template) {
        template.$('.help-block').addClass('hidden');
    }
});

Template.careerList.onCreated(function() {
    Meteor.subscribe("careers");
})

Template.careerList.helpers({
    "careers": function() {
        return Careers.find();
    }
});
