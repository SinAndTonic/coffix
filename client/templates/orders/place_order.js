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
		
		return Tracker.nonreactive(function() {
           
			return moment(Session.get('time')).add(10,'m').format('HH:mm');
		});
	}

});