
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
      return Meteor.subscribe('hospitals');
    },
    data: function(){
      return Hospitals.findOne(this.params.id);
    }
  });
});

//-------------------------------------------------------------

Template.hospitalUpsertPage.events({
  'keyup #titleInput':function(){
    Hospitals.update({_id: this._id}, {
      $set: {
        'title': $('#titleInput').val()
      }
    });
  },
  'keyup #dateInput':function(){
    Hospitals.update({_id: this._id}, {
      $set: {
        'date': $('#dateInput').val()
      }
    });
  },
  'keyup #timeInput':function(){
    Hospitals.update({_id: this._id}, {
      $set: {
        'time': $('#timeInput').val()
      }
    });
  },
  'keyup #tagsInput':function(){
    Hospitals.update({_id: this._id}, {
      $set: {
        'tags': $('#tagsInput').val()
      }
    });
  },
  'keyup #hospitalIdInput':function(){
    Hospitals.update({_id: this._id}, {
      $set: {
        'hospitalId': $('#hospitalIdInput').val()
      }
    });
  },
  'keyup #notesInput':function(){
    Hospitals.update({_id: this._id}, {
      $set: {
        'notes': $('#notesInput').val()
      }
    });
  },
  'keyup #drugsInput':function(){
    Hospitals.update({_id: this._id}, {
      $set: {
        'drugs': $('#drugsInput').val()
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
    Router.go('/hospital');
  }
});
