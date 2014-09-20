
Router.map(function(){
  this.route('customerUpsertPage', {
    path: '/newcustomer',
    template: 'customerUpsertPage',
    waitOn: function(){
      return Meteor.subscribe('customers');
    }
  });
  this.route('customerUpsertPage', {
    path: '/editcustomer/:id',
    template: 'customerUpsertPage',
    waitOn: function(){
      return Meteor.subscribe('customers');
    },
    data: function(){
      return Customers.findOne(this.params.id);
    }
  });
});

//-------------------------------------------------------------


Template.customerUpsertPage.events({
  'keyup #firstNameInput':function(){
    Customers.update({_id: this._id}, {
      $set: {
        'FirstName': $('#firstNameInput').val()
      }
    });
  },
  'keyup #lastNameInput':function(){
    Customers.update({_id: this._id}, {
      $set: {
        'LastName': $('#lastNameInput').val()
      }
    });
  },
  'keyup #companyInput':function(){
    Customers.update({_id: this._id}, {
      $set: {
        'Company': $('#companyInput').val()
      }
    });
  },
  'keyup #addressInput':function(){
    Customers.update({_id: this._id}, {
      $set: {
        'Address': $('#addressInput').val()
      }
    });
  },
  'keyup #cityInput':function(){
    Customers.update({_id: this._id}, {
      $set: {
        'City': $('#cityInput').val()
      }
    });
  },
  'keyup #countyInput':function(){
    Customers.update({_id: this._id}, {
      $set: {
        'County': $('#countyInput').val()
      }
    });
  },
  'keyup #stateInput':function(){
    Customers.update({_id: this._id}, {
      $set: {
        'State': $('#stateInput').val()
      }
    });
  },
  'keyup #zipInput':function(){
    Customers.update({_id: this._id}, {
      $set: {
        'Zip': $('#zipInput').val()
      }
    });
  },
  'keyup #phoneInput':function(){
    Customers.update({_id: this._id}, {
      $set: {
        'Phone': $('#phoneInput').val()
      }
    });
  },
  'keyup #faxInput':function(){
    Customers.update({_id: this._id}, {
      $set: {
        'Fax': $('#faxInput').val()
      }
    });
  },
  'keyup #emailInput':function(){
    Customers.update({_id: this._id}, {
      $set: {
        'Email': $('#emailInput').val()
      }
    });
  },
  'keyup #webInput':function(){
    Customers.update({_id: this._id}, {
      $set: {
        'Web': $('#webInput').val()
      }
    });
  },
  'click #previewCustomerButton':function(){
    Router.go('/customer/' + this._id);
  }
});



//-------------------------------------------------------------

Template.customerUpsertPage.helpers({
  getRecordId: function() {
    if(this._id) {
      return this._id;
    }else{
      return "---";
    }
  }
});

Template.customerUpsertPage.events({
  'click #upsertCustomerButton': function() {
    console.log('creating new user...');

      // TODO:  add validation functions

      var customerObject = {
        FirstName: $('#firstNameInput').val(),
        LastName: $('#lastNameInput').val(),
        Company: $('#companyInput').val(),
        Address: $('#addressInput').val(),
        City: $('#cityInput').val(),
        County: $('#countyInput').val(),
        State: $('#stateInput').val(),
        Zip: $('#zipInput').val(),
        Phone: $('#phoneInput').val(),
        Fax: $('#faxInput').val(),
        Email: $('#emailInput').val(),
        Web: $('#webInput').val(),
        Notes: $('#notesInput').val()
      };

      if(this._id){
        console.log('upserting ' + this._id);
        var self = this;
        customerObject._id = this._id;
        Meteor.call('updateCustomer', customerObject, function(error, customer){
          console.log('error: ' + error);
          if(customer){
            console.log('customer: ' + customer);
            Router.go('/customer/' + self._id);
          }
        });
      }else{
        Meteor.call('createNewCustomer', customerObject, function(error, customer) {
          console.log('error: ' + error);
          console.log('customer: ' + customer);
          Router.go('/customer/' + customer);
        });
      }

  },
  'click #deleteUserButton': function() {
    Customers.remove(Session.get('selected_user'));
  },
  'click #cancelDeleteButton': function() {
    Router.go('/customers');
  }
});
