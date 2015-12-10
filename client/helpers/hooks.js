AutoForm.hooks({
  newOrderForm: {
  	onSuccess: function(formType, result) {
  		Router.go("/my-orders");
  	},
  	onError: function (name, error, template) {
      console.log(name + " error:", error);
    }
  }
});

// AutoForm.addHooks(null, {
//     onError: function (name, error, template) {
//       console.log(name + " error:", error);
//     }
//   });