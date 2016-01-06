Template.myOrders.helpers({
	myOrder: function(){

		return Orders.find({userId: Meteor.userId(),complete:false, cancelled: false},{sort: {collectTime: 1}});
	},
	formattedDate: function(){
    return moment(this.collectTime).format("HH:mm - DD/MM/YY");
	},
	orderStatus: function(){
		if (this.complete)
			return '<span class="glyphicon glyphicon-ok-sign" style="color:green" aria-hidden="true"></span>';
		else
			return '<span class="glyphicon glyphicon-option-horizontal" style="color:orange" aria-hidden="true"></span>';
	},
	myCompletedOrder: function(){
		return Orders.find({userId: Meteor.userId(), complete:true, cancelled: false},{sort: {collectionTime: 1}});
	},
	myCancelledOrder: function(){
		return Orders.find({userId: Meteor.userId(), cancelled:true},{sort: {collectionTime: 1}});
	}
});

Template.myOrders.events({
	'click [name=cancel]': function(e){
		var theId = this._id;
		if (window.confirm("Do you really want to cancel this order"))
		Orders.update({'_id': theId},{$set: {cancelled: true}});
	}
});