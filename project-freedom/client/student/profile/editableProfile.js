Template.editableProfile.onRendered(function () {
    this.$("#tags").tagsInput();
});

Template.editableProfile.helpers({
   title: function(){
       return "Herramienta basada en modelo NoSQL ..";
   },
   options: function(){
       return "Desarrollo de plataforma web NoSQL para distintas ...";
   },
   tutor: function (){
       return "Martin Cardenas C.";
   },
   relator: function(){
       return "Apolonia Taun F.";
   },
   caseStudy: function(){
       return "Explorer Society of Port Hope";
   },
   tags: function(){
       return "nosql,modelo,web,plataforma"
   }
});

Template.editableProfile.events({
    "submit .form-horizontal": function (event) {
        event.preventDefault();
        Router.go("/profile");
    }
});