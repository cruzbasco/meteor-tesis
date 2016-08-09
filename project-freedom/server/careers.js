/// <reference path="../typings/tsd.d.ts" />

Meteor.methods({
    // administrator methods
    "addCareer": function(name) {
        Careers.insert({ "name": name });
    },
    "addDirectorToCareer": function(career_id, user_id) {
        Careers.update(
            { "_id": career_id },
            { $addToSet: { "directors": user_id } }
        );

        Roles.addUsersToRoles(user_id, 'director');
    },
    "removeUserFromCareer": function(career_id, user_id) {
        Careers.update(
            { "_id": career_id },
            { $pull: { "directors": user_id } }
        );

        Roles.removeUsersFromRoles(user_id, 'director');
    },
    "changeCareerName": function(career_id, name) {
        Careers.update(
            { "_id": career_id },
            { $set: { "name": name } }
        );
    }
});

Meteor.publish("careers", function() {
    return Careers.find({});
});

Meteor.publish("adminUsers", function() {
    return Meteor.users.find({});
});

Meteor.publish("takeCareerByDirector", function() {
    return Careers.find({ "directors": this.userId });
});
