AutoForm.hooks({
  newOrderForm: {
  	onSuccess: function(formType, result) {
  		Router.go("/my-orders");
  	},

  }
});