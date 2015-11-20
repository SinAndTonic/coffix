Orders = new Mongo.Collection('orders');

Orders.allow({
	insert: function(userId, doc){
		return !! userId;
	}
});