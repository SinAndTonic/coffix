Template.viewAllOrders.helpers({
	orders: function(){
		return Orders.find({},{sort: {createdAt: -1}});
	},
	userLookup: function(){
		
	}
});

Template.viewAllOrders.events({
	'click [name=remove]': function(e){
		var theId = this._id;
		var theUserName = Orders.find({_id: this._id}).fetch();
		console.log(theUserName);
		if (window.confirm("Do you really want to permanently remove: \n" + theUserName.userName))
		Orders.remove({'_id' : theId});
	}
});