
 Template.landingpage.events({
   "click .portuguese": function (event){
      event.preventDefault();
      var portuguese = "portuguese";

      Session.set("language",portuguese);

      Router.go("/login");
    },

    "click .english": function (event){
       event.preventDefault();

       var english = "english";

       Session.set("language",english);

       Router.go("/login");
     }
 });
