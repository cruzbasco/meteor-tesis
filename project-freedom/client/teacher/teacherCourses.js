/// <reference path="../../typings/tsd.d.ts" />

Template.teacherCourses.onCreated(function () {
    this.autorun(function () {
        Meteor.subscribe('takeCoursesByTeacher');
        Meteor.subscribe('careers');
    });
});

Template.teacherCourses.helpers({
    'courses': function () {
        return Courses.find({ 'teacher_id': Meteor.userId() },
            { sort: { 'course': 1, 'parallel': 1 } });
    },
    'careerName': function(career_id) {
        var career = Careers.findOne({'_id': career_id});
        return career && career.name;
    }
});
