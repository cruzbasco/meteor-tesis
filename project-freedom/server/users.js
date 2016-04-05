Meteor.methods({
    updateUsers: function(user_id) {
        var profileUser = { name: "cruz bazco", mail: "cruz@basco.com", phone: "71799098", appUser: "student" };

        Meteor.users.update({ _id: user_id }, { $set: {profile: profileUser }})

        var currentUser = Meteor.users.findOne({ _id: user_id });

        console.log(currentUser);
    }
});
