// Main
Router.route("/", function() {
    this.render('main');
});

//              Student
// Profile
Router.route("/profile");
Router.route("/editableProfile");

// Document
Router.route("/document");

// Code
Router.route("/code");

//              Teacher
// Courses
Router.route("/teacher/courses", function() {
    this.render("teacherCourses");
})

// Students
Router.route("/teacher/students/:id", function() {
    var course = Courses.findOne({_id: this.params.id})
    this.render("teacherStudents", {data: course});
});

//              Director
// Careers
Router.route("/director/careers", function() {
    this.render("directorCareers");
});

// Career - courses
Router.route("/director/career/:id", function() {
    var career = Careers.findOne({ _id: this.params.id });
    this.render("directorCourses", { data: career });
});

// Course
Router.route("/director/course/:id", function() {
    var course = Courses.findOne({ _id: this.params.id});
    this.render("directorCourse", { data: course});
});


// Teachers
Router.route("/teachers");

// Teacher
Router.route("/teacher");

//              Administrator
// Careers
Router.route("/administrator/careers", function() {
    this.render("adminCareers");
});

// Career
Router.route("/administrator/career/:id", function() {
    var career = Careers.findOne({ _id: this.params.id });
    this.render("adminCareer", { data: career });
});


Router.route("/administrator/users", function() {
    this.render("adminUsers");
});

//              Configuration
// User Profile
Router.route("/configuration/userProfile", function() {
    this.render("userProfile");
});

// Editable User Profile
Router.route("/configuration/editableUserProfile", function() {
    this.render("editableUserProfile");
});

// Use Code
Router.route("/configuration/useCode", function() {
    this.render("useCode");
});