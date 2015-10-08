Template.formPreview.helpers ({
	spanState: function () {
		return fieldState(this.state);
	}
});

function fieldState(state) {
	if (state == "public")
		return public_span;
	else
		return private_span;
}