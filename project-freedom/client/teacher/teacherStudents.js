/// <reference path="../../typings/tsd.d.ts" />

Template.teacherStudents.onCreated(function () {
    this.autorun(function () {
        Meteor.subscribe('takeCoursesByTeacher');
    });
});

Template.teacherStudents.onRendered(function () {
    $('#insideCourse').addClass('btn-primary')
    $('#insideCourse').attr('disabled', 'disabled');

})


Template.teacherStudents.events({
    'click #insideCourse': function (event, template) {
        template.$('.list-student').toggle();
        template.$('#insideCourse').addClass('btn-primary').removeClass('btn-default')
        template.$('#outsideCourse').addClass('btn-default').removeClass('btn-primary')

        template.$('#insideCourse').attr('disabled', 'disabled');
        template.$('#outsideCourse').removeAttr('disabled', 'disabled');


    },
    'click #outsideCourse': function (event, template) {
        template.$('.list-student').toggle();
        template.$('#outsideCourse').addClass('btn-primary').removeClass('btn-default')
        template.$('#insideCourse').addClass('btn-default').removeClass('btn-primary')

        template.$('#outsideCourse').attr('disabled', 'disabled');
        template.$('#insideCourse').removeAttr('disabled', 'disabled');
    }
});