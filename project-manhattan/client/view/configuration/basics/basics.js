Template.basics.helpers({
  "haveItems": function () {
    if (Structures.find().count() > 0) {
      return true;
    } else {
      return false;
    }
  }
});

Template.structureItem.helpers({
  "item": function () {
    return Structures.find({}, { sort: { name: 1 } });
  }
});

Template.structureItem.events({
  "click .delete-button": function () {
    Meteor.call('removeForm', this._id);
  }
});


Template.addItem.events({
  "submit form": function (event) {
    event.preventDefault();
    var itemName = event.target.itemName.value;
    event.target.itemName.value = '';
    if (Structures.find({name: itemName}).count() == 0){
      $(".add-structure-field").attr("placeholder", "");      
      Meteor.call('addStructureItem', itemName);
    }else{
      $(".add-structure-field").attr("placeholder", "Select other name..");
    }
  }
});