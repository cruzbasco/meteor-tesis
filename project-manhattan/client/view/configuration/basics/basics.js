Template.structureItem.helpers ({
    'item': function (){
      return Structures.find({}, {sort: {name:1}});
    }
});

Template.structureItem.events({
  'click .delete-button': function (){
    Meteor.call('removeStructureItem', this._id);
  }
});


Template.addItem.events({
    'submit form': function(event){
      event.preventDefault();
      var itemName = event.target.itemName.value;

      event.target.itemName.value= '';
      
      Meteor.call('addStructureItem', itemName);
      
    }
  });