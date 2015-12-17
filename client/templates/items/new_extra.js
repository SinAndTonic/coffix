Template.newExtra.helpers({
    showExtras: function(){
      return ExtraItems.find();
    },
    selected: function(){
      itemId = this._id;
      selectedItem = Session.get('selectedItem');
      if (itemId === selectedItem){
      return "selected";
      }
    },
    selectedItem: function(){
      return ExtraItems.findOne(Session.get('selectedItem'));
    }
});

Template.newExtra.events({
    'click li': function(e){
      var clicked = this._id;
      Session.set('selectedItem', clicked);
    },
    'click .new': function(e){
      ExtraItems.insert({item: "New Item"}, function(err,docsInserted){Session.set('selectedItem',docsInserted);});
    },
    'click .delete': function(e){
      ExtraItems.remove({_id: Session.get('selectedItem')});
    }
});