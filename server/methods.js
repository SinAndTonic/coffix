Meteor.methods({
  removeOrder: function (theId) {
    Orders.remove({'_id' : theId});
    console.log('removed Order' + theId);
  }
});