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
  },
  deleteAllMajorEvent: function(){
    return MajorEvents.remove({});
  },
  
  createUserDrugs: function(data){
    data.createdAt = new Date();
    return UserDrugs.insert(data);
  },
  updateUserDrugs: function(data){
    data.createdAt = new Date();
    return UserDrugs.update({_id: data._id}, {$set:{
      name:   data.name,
      chemicalName:  data.chemicalName,
      normalDosage:  data.normalDosage,
      sideEffects:  data.sideEffects,
      personalEffect:  data.personalEffect,
      notes:  data.notes

    }});
  },
  deleteAllUserDrugs: function(){
    return UserDrugs.remove({});
  },
  
  createNewHospital: function(data){
    data.createdAt = new Date();
    return Hospitals.insert(data);
  },
  updateHospital: function(data){
    data.createdAt = new Date();
    return Hospitals.update({_id: data._id}, {$set:{
      name:   data.name,
      streetaddress:  data.streetaddress,
      city:  data.city,
      state:  data.state,
      zip:  data.zip,
      lat:  data.lat,
      long:  data.long
    }});
  },
  deleteAllHospitals: function(){
    return Hospitals.remove({});
  }
});
