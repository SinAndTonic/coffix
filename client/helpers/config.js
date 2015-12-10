Accounts.ui.config({
    passwordSignupFields: "USERNAME_AND_EMAIL"
  });

Meteor.startup(function () {
        setInterval(function () {
            Meteor.call("getServerTime", function (error, result) {
                Session.set("time", result);
            });
        }, 1000);
    });