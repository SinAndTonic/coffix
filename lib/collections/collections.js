Orders = new Mongo.Collection('orders');

Orders.attachSchema(new SimpleSchema({
	userId: {
		type: String,
		autoValue: function(){	return this.userId;	},
		autoform: { omit: true}
	},
	userName: {
		type: String,
		autoValue: function(){ return Meteor.user().username; },
		autoform: { omit: true}
	},
	createdAt: {
		type: Date,
		autoValue: function(){
			if (this.isInsert){ return new Date(); }
			else { this.unset(); }
		},
		autoform: { omit: true}
	},
	mainOrder: {
      type: String,
      allowedValues: [
         "one",
         "two",
         "three"
      ],
      optional: true,
      label: "Choose a number"
   },
   extras: {
      type: String,
      label: "choose one!"
   }
}));

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

Colors = new Mongo.Collection('colors');

Colors.attachSchema(new SimpleSchema({
  favoriteColor: {
    type: String
  }
}));