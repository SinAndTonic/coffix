Template.newItem.events({
	'submit form': function(e){
		e.preventDefault();

		var userId = Meteor.userId();

		var userName = Meteor.user().username;

    items = $( "#item" ).val();


		var newItems = {
			userId: userId,
			userName: userName,
			createdAt: new Date(),
			items: items
		};

		//var totalOrder = {
		//	mainOrder: order,
		//	extras: extras
		//};
		//console.log(post);
		//console.log(extras);
		//console.log(order);


		ItemNames.insert(
			{item: items}
			);
			
		$('#item').val('');
	}

});