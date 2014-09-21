
//------------------------------------------------
// ROUTING

Router.map(function(){
  this.route('loginPage', {
    path: '/login',
    template: 'loginPage'
  });
});


Template.login.rendered = function()
{
    Accounts._loginButtonsSession.set('dropdownVisible', true);
};