UserDrugs = new Meteor.Collection("userDrugs");
DrugUsage = new Meteor.Collection("drugUsage");
Hospitals = new Meteor.Collection("hospital");
MajorEvents = new Meteor.Collection("majorEvents");

UserDrugs.allow({
  insert: function(){
    return true;
  },
  update: function () {
    return true;
  },
  remove: function(){
    return true;
  }
});

DrugUsage.allow({
  insert: function(){
    return true;
  },
  update: function () {
    return true;
  },
  remove: function(){
    return true;
  }
});

Hospitals.allow({
  insert: function(){
    return true;
  },
  update: function () {
    return true;
  },
  remove: function(){
    return true;
  }
});

MajorEvents.allow({
  insert: function(){
    return true;
  },
  update: function () {
    return true;
  },
  remove: function(){
    return true;
  }
});
