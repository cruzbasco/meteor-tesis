/// <reference path="../../typings/tsd.d.ts" />


Template.directorCourses.onCreated(function() {
    Meteor.subscribe('careers');
});

Template.directorCourses.onRendered(function() {
    var career_id = $('#careerId').val();
    Session.set('career_id', career_id);
    Meteor.subscribe('takeCoursesByCareer', career_id);
});

Template.directorCourses.helpers({
    'courses': function() {
        var courses = Courses.find({ 'career_id': Session.get('career_id') }, {sort: {'course':1, 'parallel':1}});
        return courses;
    }
});

Template.directorCourses.events({
    'submit .form-horizontal': function(event, template) {
        event.preventDefault();

        var target = event.target;
        var course = target.courseName.value;
        var parallel = target.courseParallel.value;

        Meteor.call('addCourse', Session.get('career_id'), course, parallel);
    }
}); 