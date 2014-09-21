Meteor.publish('majorEvents', function () {
  return MajorEvents.find();
});
Meteor.publish('hospital', function () {
  return Hospitals.find();
});
Meteor.publish('userDrugs', function () {
  return UserDrugs.find();
});