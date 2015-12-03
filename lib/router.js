Router.configure({
	loadingTemplate: 'loading',
	layoutTemplate: 'layout',
	notFoundTemplate: 'notFound',
	subscriptions: function(){
		return [Meteor.subscribe('orders'),Meteor.subscribe('itemNames'),Meteor.subscribe('Books')];
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

Router.route( '/view-all', {name: 'viewAllOrders'});

Router.onBeforeAction(requireLogin, {only: 'placeOrder'});

Router.onBeforeAction(requireAdmin, {only: 'viewOrders'});

Router.onBeforeAction(requireAdmin, {only: 'viewAllOrders'});