Hospital = new Meteor.Collection("hospital");
MajorEvent = new Meteor.Collection("majorEvent");
Drug = new Meteor.Collection("drug");
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
