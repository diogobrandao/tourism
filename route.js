Router.route("/", function  (){
<<<<<<< HEAD
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
=======
  this.render("login");
});

Router.route("/register", function  (){
  this.render("register");
});

Router.route("/islandMap", function  (){
  if(Session.get("sessionUser")===undefined){
    this.render("login");
  } else {
    this.render("islandMap");
  }
});
>>>>>>> 2f73b049f82f334e061b089124f185cbfc12a4e8
