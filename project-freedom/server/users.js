/// <reference path="../typings/tsd.d.ts" />

Meteor.methods({
    updateUsers: function(user_id, name, mail, phone) {
        var profileUser = { name: name, mail: mail, phone: phone };

        Meteor.users.update({ _id: user_id }, { $set: { profile: profileUser } })
        Roles.addUsersToRoles(user_id, 'administrator')
    }
});

