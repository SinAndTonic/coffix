Meteor.publish('itemNames', function() {
	return ItemNames.find();
});

Meteor.publish('extraItems', function() {
	return ExtraItems.find();
});


Meteor.publish( 'orders', function() {
  if ( Roles.userIsInRole( this.userId, 'admin') ) {
    return Orders.find();
  } else {
    this.stop();
    return;
  }
});

Meteor.publish('openTimes', function(){
	return OpenTimes.find();
});