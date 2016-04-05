var students = [
    {name: "Jorge Jaldin"},
    {name: "Luis Luna"},
    {name: "Marcela Munch"}
];

Template.teacherProfile.helpers({
    name: function () {
        return "Claudia Darin";
    },
    phone: function () {
        return "70712345";
    },
    mail: function () {
        return "claudia@darin.com";
    }
});

Template.studentListTeacher.helpers({
   students: function () {
       return students;
   } 
});