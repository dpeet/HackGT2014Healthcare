Meteor.publish('majorEvents', function () {
  return MajorEvents.find();
});
