/// <reference path="../../../../lib/typings/meteor/meteor.d.ts"/>

var button_up = '<td><a href="#" class="btn btn-info move-up"><span class="glyphicon glyphicon-arrow-up"></span></a></td>'
var button_down = '<td><a href="#" class="btn btn-info move-down"><span class="glyphicon glyphicon-arrow-down"></span></a></td>'
var button_edit = '<td><a href="#" class="btn btn-success disabled"><span class="glyphicon glyphicon-edit"></span></a></td>'
var button_delete = '<td><a href="#" class="btn btn-danger delete-item"><span class="glyphicon glyphicon-remove"></span></a></td>'
var public_span = '<span class="input-group-addon public-info"><i class="fa fa-unlock-alt fa-lg"></i></span>';
var private_span = '<span class="input-group-addon private-info"><i class="fa fa-lock fa-lg"></i></span>';

Session.set('names', []);

Template.formBuilder.helpers({
	
});

Template.formBuilder.events({
	"shown.bs.modal #float_modal": function () {
		$('#inputTitle').focus();
	},

	"click #new_field": function () {
		$("center h2").append($("#new_field").text());
	},

	"click #save": function () {
		var inputTitle = $("#inputTitle").val() 
		if (inputTitle != "" && isAlreadyCreated(inputTitle)) {
			add_custom_attribute();
			$("#float_modal").modal('hide');
			clean_modal();
			var names = Session.get('names');
			
			names.push(inputTitle)
			Session.set('names', names)
		}
	},

	"keypress #inputTitle": function (event) {
		
		var inputTitle = $("#inputTitle").val() 
		
		if (event.which == 13 && inputTitle != "" && isAlreadyCreated(inputTitle)) {
			add_custom_attribute();
			$("#float_modal").modal('hide');
			clean_modal();
			
			var names = Session.get('names');
			
			names.push(inputTitle)
			Session.set('names', names)
		}
	},

	"click #close_modal": function () {
		clean_modal();
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

		var rows = template.$(".main-form").find('.row-item-form'); //<-- Should return all input elements in that specific form.
		
		var fields = [];

		var i = 0;
		for (; i < rows.length;) {

			var ps = template.$(rows[i]).find("td p")

			var fTitle = template.$(ps[0]).text();
			var fType = template.$(ps[1]).text();
			var fState = template.$(ps[2]).text();

			fields.push({ title: fTitle, type: fType, state: fState });

			i++;
		}

		Meteor.call("addForm", formName, fields);

		Router.go("/forms");
	}

});

function add_custom_attribute() {
	var inputTitle = $("#inputTitle").val();
	var inputType = $("#inputType option:selected").val();
	var inputState = $("#inputState option:selected").val();

	var fieldTitle = "<td><p>" + inputTitle + "</p></td>";
	var fieldType = "<td><p>" + inputType + "</p></td>";


	$("tbody.body").append("<tr class='row-item-form'>" + fieldTitle + fieldType + fieldStates(inputState) + button_up + button_down + button_edit + button_delete + "</tr>");
	

	// var fieldTitle = "<input type='" + inputType + "' name='" + inputTitle + "' class='form-control input-title' placeholder='" + inputTitle + "'>";

	// var fullField = "<td><div class='input-group form-item'>" + fieldState(inputState) + fieldTitle + "</div></td>"

	// $("tbody.body").append("<tr>" + fullField + button_up + button_down + button_edit + button_delete + "</tr>");
	
	// var field_label = "<label class='control-label col-sm-2 form_field' for='" + inputTitle + "'>" + inputTitle + "</label>"
	// var field_type = "<div class='col-md-8'><input id='" + inputTitle + "' name='" + inputTitle + "' type='" + inputType + "' class='form-control input-md'></div>"
	// var field_hidden = "<input type='hidden' name='" + inputTitle + "_type' value='" + inputType + "'>"
	// var full_field = "<td><div class='form-group'>" + field_label + field_type + "</div>" + field_hidden + "</td>"
	// $("tbody.body").append("<tr>" + full_field + button_up + button_down + button_edit + button_delete + "</tr>");
}

function clean_modal() {
	$("center h2").text('');
	$("#inputTitle").val('');
}

function fieldStates(state) {
	if (state == "public")
		return "<td><p><i class='fa fa-unlock-alt fa-lg public-info'></i>" + state + "</p></td>"

	else
		return "<td><p><i class='fa fa-lock fa-lg private-info'></i>" + state + "</p></td>"
}

function fieldState(state) {
	if (state == "public")
		return public_span;
	else
		return private_span;
}

function isAlreadyCreated(name) {
	var names = Session.get('names');

	var result = $.inArray(name, names);

	if (result < 0)
		return true;
	else
		return false;
}