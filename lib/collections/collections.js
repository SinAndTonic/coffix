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
	extras: {
      type: String,
      label: "Extra",
      optional: true
   },
   mainOrder: {
      type: String,
      label: "Coffee",
      optional: false
   },
   collectTime: {
   	type: String,
   	label: "Collection Time",
   	optional: false
   },
   complete: {
   		type: Boolean,
   		defaultValue: false

   }
}));

ItemNames = new Mongo.Collection('itemNames');

ItemNames.attachSchema(new SimpleSchema({
	item: {
		type: String,
		label: "Item Name",
		max: 30
	}
}));


ExtraItems = new Mongo.Collection('extraItems');

ExtraItems.attachSchema(new SimpleSchema({
	item: {
		type: String,
		label: "Extra Name",
		max: 30
	}
}));