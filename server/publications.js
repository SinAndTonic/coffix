//Meteor.publish('orders', function() {
//	return Orders.find();
//});

Meteor.publish('itemNames', function() {
	return ItemNames.find();
});

Meteor.publish( 'orders', function() {
  if ( Roles.userIsInRole( this.userId, 'admin') ) {
    return Orders.find();
  } else {
    this.stop();
    return;
  }
});