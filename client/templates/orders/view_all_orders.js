Template.viewAllOrders.helpers({
	orders: function(){
		return Orders.find({},{sort: {createdAt: -1}});
	},
	userLookup: function(){
		
	}
});

Template.viewAllOrders.events({
	'click [name=remove]': function(e){
		var theId = this._id;
		Meteor.call('removeOrder', theId);
	}
});