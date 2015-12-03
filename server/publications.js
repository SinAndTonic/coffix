//Meteor.publish('orders', function() {
//	return Orders.find();
//});

Meteor.publish('itemNames', function() {
	return ItemNames.find();
});

// Meteor.publish('orders', function() {
// 	return Orders.find();
// });

// Meteor.publish('orders', function (group) {
//   if (Roles.userIsInRole(this.userId,'admin', group)) {

//     return Meteor.Orders.find({group: group});

//   } else {

//     // user not authorized. do not publish secrets
//     this.stop();
//     return;

//   }
// });


Meteor.publish( 'orders', function() {
  if ( Roles.userIsInRole( this.userId, 'admin') ) {
    return Orders.find();
  } else {
    this.stop();
    return;
  }
});

Meteor.publish( 'books', function(){
	if ( Roles.userIsInRole( this.userId, 'admin') ) {
    return Books.find();
  } else {
    this.stop();
    return;
  }
});