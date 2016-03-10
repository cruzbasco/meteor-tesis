Meteor.methods({
    "generateToken": function() {
        var token = "";
        var possible = "abcdefghijkmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 5; i++)
            token += possible.charAt(Math.floor(Math.random() * possible.length));

        return token;
    }
});