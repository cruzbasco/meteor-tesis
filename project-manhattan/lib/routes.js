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

