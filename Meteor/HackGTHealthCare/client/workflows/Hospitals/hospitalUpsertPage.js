
Router.map(function(){
  this.route('hospitalUpsertPage', {
    path: '/newHospital',
    template: 'hospitalUpsertPage',
    waitOn: function(){
      return Meteor.subscribe('hospital');
    }
  });
  this.route('hospitalUpsertPage', {
    path: '/editHospital/:id',
    template: 'hospitalUpsertPage',
    waitOn: function(){
      return Meteor.subscribe('hospital');
    },
    data: function(){
      return Hospitals.findOne(this.params.id);
    }
  });
});

//-------------------------------------------------------------

Template.hospitalUpsertPage.events({
  'keyup #nameInput':function(){
    Hospitals.update({_id: this._id}, {
      $set: {
        'name': $('#nameInput').val()
      }
    });
  },
  'keyup #streetaddressInput':function(){
    Hospitals.update({_id: this._id}, {
      $set: {
        'streetaddress': $('#streetaddressInput').val()
      }
    });
  },
  'keyup #cityInput':function(){
    Hospitals.update({_id: this._id}, {
      $set: {
        'city': $('#cityInput').val()
      }
    });
  },
  'keyup #stateInput':function(){
    Hospitals.update({_id: this._id}, {
      $set: {
        'state': $('#stateInput').val()
      }
    });
  },
  'keyup #latInput':function(){
    Hospitals.update({_id: this._id}, {
      $set: {
        'lat': $('#latInput').val()
      }
    });
  },
  'keyup #longInput':function(){
    Hospitals.update({_id: this._id}, {
      $set: {
        'long': $('#longInput').val()
      }
    });
  },
  
  'click #previewHospitalButton':function(){
    Router.go('/hospital/' + this._id);
  }
});



//-------------------------------------------------------------

Template.hospitalUpsertPage.helpers({
  getRecordId: function() {
    if(this._id) {
      return this._id;
    }else{
      return "---";
    }
  }
});

Template.hospitalUpsertPage.events({
  'click #upsertHospitalButton': function() {
    console.log('creating new hospital...');

      // TODO:  add validation functions

      var hospitalObject = {
        name: $('#nameInput').val(),
        streetaddress: $('#streetaddressInput').val(),
        city: $('#cityInput').val(),
        state: $('#stateInput').val(),
        zip: $('#zipInput').val(),
        lat: $('#latInput').val(),
        long: $('#longInput').val()

      };

      if(this._id){
        console.log('upserting ' + this._id);
        var self = this;
        hospitalObject._id = this._id;
        Meteor.call('updateHospital', hospitalObject, function(error, hospital){
          console.log('error: ' + error);
          if(hospital){
            console.log('hospital: ' + hospital);
            Router.go('/hospital/' + self._id);
          }
        });
      }else{
        Meteor.call('createNewHospital', hospitalObject, function(error, hospital) {
          console.log('error: ' + error);
          console.log('hospital: ' + hospital);
          Router.go('/hospital/' + hospital);
        });
      }

  },
  'click #deleteUserButton': function() {
    Hospitals.remove(Session.get('selected_user'));
  },
  'click #cancelDeleteButton': function() {
    Router.go('/hospitals');
  }
});
