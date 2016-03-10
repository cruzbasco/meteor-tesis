Template.profile.onRendered(function () {
    this.$('#tags').tagsInput({
        'interactive': false
    });
});


Template.profile.helpers({
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
       return "nosql,modelo,web,plataforma,grafos,meteor,javascript"
   } 
});