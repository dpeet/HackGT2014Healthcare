Session.setDefault('hospitalsReceivedData', false);
Session.setDefault('hospitalsSearchFilter', '');
Session.setDefault('hospitalsTableLimit', 20);
Session.setDefault('hospitalsPaginationCount', 1);
Session.setDefault('hospitalsSelectedPagination', 0);
Session.setDefault('hospitalsSkipCount', 0);


//------------------------------------------------
// ROUTING

Router.map(function(){
  this.route('hospitalsListPage', {
    path: '/hospitals',
    template: 'hospitalsListPage',
    waitOn: function(){
      return Meteor.subscribe('hospital');
    }
  });
});

Template.map.rendered = function() {
    if (! Session.get('map'))
        gmaps.initialize();
 
    Deps.autorun(function() {
        var hs = Hospitals.find().fetch();
 
        _.each(hs, function(h) {
            if (typeof h.lat !== 'undefined' &&
                typeof h.long !== 'undefined') {
 
                var objMarker = {
                    id: h._id,
                    lat: h.lat,
                    lng: h.long,
                    title: h.name
                };
 
                // check if marker already exists
                if (!gmaps.markerExists('id', objMarker.id))
                    gmaps.addMarker(objMarker);
 
            }
        });
    });
};

Template.map.destroyed = function() {
    Session.set('map', false);
};


//------------------------------------------------
// HELPERS



Template.hospitalsListPage.helpers({
  hospitalsList: function(){
    var hospitalsCount = Hospitals.find({$or:[
      {name: { $regex: Session.get('hospitalsSearchFilter'), $options: 'i' }},
      {city: { $regex: Session.get('hospitalsSearchFilter'), $options: 'i' }},
      {state: { $regex: Session.get('hospitalsSearchFilter'), $options: 'i' }} /*,
      {tags: { $regex: Session.get('hospitalsSearchFilter'), $options: 'i' }},
      {hospitalId: { $regex: Session.get('hospitalsSearchFilter'), $options: 'i' }},
      {otherLocation: { $regex: Session.get('hospitalsSearchFilter'), $options: 'i' }},
      {notes: { $regex: Session.get('hospitalsSearchFilter'), $options: 'i' }},
      {drugs: { $regex: Session.get('hospitalsSearchFilter'), $options: 'i' }},
      {createdAt: { $regex: Session.get('hospitalsSearchFilter'), $options: 'i' }} */

      ]
    }).count();
    Session.set('hospitalsReceivedData', new Date());
    Session.set('hospitalsPaginationCount', Math.floor((hospitalsCount - 1) / Session.get('hospitalsTableLimit')) + 1);
    return Hospitals.find({$or:[
      {name: { $regex: Session.get('hospitalsSearchFilter'), $options: 'i' }},
      {city: { $regex: Session.get('hospitalsSearchFilter'), $options: 'i' }},
      {state: { $regex: Session.get('hospitalsSearchFilter'), $options: 'i' }} /*,
      {tags: { $regex: Session.get('hospitalsSearchFilter'), $options: 'i' }},
      {hospitalId: { $regex: Session.get('hospitalsSearchFilter'), $options: 'i' }},
      {otherLocation: { $regex: Session.get('hospitalsSearchFilter'), $options: 'i' }},
      {notes: { $regex: Session.get('hospitalsSearchFilter'), $options: 'i' }},
      {drugs: { $regex: Session.get('hospitalsSearchFilter'), $options: 'i' }},
      {createdAt: { $regex: Session.get('hospitalsSearchFilter'), $options: 'i' }} */
      ]
    },{limit: Session.get('hospitalsTableLimit'), skip: Session.get('hospitalsSkipCount')});
  },
  rendered: function(){
    $(this.find('#hospitalsTable')).tablesorter();

    // Deps.autorun(function(){
    //   console.log(Session.get('hospitalsReceivedData'));
    //   setTimeout(function(){
    //     $("#hospitalsTable").trigger("update");
    //   }, 200);
    // });
  }
});





Template.hospitalsListPage.events({
  'keyup #hospitalsSearchInput':function(){
    Session.set('hospitalsSearchFilter', $('#hospitalsSearchInput').val());
    Session.setDefault('hospitalsSelectedPagination', 0);
    Session.setDefault('hospitalsSkipCount', 0);
  },
  'click #twentyButton':function(){
    Session.set('hospitalsTableLimit', 20);
  },
  'click #fiftyButton': function(){
    Session.set('hospitalsTableLimit', 50);
  },
  'click #hundredButton': function(){
    Session.set('hospitalsTableLimit', 100);
  },
  'click .pagination-btn':function(){
    //alert(JSON.stringify(this.index));
    Session.set('hospitalsSelectedPagination', this.index);
    Session.set('hospitalsSkipCount', this.index * Session.get('hospitalsTableLimit'));
  },
  'click .hospitalRow':function(){
    Session.set('selectedUser', this._id);
    Router.go('/hospital/' + this._id);
    //alert(this._id);
  }
});


Template.hospitalsListPage.helpers({
  getPaginationCount: function(){
    return Session.get('hospitalsPaginationCount');
  },
  paginationButtonList: function(){
    var paginationArray = [];
    for (var i = 0; i < Session.get('hospitalsPaginationCount'); i++) {
      paginationArray[i] = {
        index: i
      };
    }
    if(paginationArray.length > 1){
      return paginationArray;
    }else{
      return [];
    }
  },
  isTwentyActive: function(){
    if(Session.get('hospitalsTableLimit') === 20){
      return "active";
    }
  },
  isFiftyActive: function(){
    if(Session.get('hospitalsTableLimit') === 50){
      return "active";
    }
  },
  isHundredActive: function(){
    if(Session.get('hospitalsTableLimit') === 100){
      return "active";
    }
  }
});



Template.paginationButton.helpers({
  pageActive: function(){
    if(this.index === Session.get('hospitalsSelectedPagination')){
      return "active";
    }
  },
  getPage: function(){
    return this.index + 1;
  }
});
