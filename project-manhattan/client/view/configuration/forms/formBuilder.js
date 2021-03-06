/// <reference path="../../../../lib/typings/meteor/meteor.d.ts"/>

Session.set('names', []);

Template.formBuilder.helpers({
	structures: function () {
		return Structures.find({}, { sort: { name: 1 } });
	}
});

Template.formBuilder.events({
	"shown.bs.modal #insert_float_modal": function () {
		$('#inputTitle').focus();
	},

	"click #save": function (event, template) {

		var inputTitle = $("#inputTitle").val();

		if (inputTitle != "" && isAlreadyCreated(inputTitle)) {
			if (isAlreadyCreated(inputTitle)) {
				add_custom_attribute();

				$("#insert_float_modal").modal('hide');
				clean_modal(template);

				var names = Session.get('names');
				names.push(inputTitle);
				Session.set('names', names);
			}
			else {
				clean_modal(template);

			}
		}
	},

	"keypress #inputTitle": function (event, template) {

		var inputTitle = $("#inputTitle").val()

		if (event.which == 13 && inputTitle != "") {
			if (isAlreadyCreated(inputTitle)) {
				add_custom_attribute();

				$("#insert_float_modal").modal('hide');
				clean_modal(template);

				var names = Session.get('names');
				names.push(inputTitle);
				Session.set('names', names);
			}
			else {
				clean_modal(template);

			}
		}
	},

	"click #close_modal": function (event, template) {
		clean_modal(template);
	},

	"click .move-up": function (event) {
		var row = $(event.target).closest('tr');
		row.prev().before(row);
	},

	"click .move-down": function (event) {
		var row = $(event.target).closest('tr');
		row.next().after(row);
	},

	"click .delete-item": function (event) {
		var row = event.currentTarget.parentNode.parentNode.rowIndex;
		document.getElementById("formTable").deleteRow(row);
	},

	"submit .main-form": function (event, template) {
		event.preventDefault();

		var formName = template.$("#form_name").val();
		var formType = template.$("#form-type").val();

		var rows = template.$(".main-form").find(".row-item-form");
		
		
		var fields = [];

		for (var i = 0; i < rows.length; i++) {

			var ps = $(rows[i]).find("td p");

			var fTitle = $(ps[0]).text();
			var fType = $(ps[1]).text();
			var fState = $(ps[2]).text();

			fields.push({ title: fTitle, type: fType, state: fState });
		}

				console.log(fields);
		
		Meteor.call("addForm", formName,formType, fields);

		Router.go("/forms");
	}

});

function add_custom_attribute() {
	var inputTitle = $("#inputTitle").val();
	var inputType = $("#inputType option:selected").val();
	var inputState = $("#inputState option:selected").val();

	var fieldTitle = "<td><p>" + inputTitle + "</p></td>";
	var fieldType = "<td><p>" + inputType + "</p></td>";

	$("tbody.body").append("<tr id='" + inputTitle + "' class='row-item-form'>" + fieldTitle + fieldType + fieldStates(inputState) + button_up + button_down + button_delete + "</tr>");
}

function clean_modal(template) {
	template.$("#inputTitle").val('');
}

function fieldStates(state) {
	if (state == "public")
		return "<td><p><i class='fa fa-unlock-alt fa-lg public-info'></i>" + state + "</p></td>"

	else
		return "<td><p><i class='fa fa-lock fa-lg private-info'></i>" + state + "</p></td>"
}


function isAlreadyCreated(name) {
	var names = Session.get('names');

	var result = $.inArray(name, names);

	if (result < 0)
		return true;
	else
		return false;
}