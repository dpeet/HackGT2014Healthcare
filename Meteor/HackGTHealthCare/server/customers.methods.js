Meteor.methods({
  createNewCustomer: function(data){
    data.createdAt = new Date();
    return Customers.insert(data);
  },
  updateCustomer: function(data){
    data.createdAt = new Date();
    return Customers.update({_id: data._id}, {$set:{
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
