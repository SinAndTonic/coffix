Template.placeOrder.events({
	'submit form': function(e){
		e.preventDefault();

		var userId = Meteor.userId();

		var userName = Meteor.user().username;
        
     var theExtras = [];

     $('#extraArea :checked').each(function() {
       theExtras.push($(this).val());
     });

     var theOrder = [];

	$('#orderArea option:selected').each(function() {
       theOrder.push($(this).val());
     });


		var order = {
			userId: userId,
			userName: userName,
			createdAt: new Date(),
			theOrder: theOrder,
			extras: theExtras,
			complete: false
		};

		//var totalOrder = {
		//	mainOrder: order,
		//	extras: extras
		//};
		//console.log(post);
		//console.log(extras);
		//console.log(order);
		//order._id = Orders.insert(order);
		//Router.go('postPage', post);
		Meteor.call('newOrder', order);
	}

});