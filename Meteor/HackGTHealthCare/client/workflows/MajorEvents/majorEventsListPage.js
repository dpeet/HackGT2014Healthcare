Session.setDefault('majorEventsReceivedData', false);
Session.setDefault('majorEventsSearchFilter', '');
Session.setDefault('majorEventsTableLimit', 20);
Session.setDefault('majorEventsPaginationCount', 1);
Session.setDefault('majorEventsSelectedPagination', 0);
Session.setDefault('majorEventsSkipCount', 0);


//------------------------------------------------
// ROUTING

Router.map(function(){
  this.route('majorEventsListPage', {
    path: '/majorEvents',
    template: 'majorEventsListPage',
    waitOn: function(){
      return Meteor.subscribe('majorEvents');
      return Meteor.subscribe('hospitals');
    }
  });
});

//------------------------------------------------
// HELPERS



Template.majorEventsListPage.helpers({
  majorEventsList: function(){
    var majorEventsCount = MajorEvents.find({$or:[
      {title: { $regex: Session.get('majorEventsSearchFilter'), $options: 'i' }},
      {date: { $regex: Session.get('majorEventsSearchFilter'), $options: 'i' }},
      {time: { $regex: Session.get('majorEventsSearchFilter'), $options: 'i' }},
      {tags: { $regex: Session.get('majorEventsSearchFilter'), $options: 'i' }},
      {hospitalId: { $regex: Session.get('majorEventsSearchFilter'), $options: 'i' }},
      {otherLocation: { $regex: Session.get('majorEventsSearchFilter'), $options: 'i' }},
      {notes: { $regex: Session.get('majorEventsSearchFilter'), $options: 'i' }},
      {drugs: { $regex: Session.get('majorEventsSearchFilter'), $options: 'i' }},
      {createdAt: { $regex: Session.get('majorEventsSearchFilter'), $options: 'i' }}

      ]
    }).count();
    Session.set('majorEventsReceivedData', new Date());
    Session.set('majorEventsPaginationCount', Math.floor((majorEventsCount - 1) / Session.get('majorEventsTableLimit')) + 1);
    var e = MajorEvents.find({$or:[
      {title: { $regex: Session.get('majorEventsSearchFilter'), $options: 'i' }},
      {date: { $regex: Session.get('majorEventsSearchFilter'), $options: 'i' }},
      {time: { $regex: Session.get('majorEventsSearchFilter'), $options: 'i' }},
      {tags: { $regex: Session.get('majorEventsSearchFilter'), $options: 'i' }},
      {hospitalId: { $regex: Session.get('majorEventsSearchFilter'), $options: 'i' }},
      {otherLocation: { $regex: Session.get('majorEventsSearchFilter'), $options: 'i' }},
      {notes: { $regex: Session.get('majorEventsSearchFilter'), $options: 'i' }},
      {drugs: { $regex: Session.get('majorEventsSearchFilter'), $options: 'i' }},
      {createdAt: { $regex: Session.get('majorEventsSearchFilter'), $options: 'i' }}
      ]
    },{limit: Session.get('majorEventsTableLimit'), skip: Session.get('majorEventsSkipCount')});
    
    if (e) {
      for (var i = 0; i < e.count(); i++) {
        console.log(e.hospitalId + " - " + e.hospitalName);
        e.hospitalName = Hospitals.findOne({_id:e.hospitalId}).name;
      }
    }
    
    return e;
  },
  rendered: function(){
    $(this.find('#majorEventsTable')).tablesorter();

    // Deps.autorun(function(){
    //   console.log(Session.get('majorEventsReceivedData'));
    //   setTimeout(function(){
    //     $("#majorEventsTable").trigger("update");
    //   }, 200);
    // });
  }
});





Template.majorEventsListPage.events({
  'keyup #majorEventsSearchInput':function(){
    Session.set('majorEventsSearchFilter', $('#majorEventsSearchInput').val());
    Session.setDefault('majorEventsSelectedPagination', 0);
    Session.setDefault('majorEventsSkipCount', 0);
  },
  'click #twentyButton':function(){
    Session.set('majorEventsTableLimit', 20);
  },
  'click #fiftyButton': function(){
    Session.set('majorEventsTableLimit', 50);
  },
  'click #hundredButton': function(){
    Session.set('majorEventsTableLimit', 100);
  },
  'click .pagination-btn':function(){
    //alert(JSON.stringify(this.index));
    Session.set('majorEventsSelectedPagination', this.index);
    Session.set('majorEventsSkipCount', this.index * Session.get('majorEventsTableLimit'));
  },
  'click .majorEventRow':function(){
    Session.set('selectedUser', this._id);
    Router.go('/majorEvent/' + this._id);
    //alert(this._id);
  }
});


Template.majorEventsListPage.helpers({
  getPaginationCount: function(){
    return Session.get('majorEventsPaginationCount');
  },
  paginationButtonList: function(){
    var paginationArray = [];
    for (var i = 0; i < Session.get('majorEventsPaginationCount'); i++) {
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
    if(Session.get('majorEventsTableLimit') === 20){
      return "active";
    }
  },
  isFiftyActive: function(){
    if(Session.get('majorEventsTableLimit') === 50){
      return "active";
    }
  },
  isHundredActive: function(){
    if(Session.get('majorEventsTableLimit') === 100){
      return "active";
    }
  }
});



Template.paginationButton.helpers({
  pageActive: function(){
    if(this.index === Session.get('majorEventsSelectedPagination')){
      return "active";
    }
  },
  getPage: function(){
    return this.index + 1;
  }
});
