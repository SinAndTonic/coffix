Orders = new Mongo.Collection('orders');

Orders.allow({
	insert: function(userId, doc){
		return !! userId;
	},
	remove: function(userId, doc){
		return !! userId;
	}
});

ItemNames = new Mongo.Collection('itemNames');

ItemNames.allow({
	insert: function(userId, doc){
		return !! userId;
	},
	remove: function(userId, doc){
		return !! userId;
	}
});