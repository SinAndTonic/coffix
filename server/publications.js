Meteor.publish('posts', function() {
  return Posts.find();
});

Meteor.publish('orders', function() {
	return Orders.find();
});