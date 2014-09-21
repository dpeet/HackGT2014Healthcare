Session.setDefault('userDrugsReceivedData', false);
Session.setDefault('userDrugsSearchFilter', '');
Session.setDefault('userDrugsTableLimit', 20);
Session.setDefault('userDrugsPaginationCount', 1);
Session.setDefault('userDrugsSelectedPagination', 0);
Session.setDefault('userDrugsSkipCount', 0);


//------------------------------------------------
// ROUTING

Router.map(function() {
  this.route('userDrugsListPage', {
    path: '/userDrugs',
    template: 'userDrugsListPage',
    waitOn: function() {
      return Meteor.subscribe('userDrugs');
    },
    data: function() {
      var d = UserDrugs.find({}).fetch();
      for (var i = 0; i < d.length; i++) {
        if (d.personalEffect == "Good") {
          d.label = "label-success";
        }
        else if (d.personalEffect == "Bad") {
          d.label = "label-danger";
        }
        return d;
      }
    },
  });
});

//------------------------------------------------
// HELPERS

Template.userDrugsListPage.helpers({
  userDrugsList: function() {
    var userDrugsCount = UserDrugs.find({
      $or: [{
          name: {
            $regex: Session.get('userDrugsSearchFilter'),
            $options: 'i'
          }
        }, {
          chemicalName: {
            $regex: Session.get('userDrugsSearchFilter'),
            $options: 'i'
          }
        }, {
          normalDosage: {
            $regex: Session.get('userDrugsSearchFilter'),
            $options: 'i'
          }
        }, {
          sideEffects: {
            $regex: Session.get('userDrugsSearchFilter'),
            $options: 'i'
          }
        }, {
          personalEffect: {
            $regex: Session.get('userDrugsSearchFilter'),
            $options: 'i'
          }
        }, {
          notes: {
            $regex: Session.get('userDrugsSearchFilter'),
            $options: 'i'
          }
        }, {
          createdAt: {
            $regex: Session.get('userDrugsSearchFilter'),
            $options: 'i'
          }
        }

      ]
    }).count();
    Session.set('muserDrugsReceivedData', new Date());
    Session.set('userDrugsPaginationCount', Math.floor((userDrugsCount - 1) / Session.get('userDrugsTableLimit')) + 1);
    return UserDrugs.find({
      $or: [{
        name: {
          $regex: Session.get('userDrugsSearchFilter'),
          $options: 'i'
        }
      }, {
        chemicalName: {
          $regex: Session.get('userDrugsSearchFilter'),
          $options: 'i'
        }
      }, {
        normalDosage: {
          $regex: Session.get('userDrugsSearchFilter'),
          $options: 'i'
        }
      }, {
        sideEffects: {
          $regex: Session.get('userDrugsSearchFilter'),
          $options: 'i'
        }
      }, {
        personalEffect: {
          $regex: Session.get('userDrugsSearchFilter'),
          $options: 'i'
        }
      }, {
        notes: {
          $regex: Session.get('userDrugsSearchFilter'),
          $options: 'i'
        }
      }, ]
    }, {
      limit: Session.get('userDrugsTableLimit'),
      skip: Session.get('userDrugsSkipCount')
    });
  },
  rendered: function() {
    $(this.find('#userDrugsTable')).tablesorter();

    // Deps.autorun(function(){
    //   console.log(Session.get('userDrugsReceivedData'));
    //   setSide Effectsout(function(){
    //     $("#userDrugsTable").trigger("upnormalDosage");
    //   }, 200);
    // });
  }
});





Template.userDrugsListPage.events({
  'keyup #userDrugsSearchInput': function() {
    Session.set('userDrugsSearchFilter', $('#userDrugsSearchInput').val());
    Session.setDefault('userDrugsSelectedPagination', 0);
    Session.setDefault('userDrugsSkipCount', 0);
  },
  'click #twentyButton': function() {
    Session.set('userDrugsTableLimit', 20);
  },
  'click #fiftyButton': function() {
    Session.set('userDrugsTableLimit', 50);
  },
  'click #hundredButton': function() {
    Session.set('userDrugsTableLimit', 100);
  },
  'click .pagination-btn': function() {
    //alert(JSON.stringify(this.index));
    Session.set('userDrugsSelectedPagination', this.index);
    Session.set('userDrugsSkipCount', this.index * Session.get('userDrugsTableLimit'));
  },
  'click .userDrugRow': function() {
    Session.set('selectedUser', this._id);
    Router.go('/userDrug/' + this._id);
    //alert(this._id);
  }
});


Template.userDrugsListPage.helpers({
  getPaginationCount: function() {
    return Session.get('userDrugsPaginationCount');
  },
  paginationButtonDrugsList: function() {
    var paginationArray = [];
    for (var i = 0; i < Session.get('userDrugsPaginationCount'); i++) {
      paginationArray[i] = {
        index: i
      };
    }
    if (paginationArray.length > 1) {
      return paginationArray;
    }
    else {
      return [];
    }
  },
  isTwentyActive: function() {
    if (Session.get('userDrugsTableLimit') === 20) {
      return "active";
    }
  },
  isFiftyActive: function() {
    if (Session.get('userDrugsTableLimit') === 50) {
      return "active";
    }
  },
  isHundredActive: function() {
    if (Session.get('userDrugsTableLimit') === 100) {
      return "active";
    }
  }
});



Template.paginationButtonDrugs.helpers({
  pageActive: function() {
    if (this.index === Session.get('userDrugsSelectedPagination')) {
      return "active";
    }
  },
  getPage: function() {
    return this.index + 1;
  }
});
