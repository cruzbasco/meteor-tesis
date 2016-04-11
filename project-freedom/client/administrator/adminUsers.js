/// <reference path="../../typings/tsd.d.ts" />

Template.adminUsers.onCreated(function() {
    Meteor.subscribe('adminUsers');
});

Template.adminUsers.onRendered(function() {
    Session.set('searchText', "");
    
});

Template.adminUsers.helpers({
    'users': function() {
        var search = Session.get('searchText');
        
        return Meteor.users.find({
                $or: [
                    {'profile.name': {$regex: search,$options: 'i'}},
                    {'emails.address': {$regex: search,$options: 'i'}}
                ]}, {sort:{ 'emails.address' : 1 }});
    },
    'mail': function(emails) {
        return emails[0].address;
    }
});

Template.adminUsers.events({
    'keyup #user-search': function(event, template) {
        var searchText = template.$('#user-search').val();
        
        Session.set('searchText', searchText);
    }
});