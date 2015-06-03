Router.route('/',function () {
	this.render('principal');
});

// when you navigate to "/one" automatically render the template named "One".
Router.route('/nodes');

// when you navigate to "/two" automatically render the template named "Two".
Router.route('/forms');