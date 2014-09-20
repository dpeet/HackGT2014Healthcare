
Router.map(function(){
  this.route('majorEventPreviewPage', {
    path: '/majorEvent/:id',
    template: 'majorEventPreviewPage',
    waitOn: function(){
      return Meteor.subscribe('majorEvents');
    },
    data: function () {
      return MajorEvents.findOne({_id: this.params.id});
    },
  });
});
Template.majorEventPreviewPage.events({
  'click #majorEventEditButton':function(){
    Router.go('/editmajorEvent/' + this._id);
  },
  'click #majorEventDeleteButton':function(){
    if(confirm('Are you sure you want to delete ' + this.FirstName + " " + this.LastName + "?")){
      MajorEvents.remove({_id: this._id});
      Router.go('/');
    }
  }
});
Template.majorEventPreviewPage.helpers({

});
