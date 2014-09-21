
Router.map(function(){
  this.route('hospitalPreviewPage', {
    path: '/hospital/:id',
    template: 'hospitalPreviewPage',
    waitOn: function(){
      return Meteor.subscribe('hospital');
    },
    data: function () {
      return Hospital.findOne({_id: this.params.id});
    },
  });
});

Template.hospitalPreviewPage.events({
  'click #hospitalEditButton':function(){
    Router.go('/editHospital/' + this._id);
  },
  'click #hospitalDeleteButton':function(){
    if(confirm('Are you sure you want to delete ' + this.name +  "?")){
      Hospital.remove({_id: this._id});
      Router.go('/hospitals');
    }
  }
});
Template.hospitalPreviewPage.helpers({

});
