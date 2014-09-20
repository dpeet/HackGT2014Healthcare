
Router.map(function(){
  this.route('majorEventUpsertPage', {
    path: '/newmajorEvent',
    template: 'majorEventUpsertPage',
    waitOn: function(){
      return Meteor.subscribe('majorEvents');
    }
  });
  this.route('majorEventUpsertPage', {
    path: '/editmajorEvent/:id',
    template: 'majorEventUpsertPage',
    waitOn: function(){
      return Meteor.subscribe('majorEvents');
    },
    data: function(){
      return MajorEvents.findOne(this.params.id);
    }
  });
});

//-------------------------------------------------------------


Template.majorEventUpsertPage.events({
  'keyup #firstNameInput':function(){
    MajorEvents.update({_id: this._id}, {
      $set: {
        'FirstName': $('#firstNameInput').val()
      }
    });
  },
  'keyup #lastNameInput':function(){
    MajorEvents.update({_id: this._id}, {
      $set: {
        'LastName': $('#lastNameInput').val()
      }
    });
  },
  'keyup #companyInput':function(){
    MajorEvents.update({_id: this._id}, {
      $set: {
        'Company': $('#companyInput').val()
      }
    });
  },
  'keyup #addressInput':function(){
    MajorEvents.update({_id: this._id}, {
      $set: {
        'Address': $('#addressInput').val()
      }
    });
  },
  'keyup #cityInput':function(){
    MajorEvents.update({_id: this._id}, {
      $set: {
        'City': $('#cityInput').val()
      }
    });
  },
  'keyup #countyInput':function(){
    MajorEvents.update({_id: this._id}, {
      $set: {
        'County': $('#countyInput').val()
      }
    });
  },
  'keyup #stateInput':function(){
    MajorEvents.update({_id: this._id}, {
      $set: {
        'State': $('#stateInput').val()
      }
    });
  },
  'keyup #zipInput':function(){
    MajorEvents.update({_id: this._id}, {
      $set: {
        'Zip': $('#zipInput').val()
      }
    });
  },
  'keyup #phoneInput':function(){
    MajorEvents.update({_id: this._id}, {
      $set: {
        'Phone': $('#phoneInput').val()
      }
    });
  },
  'keyup #faxInput':function(){
    MajorEvents.update({_id: this._id}, {
      $set: {
        'Fax': $('#faxInput').val()
      }
    });
  },
  'keyup #emailInput':function(){
    MajorEvents.update({_id: this._id}, {
      $set: {
        'Email': $('#emailInput').val()
      }
    });
  },
  'keyup #webInput':function(){
    MajorEvents.update({_id: this._id}, {
      $set: {
        'Web': $('#webInput').val()
      }
    });
  },
  'click #previewMajorEventButton':function(){
    Router.go('/majorEvent/' + this._id);
  }
});



//-------------------------------------------------------------

Template.majorEventUpsertPage.helpers({
  getRecordId: function() {
    if(this._id) {
      return this._id;
    }else{
      return "---";
    }
  }
});

Template.majorEventUpsertPage.events({
  'click #upsertMajorEventButton': function() {
    console.log('creating new user...');

      // TODO:  add validation functions

      var majorEventObject = {
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
        majorEventObject._id = this._id;
        Meteor.call('updateMajorEvent', majorEventObject, function(error, majorEvent){
          console.log('error: ' + error);
          if(majorEvent){
            console.log('majorEvent: ' + majorEvent);
            Router.go('/majorEvent/' + self._id);
          }
        });
      }else{
        Meteor.call('createNewMajorEvent', majorEventObject, function(error, majorEvent) {
          console.log('error: ' + error);
          console.log('majorEvent: ' + majorEvent);
          Router.go('/majorEvent/' + majorEvent);
        });
      }

  },
  'click #deleteUserButton': function() {
    MajorEvents.remove(Session.get('selected_user'));
  },
  'click #cancelDeleteButton': function() {
    Router.go('/majorEvents');
  }
});
