Template.viewOrders.helpers({
	orders: function(){
		return Orders.find();
	},
	userLookup: function(){
		
	}
});

Template.viewOrders.events({
	'click [name=remove]': function(e){
		var theId = this._id;
		Meteor.call('removeOrder', theId);
	}
});