Template.placeOrder.events({
	'submit form': function(e){
		e.preventDefault();

		var userId = Meteor.userId();

		var userName = Meteor.user().username;
        
     var theExtras = [];

     $('#extraArea :checked').each(function() {
       theExtras.push($(this).val());
     });
     
     	console.log(theExtras);

		var order = {
			userId: userId,
			userName: userName,
			createdAt: new Date(),
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
		console.log(order);
		order._id = Orders.insert(order);
		//Router.go('postPage', post);
		//Meteor.call('newOrder', order);
	}
});