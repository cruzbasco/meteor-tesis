/// <reference path="../../typings/tsd.d.ts" />

Template.directorCareers.onCreated(function() {
    this.autorun(function() {
        Meteor.subscribe('takeCareerByDirector');
    });
});

Template.directorCareers.helpers({
    'careers': function() {
        return Careers.find({'directors': Meteor.userId()});
    } 
});
