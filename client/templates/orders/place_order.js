Template.placeOrder.helpers({

	extraList: function() {
		return ItemNames.find().map(function (c) {
			return {label: c.item, value: c.item};
		});
	}
});