Meteor.publish('majorEvents', function () {
  return MajorEvents.find();
});
Meteor.publish('hospital', function () {
  return Hospital.find();
});
