MajorEvents =  new Meteor.Collection("majorEvents");

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
