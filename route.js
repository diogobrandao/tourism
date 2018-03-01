Router.route("/", function  (){
  this.render("landingpage");
});

Router.route("/login", function  (){
  if(Session.get("language") === "portuguese"){
    this.render("loginPt");
  }else{
    this.render("loginEn");
  }

});


Router.route("/register", function  (){
  this.render("register");
});
