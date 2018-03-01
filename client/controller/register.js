Template.register.events({

  "submit .add-user": function(event){
    event.preventDefault();
    var registerEmail = event.target.registerEmail.value;
    var registerDisplayName = event.target.registerDisplayName.value;
    var registerPassword = event.target.registerPassword.value;
    var retypePassword = event.target.repeatPassword.value;

    if(registerDisplayName === "" || registerDisplayName === undefined) {
      FlashMessages.sendError("Display name must be filled.");
      return;
    }

    if(registerPassword < 5){
      FlashMessages.sendError("Password must have at least 5 characters.");
      return;
    }

    if(registerPassword !== retypePassword){
      FlashMessages.sendError("Passwords must be equal.");
      return;
    }

    Meteor.call("findByEmail", registerEmail, function(error, user) {

      if(!error){

        if(user !== undefined){
          FlashMessages.sendError("This email is already registered.");
          event.target.reset();
          return;

        } else {

          var newUser={
            email: registerEmail,
            displayName: registerDisplayName,
            password: registerPassword
          };
          Meteor.call("addUser", newUser);
          FlashMessages.sendSuccess("User created successfully");
          Router.go("/");
        }
      }
    });

  }
});
