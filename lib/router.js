Router.configure({
	loadingTemplate: 'loading',
	layoutTemplate: 'layout',
	waitOn: function(){
		return Meteor.subscribe('posts');
	}
});

Router.route( '/', {name: 'postsList'});