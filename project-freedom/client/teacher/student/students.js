var students = [
    {name: "Jorge Jaldin",
    token:"43st6"},
    {name: "Luis Luna",
    token:"gt58j"},
    {name: "",
    token:"1js3h"},
    {name: "Marcela Munch",
    token:"vt4wm"}
];

Session.setDefault("students", students);
Session.setDefault("token", "");
Session.setDefault("selectedItem", "");


Template.studentList.onRendered(function(){
    Meteor.call("generateToken", function(err, response) {
            Session.set("token", response);
        });
})

Template.studentList.helpers({
    students: function (){
        return Session.get("students");;
    },
    hasName: function (name){
      if (name != "")
        return  true;
      else
        return false;
    }
});

Template.studentList.events({
    "click a": function(){
        Session.set("selectedItem", this.token);
    },
    
    "click .btn-success": function (){
        console.log(this.token);        
    }
})

Template.generateToken.events({
    "submit .form-horizontal": function (event, template){
        event.preventDefault();
        
        Meteor.call("generateToken", function(err, response) {
            Session.set("token", response);
        });
        
        students = Session.get("students");
        students.unshift({name:"", token:Session.get("token")});        
        Session.set("students", students);
    }
});

Template.studentModal.helpers({
    selectedItem: function(){
        return Session.get("selectedItem")
    }
});

Template.tokenModal.helpers({
    selectedItem: function(){
        return Session.get("selectedItem")
    }
});

Template.tokenModal.events({
   'click a#delete': function(){
       var deleteConfirmation = confirm('Desea eliminar este token?');
       if (deleteConfirmation) {
           console.log("Token "+this.token+" eliminado");
           $('#tokenModal').modal('hide')
       }
             
   } 
});
