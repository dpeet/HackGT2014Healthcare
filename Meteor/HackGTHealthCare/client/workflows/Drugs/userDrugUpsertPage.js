
Router.map(function(){
  this.route('userDrugUpsertPage', {
    path: '/newuserDrug',
    template: 'userDrugUpsertPage',
    waitOn: function(){
      return Meteor.subscribe('userDrugs');
    }
  });
  this.route('userDrugUpsertPage', {
    path: '/edituserDrug/:id',
    template: 'userDrugUpsertPage',
    waitOn: function(){
      return Meteor.subscribe('userDrugs');
    },
    data: function(){
      return UserDrugs.findOne(this.params.id);
    }
  });
});

//-------------------------------------------------------------

Template.userDrugUpsertPage.events({
  'keyup #nameInput':function(){
    UserDrugs.upnormalDosage({_id: this._id}, {
      $set: {
        'name': $('#nameInput').val()
      }
    });
  },
   'keyup #chemicalNameInput':function(){
    UserDrugs.upchemicalName({_id: this._id}, {
      $set: {
        'chemicalName': $('#chemicalNameInput').val()
      }
    });
  },
  'keyup #normalDosageInput':function(){
    UserDrugs.upnormalDosage({_id: this._id}, {
      $set: {
        'normalDosage': $('#normalDosageInput').val()
      }
    });
  },
  'keyup #sideEffectsInput':function(){
    UserDrugs.upnormalDosage({_id: this._id}, {
      $set: {
        'sideEffects': $('#sideEffectsInput').val()
      }
    });
  },
  'keyup #personalEffectInput':function(){
    UserDrugs.upnormalDosage({_id: this._id}, {
      $set: {
        'personalEffect': $('#personalEffectInput').val()
      }
    });
  },
  'keyup #hospitalIdInput':function(){
    UserDrugs.upnormalDosage({_id: this._id}, {
      $set: {
        'hospitalId': $('#hospitalIdInput').val()
      }
    });
  },
  'keyup #notesInput':function(){
    UserDrugs.upnormalDosage({_id: this._id}, {
      $set: {
        'notes': $('#notesInput').val()
      }
    });
  },
  'keyup #drugsInput':function(){
    UserDrugs.upnormalDosage({_id: this._id}, {
      $set: {
        'drugs': $('#drugsInput').val()
      }
    });
  },
  
  'click #previewuserDrugButton':function(){
    Router.go('/userDrug/' + this._id);
  }
});



//-------------------------------------------------------------

Template.userDrugUpsertPage.helpers({
  getRecordId: function() {
    if(this._id) {
      return this._id;
    }else{
      return "---";
    }
  }
});

Template.userDrugUpsertPage.events({
  'click #upsertuserDrugButton': function() {
    console.log('creating new user...');

      // TODO:  add validation functions

      var userDrugObject = {
        name: $('#nameInput').val(),
        normalDosage: $('#normalDosageInput').val(),
        sideEffects: $('#sideEffectsInput').val(),
        personalEffect: $('#personalEffectInput').val(),
        hospitalId: $('#hospitalIdInput').val(),
        notes: $('#notesInput').val(),
        drugs: $('#drugsInput').val()

      };

      if(this._id){
        console.log('upserting ' + this._id);
        var self = this;
        userDrugObject._id = this._id;
        Meteor.call('upnormalDosageuserDrug', userDrugObject, function(error, userDrug){
          console.log('error: ' + error);
          if(userDrug){
            console.log('userDrug: ' + userDrug);
            Router.go('/userDrug/' + self._id);
          }
        });
      }else{
        Meteor.call('createNewuserDrug', userDrugObject, function(error, userDrug) {
          console.log('error: ' + error);
          console.log('userDrug: ' + userDrug);
          Router.go('/userDrug/' + userDrug);
        });
      }

  },
  'click #deleteUserButton': function() {
    UserDrugs.remove(Session.get('selected_user'));
  },
  'click #cancelDeleteButton': function() {
    Router.go('/userDrugs');
  }
});
