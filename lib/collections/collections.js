Orders = new Mongo.Collection('orders');

//Orders.allow({
//	insert: function(userId, doc){
//		return !! userId;
//	},
//	remove: function(userId, doc){
//		return !! userId;
//	}
//});

ItemNames = new Mongo.Collection('itemNames');

ItemNames.attachSchema(new SimpleSchema({
	item: {
		type: String,
		label: "Item Name",
		max: 30
	}
}));

// ItemNames.allow({
// 	insert: function(userId, doc){
// 		return !! userId;
// 	},
// 	remove: function(userId, doc){
// 		return !! userId;
// 	}
// });