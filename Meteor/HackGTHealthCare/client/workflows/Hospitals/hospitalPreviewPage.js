
Router.map(function(){
  this.route('hospitalPreviewPage', {
    path: '/hospital/:id',
    template: 'hospitalPreviewPage',
    waitOn: function(){
      return Meteor.subscribe('hospital');
      return Meteor.subscribe('majorEvents');
    },
    data: function () {
      var h = Hospitals.findOne({_id: this.params.id});
      h.tv = MajorEvents.find({hospitalId: h._id}).count();
      h.hospitalEvent = MajorEvents.find({_id: h._id}).fetch();
      return h;
    },
  });
});

Template.hospitalPreviewPage.events({
  'click #hospitalEditButton':function(){
    Router.go('/editHospital/' + this._id);
  },
  'click #hospitalDeleteButton':function(){
    if(confirm('Are you sure you want to delete ' + this.name +  "?")){
      Hospitals.remove({_id: this._id});
      Router.go('/hospitals');
    }
  }
});
Template.hospitalPreviewPage.helpers({

});