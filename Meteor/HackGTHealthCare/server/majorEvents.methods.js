Meteor.methods({
  createNewMajorEvent: function(data){
    data.createdAt = new Date();
    return MajorEvents.insert(data);
  },
  updateMajorEvent: function(data){
    data.createdAt = new Date();
    return MajorEvents.update({_id: data._id}, {$set:{
      title:   data.title,
      date:  data.date,
      time:  data.time,
      tags:  data.tags,
      hospitalId:  data.hospitalId,
      otherLocation:  data.otherLocation,
      notes:  data.notes,
      drugs:  data.drugs
    }});
  }
});
