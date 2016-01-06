Template.viewOrders.helpers({
	orders: function(){
		return Orders.find({complete : false},{sort: {collectTime: 1}});

	},
	formattedDate: function(){
    return moment(this.collectTime).format("HH:mm - DD/MM/YY");
  },
  isCancelled: function(){
  		if(this.cancelled)
  			return "text-decoration: line-through; background-color:red;";
  }
});

Template.viewOrders.events({
	'click [name=remove]': function(e){
		var theId = this._id;
		console.log(theId);
		Orders.update({'_id': theId},{$set: {complete: true}});
	}
});