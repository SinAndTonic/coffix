Template.placeOrder.helpers({

	mainList: function() {
		return ItemNames.find().map(function (c) {
			return {label: c.item, value: c.item};
		});
	},
	extraList: function() {
		return ExtraItems.find().map(function (c) {
			return {label : c.item, value: c.item};
		});
	},
	serverTime: function(){
		// return Meteor.call('getServerTime', function(err, data){
		// 		console.log(data);
		// 		return data;
		// });
return "12:30";
	}

});