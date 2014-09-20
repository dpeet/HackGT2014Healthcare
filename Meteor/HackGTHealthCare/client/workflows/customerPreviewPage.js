
Router.map(function(){
  this.route('customerPreviewPage', {
    path: '/customer/:id',
    template: 'customerPreviewPage',
    waitOn: function(){
      return Meteor.subscribe('customers');
    },
    data: function () {
      return Customers.findOne({_id: this.params.id});
    },
  });
});
Template.customerPreviewPage.events({
  'click #customerEditButton':function(){
    Router.go('/editcustomer/' + this._id);
  },
  'click #customerDeleteButton':function(){
    if(confirm('Are you sure you want to delete ' + this.FirstName + " " + this.LastName + "?")){
      Customers.remove({_id: this._id});
      Router.go('/');
    }
  }
});
Template.customerPreviewPage.helpers({

});
