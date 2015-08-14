Meteor.methods({
    'addStructureItem': function(itemName){
      Structures.insert({
        name: itemName
      });
	},
	'removeStructureItem': function(itemId){
		Structures.remove(itemId);
	}
});