Template.login.events({

  "submit form": function(event){
    event.preventDefault();
    var loginEmail = event.target.loginEmail.value;
    var loginPassword = event.target.loginPassword.value;

    Meteor.call("findByEmail", loginEmail, function(error, user) {
      if(!error){

        if(user === undefined){
          FlashMessages.sendError("Authentication failed.");
          return;
        }

        if(user.password !== loginPassword){
          FlashMessages.sendError("Authentication failed.");
          return;
        }

        Session.set("sessionUser", user);
        Router.go("/islandMap");
      }
    });
  }
});
