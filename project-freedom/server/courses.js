/// <reference path="../typings/tsd.d.ts" />

Meteor.methods({
    // director methods
    "addCourse": function(career_id, course, parallel) {
        Courses.insert(
            { 'career_id': career_id, "course": course, "parallel": parallel, "isOpen": true }
        );
    },
    "addTeacherToCourse": function(course_id , teacher_id, old_teacher_id) {
        Courses.update(
            { "_id": course_id},
            { $set: { "teacher_id": teacher_id } }
        );
        Roles.addUsersToRoles(teacher_id, 'teacher');
        
        var coursesSize = Courses.find({'teacher_id': old_teacher_id}).count();
        
        console.log(old_teacher_id +"  "+ coursesSize);
        
        if (coursesSize < 2) {
            Roles.removeUsersFromRoles(old_teacher_id, 'teacher')
        }
    }
});

Meteor.publish("takeCoursesByCareer", function(career_id)  {
    return Courses.find({'career_id': career_id});
});

Meteor.publish("takeCoursesByTeacher", function() {
   return Courses.find({'teacher_id': this.userId}); 
});

