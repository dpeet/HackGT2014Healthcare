Router.map(function() {
  this.route('userDrugPreviewPage', {
    path: '/userDrug/:id',
    template: 'userDrugPreviewPage',
    waitOn: function() {
      return Meteor.subscribe('userDrugs');
    },
    data: function() {
      var d = UserDrugs.findOne({
        _id: this.params.id
      });
      if (d.personalEffect == "Good") {
        d.label = "label-success";
      }
      else if (d.personalEffect == "Bad") {
        d.label = "label-danger";
      }
      return d;
    }
  });
});

Template.userDrugPreviewPage.events({
  'click #userDrugEditButton': function() {
    Router.go('/edituserDrug/' + this._id);
  },
  'click #userDrugDeleteButton': function() {
    if (confirm('Are you sure you want to delete ' + this.name + "?")) {
      UserDrugs.remove({
        _id: this._id
      });
      Router.go('/');
    }
  }
});
Template.userDrugPreviewPage.helpers({

});
