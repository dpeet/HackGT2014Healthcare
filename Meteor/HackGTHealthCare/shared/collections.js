Drug = new Meteor.Collection("drug");
DrugUsage = new Meteor.Collection("drugUsage");
Hospital = new Meteor.Collection("hospital");
MajorEvents = new Meteor.Collection("majorEvents");

Drug.allow({
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

Hospital.allow({
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
