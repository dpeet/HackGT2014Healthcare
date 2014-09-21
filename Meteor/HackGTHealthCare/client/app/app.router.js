
//--------------------------------------------------------------
// Global Configuration


/*Was originally this
Router.configure({
  layoutTemplate: 'appLayout',
  yieldTemplates: {
    'navbarHeader': {to: 'header'},
    'navbarFooter': {to: 'footer'}
  }
});
*/
Router.configure({
  layoutTemplate: 'appLayout',
  yieldTemplates: {
    'navbarHeader': {to: 'header'}
  }
});


Router.map(function(){
  this.route('homeRoute', {
    path: '/',
    template: "loginPage"
  });
});

/* Previous edit

Router.map(function(){
  this.route('homeRoute', {
    path: '/',
    template: "loginPage",
    waitOn: function(){
      return Meteor.subscribe('majorEvents');
    }
  });
});

*/
