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