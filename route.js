Router.route("/", function  (){
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
