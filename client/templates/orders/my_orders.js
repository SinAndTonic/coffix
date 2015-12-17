Template.myOrders.helpers({
	myOrder: function(){

		return Orders.find({userId: Meteor.userId()});
	}
});