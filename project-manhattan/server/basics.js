Meteor.methods({
	// -------------- structures
    "addStructureItem": function (itemName) {
		Structures.insert({ name: itemName });
	},
	"removeStructureItem": function (itemId) {
		Structures.update({}, { $pull: { rules: { ruleId: itemId } } }, {multi: true} );
		Structures.remove(itemId);
			
	},
	"updateStructureItem": function (itemId, itemName) {
		Structures.update({ _id: itemId },
			{ $set: { name: itemName } } );
	},
	// -------------- rules
	"addRuleToStructureItem": function(itemId, ruleId, relationType) {
		if (Structures.find({_id: itemId, "rules.ruleId": ruleId}).count() > 0){
			if (Structures.find( { _id: itemId, rules: { ruleId: ruleId, relationType: relationType } } ).count() == 0) {
				Structures.update(
					{ _id: itemId, rules: { $elemMatch: { ruleId: ruleId } } },
					{ $set: { "rules.$.relationType": "both"  } } );
			}
		}else{
			Structures.update(
				{ _id: itemId },
				{ $push: { rules: { ruleId: ruleId, relationType: relationType } } } );
		}
	},
	"removeRuleFromStructureItem": function(itemId,ruleId,relationType) {
		Structures.update(
			{ _id: itemId },
			{ $pull: { rules: { ruleId: ruleId } } } );
	},
	
	// -------------- forms
	"addForm": function(formName, formType, fields){
		Forms.insert({name: formName, type: formType, fields: fields});
	},
	
	"removeForm": function(id){
		Forms.remove(id);
	}
	
	
});