Router.configure({
	loadingTemplate: 'loading',
	layoutTemplate: 'layout',
	notFoundTemplate: 'notFound',
	waitOn: function(){
		return [Meteor.subscribe('orders'),Meteor.subscribe('itemNames')];
	}
});

var requireLogin = function() {
  if (! Meteor.user()) {
    this.render('accessDenied');
  } else {
    this.next();
  }
};

var requireAdmin = function() {
	if (! Meteor.user()){
		this.render('accessDenied');
	} else if (Meteor.user().username != 'admin') {
		this.render('accessDenied');
	} else {
		this.next();
	}
};

//Router.route( '/submit', {name: 'postSubmit'});

Router.route( '/place-order', {name: 'placeOrder'});

Router.route( '/order-list', {name: 'viewOrders'});

Router.route( '/', {name: 'home'});

Router.route( '/new-items', {name: 'newItem'});

Router.onBeforeAction(requireLogin, {only: 'placeOrder'});

Router.onBeforeAction(requireAdmin, {only: 'viewOrders'});