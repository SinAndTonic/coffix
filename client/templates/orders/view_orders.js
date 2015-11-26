Template.viewOrders.helpers({
	orders: function(){
		return Orders.find({complete : false},{sort: {createdAt: -1}});
	},
	userLookup: function(){
		
	}
});

Template.viewOrders.events({
	'click [name=remove]': function(e){
		var theId = this._id;
		Meteor.call('updateOrder', theId);
	}
});