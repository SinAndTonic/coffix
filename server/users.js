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

		  if (user.roles.length > 0) {
		    // Need _id of existing user record so this call must come 
		    // after `Accounts.createUser` or `Accounts.onCreate`
		    Roles.addUsersToRoles(id, user.roles, 'admin');
		  }

		});

	}
});


