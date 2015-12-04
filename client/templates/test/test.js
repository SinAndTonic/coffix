AutoForm.debug();
Meteor.subscribe('itemNames');

Template.test.helpers({
	// extraList: function() {
	// 	return {anything: "good times"};
	// }


	extraList: function() {
		return ItemNames.find().map(function (c) {
			return {label: c.item, value: c.item};
		});
	}
});