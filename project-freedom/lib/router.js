// Main
Router.route("/",function () {
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
// Students
Router.route("/students");

//              Director
// Teachers
Router.route("/teachers");

// Teacher
Router.route("/teacher");

//              Administrator
// Careers
Router.route("/administrator/careers", function () {
    this.render("careers");
});


//              Configuration
// User Profile
Router.route("/configuration/userProfile", function () {
    this.render("userProfile");
});

// Editable User Profile
Router.route("/configuration/editableUserProfile", function () {
    this.render("editableUserProfile");
});

// Use Code
Router.route("/configuration/useCode", function () {
    this.render("useCode");
});