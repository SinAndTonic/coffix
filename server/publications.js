Meteor.publish('orders', function() {
	return Orders.find();
});

Meteor.publish('itemNames', function() {
	return ItemNames.find();
});