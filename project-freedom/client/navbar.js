Template.navbar.helpers({
    'isStudent': function () {
        if (! Meteor.userId())
            return false;
        if (! Meteor.user().profile)
            return false;
        var isStudent = Meteor.user().profile.appUser;
        return isStudent === 'student'? true:false;
    },
    'isTeacher': function () {
        if (! Meteor.userId())
            return false;
        if (! Meteor.user().profile)
            return false;
        var isStudent = Meteor.user().profile.appUser;
        return isStudent === 'teacher'? true:false;
    },
    'isTutor': function () {
        if (! Meteor.userId())
            return false;
        if (! Meteor.user().profile)
            return false;
        var isStudent = Meteor.user().profile.appUser;
        return isStudent === 'tutor'? true:false;
    },
    'isDirector': function () {
        if (! Meteor.userId())
            return false;
        if (! Meteor.user().profile)
            return false;
        var isStudent = Meteor.user().profile.appUser;
        return isStudent === 'director'? true:false;
    }
})

Template.navbar.events({
    "click #signOut": function (events, template) {
        event.preventDefault();
        Meteor.logout();
    }
})