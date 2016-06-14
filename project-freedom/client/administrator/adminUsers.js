/// <reference path="../../typings/tsd.d.ts" />

Template.adminUsers.onCreated(function() {
    this.autorun(function(){
        Meteor.subscribe('adminUsers');
        Session.set('searchText', "");        
    });
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
    },
    "isAdministrator" : function (roles) {
        for(role of roles) {
            if (role === 'administrator'){
                return true;
            }
        }
        return false;
    }
});

Template.adminUsers.events({
    'keyup #user-search': function(event, template) {
        var searchText = template.$('#user-search').val();
        
        Session.set('searchText', searchText);
    },
    'click #promote-admin' : function(event, template) {
        console.log('prmote')
        Meteor.call('promoteAdmin', this._id);
    },
    'click #remove-admin' : function(event, template) {
        console.log('remove')        
        Meteor.call('removeAdmin', this._id);
    }
});