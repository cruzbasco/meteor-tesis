/* global Router */

Router.route("/",function () {
	this.render('principal');
});

Router.route("/rules/:id", function () {
	var structure = Structures.findOne({_id:this.params.id});
 	this.render("rules", {data: structure});
});

Router.route("/nodes");

Router.route("/config");

Router.route("/basics");

Router.route("/forms");

Router.route("/formBuilder");

Router.route("/forms/:id", function () {
	var form = Forms.findOne({_id:this.params.id});
 	this.render("formEditableBuilder", {data: form});
});

Router.route("/preview/:id", function (){
	var form = Forms.findOne({_id:this.params.id});
 	this.render("formPreview", {data: form});
});

Router.route("/appUsers");