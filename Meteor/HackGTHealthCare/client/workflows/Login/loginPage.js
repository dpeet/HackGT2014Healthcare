
//------------------------------------------------
// ROUTING

Router.map(function(){
  this.route('loginPage', {
    path: '/login',
    template: 'loginPage'
  });
});



Template.login.events({
  'click #logout-button': function() {
    Meteor.logout();
  }
});

/*
Template.loginPage.rendered = function()
{
    Accounts._loginButtonsSession.set('dropdownVisible', true);
};
*/