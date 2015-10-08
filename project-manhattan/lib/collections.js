/* global Nodes */
/* global Forms */
/* global Structures */


Structures = new Mongo.Collection('structure');

Forms = new Mongo.Collection("forms");

Nodes = new Mongo.Collection("nodes");


function CreateRoot () {
	if (Nodes.find({_id: "root"}).lenght() == 0)
		Nodes.insert({_id: "root",fields:[ {key: "Name", value: "Root"}], type: "root", isDeletable: false});
}