Template.placeOrder.events({
	'submit form': function(e){
		e.preventDefault();

		var theExtras = {
			sugar: $(e.target).find('[name=sugar]').is(":checked"),
			almond: $(e.target).find('[name=almond]').is(":checked")
		};

		var order = {
			type: $(e.target).find('[name=type]').val(),
			milk: $(e.target).find('[name=milk]').val(),
			extras: theExtras
		};

		//var totalOrder = {
		//	mainOrder: order,
		//	extras: extras
		//};
		//console.log(post);
		//console.log(extras);
		order._id = Orders.insert(order);
		//Router.go('postPage', post);
	}
});