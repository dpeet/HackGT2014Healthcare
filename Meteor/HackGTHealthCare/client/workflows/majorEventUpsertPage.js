
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
  'keyup #titleInput':function(){
    MajorEvents.update({_id: this._id}, {
      $set: {
        'title': $('#titleInput').val()
      }
    });
  },
  'keyup #dateInput':function(){
    MajorEvents.update({_id: this._id}, {
      $set: {
        'date': $('#dateInput').val()
      }
    });
  },
  'keyup #timeInput':function(){
    MajorEvents.update({_id: this._id}, {
      $set: {
        'time': $('#timeInput').val()
      }
    });
  },
  'keyup #tagsInput':function(){
    MajorEvents.update({_id: this._id}, {
      $set: {
        'tags': $('#tagsInput').val()
      }
    });
  },
  'keyup #hospitalIdInput':function(){
    MajorEvents.update({_id: this._id}, {
      $set: {
        'hospitalId': $('#hospitalIdInput').val()
      }
    });
  },
  'keyup #notesInput':function(){
    MajorEvents.update({_id: this._id}, {
      $set: {
        'notes': $('#notesInput').val()
      }
    });
  },
  'keyup #drugsInput':function(){
    MajorEvents.update({_id: this._id}, {
      $set: {
        'drugs': $('#drugsInput').val()
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
        title: $('#titleInput').val(),
        date: $('#dateInput').val(),
        time: $('#timeInput').val(),
        tags: $('#tagsInput').val(),
        hospitalId: $('#hospitalIdInput').val(),
        notes: $('#notesInput').val(),
        drugs: $('#drugsInput').val()

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
