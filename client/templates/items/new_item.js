Template.newItem.helpers({
    showItems: function(){
      return ItemNames.find();
    },
    selected: function(){
      itemId = this._id;
      selectedItem = Session.get('selectedItem');
      if (itemId === selectedItem){
      return "selected";
      }
    },
    selectedItem: function(){
      return ItemNames.findOne(Session.get('selectedItem'));
    }
});

Template.newItem.events({
    'click li': function(e){
      var clicked = this._id;
      Session.set('selectedItem', clicked);
    },
    'click .new': function(e){
      ItemNames.insert({item: "New Item"}, function(err,docsInserted){Session.set('selectedItem',docsInserted);});
    },
    'click .delete': function(e){
      ItemNames.remove({_id: Session.get('selectedItem')});
    }
});