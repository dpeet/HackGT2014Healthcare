Hospital = new Meteor.Collection("hospital");
HospitalVisit = new Meteor.Collection("hospitalvisit");
Drugs = new Meteor.Collection("drugs");
DrugUsage = new Meteor.Collection("drugUsage");

Template.hello.helpers({
  counter: function () {
    return Session.get("counter");
  }
});

Template.hello.events({
  'click button': function () {
    // increment the counter when button is clicked
    Session.set("counter", Session.get("counter") + 1);
  }
});

Router.map(function () {
  this.route('about');  // By default, path = '/about', template = 'about'
  this.route('home', {
    path: '/',  //overrides the default '/home'
  });
});
