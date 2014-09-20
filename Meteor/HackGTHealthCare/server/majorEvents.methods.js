Meteor.methods({
  createNewMajorEvent: function(data){
    data.createdAt = new Date();
    return MajorEvents.insert(data);
  },
  updateMajorEvent: function(data){
    data.createdAt = new Date();
    return MajorEvents.update({_id: data._id}, {$set:{
      FirstName: data.FirstName,
      LastName: data.LastName,
      Company: data.Company,
      Address: data.Address,
      City: data.City,
      County: data.County,
      State: data.State,
      Zip: data.Zip,
      Phone: data.Phone,
      Fax: data.Fax,
      Email: data.Email,
      Web: data.Web,
      Notes: data.Notes
    }});
  }
});
