
Router.map(function(){
  this.route('majorEventPreviewPage', {
    path: '/majorEvent/:id',
    template: 'majorEventPreviewPage',
    waitOn: function(){
      return Meteor.subscribe('majorEvents');
      return Meteor.subscribe('hospital');
      return Meteor.subscribe('userDrugs');
    },
    data: function () {
      var e = MajorEvents.findOne({_id: this.params.id});
      e.hospitalName = Hospitals.findOne({_id: e.hospitalId});
      e.drugArray = e.drugs.split(',');
      var tmpArr;
      for (var i = 0; i < e.drugArray.length; i++) {
        tmpArr.push(UserDrugs.findOne({_id: e.drugArray[i]}));
      }
      e.drugArray = tmpArr;
      return e;
    },
  });
});

Template.majorEventPreviewPage.events({
  'click #majorEventEditButton':function(){
    Router.go('/editmajorEvent/' + this._id);
  },
  'click #majorEventDeleteButton':function(){
    if(confirm('Are you sure you want to delete ' + this.title +  "?")){
      MajorEvents.remove({_id: this._id});
      Router.go('/');
    }
  }
});
Template.majorEventPreviewPage.helpers({

});
