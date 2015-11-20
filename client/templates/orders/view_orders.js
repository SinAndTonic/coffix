Template.viewOrders.helpers({
	orders: function(){
		return Orders.find();
	}
});

Template.viewOrders.events({
	'click [name=remove]': function(e){
		var theId = this._id;
		console.log(theId);
		Meteor.call('removeOrder', theId);
	}
});