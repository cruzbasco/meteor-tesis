Template.editItem.events({
  "submit form": function (event) {
    event.preventDefault();
    var itemName = event.target.itemName.value;
    Meteor.call("updateStructureItem", this._id, itemName);
  }
});

Template.rules.helpers({
  structures: function () {
    return Structures.findOne({ _id: this._id });
  },
  structureId: function(){
    Session.set("structureId", this._id);
    return Session.get("structureId")
  }
});

Template.addRule.events({
  "submit .add-rule": function () {
    event.preventDefault();
    var selectedRule = event.target.selectedRule.value;
    var relationType = event.target.relationType.value;
    Meteor.call("addRuleToStructureItem", this._id, selectedRule, relationType);
  }
});

Template.addRule.helpers({
  structures: function () {
    return Structures.find({}, { sort: { name: 1 } });
  }
});

Template.rule.helpers({
  ruleName: function (ruleId) {
    return Structures.findOne({_id: ruleId}).name;
  }
});

Template.rule.events({
  "click .delete-button": function(){
     var structureId = Session.get("structureId");
     Meteor.call("removeRuleFromStructureItem",structureId, this.ruleId, this.relationType);
  }
});