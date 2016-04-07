function verifyStatus() {
    if (!Meteor.userId())
        return false;
    return true;
}

function typeUser(searchType) {
    var appUser = Meteor.user().profile.appUser;
    
    for (type of appUser) {        
        if (type == searchType)
            return true;
    }
    return false;
}

Template.navbar.helpers({
    'isStudent': function() {
        if (!verifyStatus())
            return false;
        return typeUser('student');
    },
    'isTeacher': function() {
        if (!verifyStatus())
            return false;
        return typeUser('teacher');
    },
    'isTutor': function() {
        if (!verifyStatus())
            return false;
        return typeUser('tutor') && typeUser('relator');
    },
    'isDirector': function() {
        if (!verifyStatus())
            return false;
        return typeUser('director');
    },
    'isAdministrator': function() {
        if (!verifyStatus())
            return false;
        return typeUser('administrator');
    }
})

Template.navbar.events({
    "click #signOut": function(events, template) {
        event.preventDefault();
        Meteor.logout();
        Router.go("/");
    }
})