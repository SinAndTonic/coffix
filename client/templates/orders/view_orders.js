Template.viewOrders.helpers({
	orders: function(){
		return Orders.find({complete : false},{sort: {collectTime: 1}});

	},
	formattedDate: function(){
    return moment(this.date).format("HH:mm - DD/MM/YY");  // or whatever format you prefer
  }
});

Template.viewOrders.events({
	'click [name=remove]': function(e){
		var theId = this._id;
		console.log(theId);
		Orders.update({'_id': theId},{$set: {complete: true}});
	}
});