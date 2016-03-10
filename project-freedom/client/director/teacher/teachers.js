var teachers = [
    {name: "Jorge Jaldin"},
    {name: "Luis Luna"},
    {name: "Marcela Munch"}
];

Session.setDefault("teachers", teachers);

Template.teachers.helpers({
   teachers: function () {
       return Session.get("teachers");
   } 
});