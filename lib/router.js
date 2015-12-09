Router.configure({
	loadingTemplate: 'loading',
	layoutTemplate: 'layout',
	notFoundTemplate: 'notFound',
	subscriptions: function(){
		return [Meteor.subscribe('itemNames'),Meteor.subscribe('extraItems'),Meteor.subscribe('orders')];
	}
});

var requireLogin = function() {
  if (! Meteor.user()) {
    this.render('pleaseLogIn');
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

Router.route( '/new-item', {name: 'newItem'});

Router.route( '/new-extra', {name: 'newExtra'});

Router.route( '/view-all', {name: 'viewAllOrders'});

Router.route( '/test', {name: 'test'});

Router.route( '/my-orders', {name: 'myOrders'});

Router.onBeforeAction(requireLogin, {only: 'placeOrder'});

Router.onBeforeAction(requireLogin, {only: 'myOrders'});

Router.onBeforeAction(requireAdmin, {only: 'viewOrders'});

Router.onBeforeAction(requireAdmin, {only: 'viewAllOrders'});