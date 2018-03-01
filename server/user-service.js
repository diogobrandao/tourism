import {Meteor} from 'meteor/meteor';

Meteor.methods({
  addUser: function(userData){
    var userId = Users.insert(userData);
    return userId;
  }
});
