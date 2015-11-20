Router.configure({
	loadingTemplate: 'loading',
	layoutTemplate: 'layout',
	notFoundTemplate: 'notFound',
	waitOn: function(){
		return Meteor.subscribe('orders');
	}
});

Router.route( '/', {name: 'postsList'});

Router.route( '/posts/:_id', {
	name: 'postPage',
	data: function() { return Posts.findOne(this.params._id); }
	});

Router.onBeforeAction('dataNotFound', {only: 'postPage'});

Router.route( '/submit', {name: 'postSubmit'});

Router.route( '/place-order', {name: 'placeOrder'});

Router.route( '/order-list', {name: 'viewOrders'});