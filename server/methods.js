Meteor.methods({
  removeOrder: function (theId) {
    Orders.remove({'_id' : theId});
    console.log('removed Order' + theId);
  },
  updateOrder: function (theId) {
  	Orders.update({'_id': theId},{$set: {complete: true}});
  },
  newOrder: function(theOrder){
  	Orders.insert(theOrder);
  },
  getServerTime: function () {
            var date = new Date();

            console.log(moment(date).format('hh:mm'));
            return moment(date).format('HH:mm');
        }

});