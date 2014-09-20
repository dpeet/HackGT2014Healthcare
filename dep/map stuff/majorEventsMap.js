
Router.map(function(){
  this.route('majorEventsMapPage', {
    path: '/majorEvent/:id',
    template: 'majorEventsMapPage',
    waitOn: function(){
      return Meteor.subscribe('majorEvents');
    },
    data: function () {
      return MajorEvents.findOne({_id: this.params.id});
    },
  });
});
Template.majorEventsMapPage.events({
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
Template.majorEventsMapPage.helpers({

});
