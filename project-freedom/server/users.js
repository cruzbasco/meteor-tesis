Meteor.methods({
    updateUsers: function(user_id, name, mail, phone) {
        var profileUser = { name: name, mail: mail, phone: phone, appUser: ["administrator"]     };

        Meteor.users.update({ _id: user_id }, { $set: {profile: profileUser }})

        var currentUser = Meteor.users.findOne({ _id: user_id });

        console.log(currentUser);
    }
});