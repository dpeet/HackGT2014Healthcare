
Router.map(function(){
  this.route('userDrugPreviewPage', {
    path: '/userDrug/:id',
    template: 'userDrugPreviewPage',
    waitOn: function(){
      return Meteor.subscribe('userDrugs');
    },
    data: function () {
      return UserDrugs.findOne({_id: this.params.id});
    },
  });
});

Template.userDrugPreviewPage.events({
  'click #userDrugEditButton':function(){
    Router.go('/edituserDrug/' + this._id);
  },
  'click #userDrugDeleteButton':function(){
    if(confirm('Are you sure you want to delete ' + this.name +  "?")){
      UserDrugs.remove({_id: this._id});
      Router.go('/');
    }
  }
});
Template.userDrugPreviewPage.helpers({

});
