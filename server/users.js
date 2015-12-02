Meteor.startup(function(){
	if(Meteor.users.find().count() < 1){

		var users = [

		      {name:"admin",email:"admin@example.com",roles:['admin']}

		    ];

		_.each(users, function (user) {
		  var id;

		  id = Accounts.createUser({
		  	username: user.name,
		    email: user.email,
		    password: "12345678",
		    profile: { name: user.name }
		  });

		  Meteor.users.update({_id:id},{$set:{'emails.0.verified': true}});

		  Roles.addUsersToRoles(id, user.roles);

		});

	}
});


