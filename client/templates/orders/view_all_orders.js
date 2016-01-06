SimpleSchema.debug = true;

Template.viewAllOrders.helpers({
	orders: function(){
		return Orders.find({},{sort: {createdAt: -1}});
	},
	isCancelled: function(){
  		if(this.cancelled)
  			return "text-decoration: line-through; background-color:red;";
  }
});

Template.viewAllOrders.events({
	'click [name=remove]': function(e){
		var theId = this._id;
		var theUserName = Orders.findOne({_id: this._id});
		console.log(theUserName);
		if (window.confirm("Do you really want to permanently remove the order for: \n" + theUserName.userName))
		Orders.remove({'_id' : theId});
	}
});