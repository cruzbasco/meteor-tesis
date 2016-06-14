/// <reference path="../../typings/tsd.d.ts" />

Template.directorCourse.onCreated(function() {
    this.autorun(function() {
        Meteor.subscribe('takeUsersByDirector');
        Meteor.subscribe('takeCareerByDirector');
        Session.set('searchTeacher', "");        
    });
});

Template.directorCourse.onRendered(function() {
    var course_id = $('#courseId').val();
    Session.set('course_id', course_id);
    
    var career_id = $('#careerId').val();
    Session.set('career_id', career_id);
    
    var teacher_id = $('#teacherId').val();
    Session.set('teacher_id', teacher_id);
});

Template.directorCourse.helpers({
    'teacherName': function() {
        var teacher = Meteor.users.findOne({ _id: Session.get('teacher_id') });
        return teacher.profile.name;
    },
    'users': function() {
        var search = Session.get('searchTeacher');
        
        return Meteor.users.find({
                $or: [
                    {'profile.name': {$regex: search,$options: 'i'}},
                    {'emails.address': {$regex: search,$options: 'i'}}
                ]}, {sort:{ 'emails.address' : 1 }});
    },
    'mail': function(emails) {
        return emails[0].address;
    },
    'career_id': function() {
        return Session.get('career_id');
    },
    'career_name': function() {
        var career = Careers.findOne({_id: Session.get('career_id')});
        return career.name;        
    }
});

Template.directorCourse.events({
    'keyup #searchTeacher': function(event, template) {
        var searchText = template.$('#searchTeacher').val();
        
        Session.set('searchTeacher', searchText);
    },
    'click #edit': function(event, template) {
        template.$(".search-teacher").toggle();
        Session.set('course', this.course);
        Session.set('parallel', this.parallel);        
    },
    'click #cancel': function(event, template) {
        Session.set('searchTeacher', "");         
        template.$('#searchTeacher').val("");        
        template.$(".search-teacher").toggle();
    },
    'click .teacher-selected': function(event, template) {
        var course_id =  Session.get('course_id');
        var old_teacher_id = Session.get('teacher_id');
        
        Session.set('searchTeacher', ""); 
        template.$('#searchTeacher').val("");
               
        template.$(".search-teacher").toggle();
        Meteor.call('addTeacherToCourse', course_id, this._id, old_teacher_id);
        
        Session.set('teacher_id', this._id);
    }
});

