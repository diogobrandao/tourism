Template.register.events({

  "submit .add-user": function(event){
    event.preventDefault();
    var registerEmail =  event.target.registerEmail.value;
    var registerDisplayName =  event.target.registerDisplayName.value;
    var registerPassword = event.target.registerPassword.value;
    var retypePassword = event.target.repeatPassword.value;

    if(registerDisplayName === "" || registerDisplayName===undefined){
      FlashMessages.sendError("Display name must be filled.");
      return;
    }

    if(registerPassword<5){
      FlashMessages.sendError("Password must have ate least 5 characters.");
      return;
    }

    if(registerPassword !== retypePassword){
      FlashMessages.sendError("Passwords must be equal.");
      return;
    }

    var newUser={
      email:registerEmail,
      displayName:registerDisplayName,
      password:registerPassword
    };

    Meteor.call("addUser",newUser);
    FlashMessages.sendSuccess("User created successfully");
    Router.go("/");

  }

});
