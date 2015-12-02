Meteor.methods({
  removeOrder: function (theId) {
    Orders.remove({'_id' : theId});
    console.log('removed Order' + theId);
  },
  updateOrder: function (theId) {
  	Orders.update({'_id': theId},{$set: {complete: true}});
  }
});