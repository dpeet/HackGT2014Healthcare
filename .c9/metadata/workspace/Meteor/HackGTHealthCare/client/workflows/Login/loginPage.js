{"filter":false,"title":"loginPage.js","tooltip":"/Meteor/HackGTHealthCare/client/workflows/Login/loginPage.js","undoManager":{"mark":68,"position":68,"stack":[[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":0},"end":{"row":1,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":1,"column":0},"end":{"row":12,"column":0}},"lines":["//------------------------------------------------","// ROUTING","","Router.map(function(){","  this.route('majorEventsListPage', {","    path: '/majorEvents',","    template: 'majorEventsListPage',","    waitOn: function(){","      return Meteor.subscribe('majorEvents');","    }","  });"]},{"action":"insertText","range":{"start":{"row":12,"column":0},"end":{"row":12,"column":3}},"text":"});"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":12,"column":3},"end":{"row":13,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":5,"column":14},"end":{"row":5,"column":29}},"text":"majorEventsList"},{"action":"insertText","range":{"start":{"row":5,"column":14},"end":{"row":5,"column":15}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":5,"column":15},"end":{"row":5,"column":16}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":5,"column":16},"end":{"row":5,"column":17}},"text":"g"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":5,"column":17},"end":{"row":5,"column":18}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":5,"column":18},"end":{"row":5,"column":19}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":6,"column":12},"end":{"row":6,"column":23}},"text":"majorEvents"},{"action":"insertText","range":{"start":{"row":6,"column":12},"end":{"row":6,"column":13}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":13},"end":{"row":6,"column":14}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":14},"end":{"row":6,"column":15}},"text":"g"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":15},"end":{"row":6,"column":16}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":16},"end":{"row":6,"column":17}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":7,"column":15},"end":{"row":7,"column":30}},"text":"majorEventsList"},{"action":"insertText","range":{"start":{"row":7,"column":15},"end":{"row":7,"column":16}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":7,"column":16},"end":{"row":7,"column":17}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":7,"column":17},"end":{"row":7,"column":18}},"text":"g"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":7,"column":18},"end":{"row":7,"column":19}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":7,"column":19},"end":{"row":7,"column":20}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":10,"column":0},"end":{"row":10,"column":5}},"text":"    }"},{"action":"removeLines","range":{"start":{"row":8,"column":0},"end":{"row":10,"column":0}},"nl":"\n","lines":["    waitOn: function(){","      return Meteor.subscribe('majorEvents');"]},{"action":"removeText","range":{"start":{"row":7,"column":26},"end":{"row":8,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":7,"column":25},"end":{"row":7,"column":26}},"text":","}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":7,"column":15},"end":{"row":7,"column":24}},"text":"loginPage"},{"action":"insertText","range":{"start":{"row":7,"column":15},"end":{"row":7,"column":32}},"text":"createAccountForm"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":10,"column":0},"end":{"row":11,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":11,"column":0},"end":{"row":12,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":12,"column":0},"end":{"row":12,"column":22}},"text":"// Validators, helpers"},{"action":"insertText","range":{"start":{"row":12,"column":22},"end":{"row":13,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":13,"column":0},"end":{"row":235,"column":0}},"lines":["//","","// Trim Input","function trimInput(val) {","  return val.replace(/^\\s*|\\s*$/g, \"\");","}","","// Validations","function isEmail(val, field) {","  if (val.indexOf('@') !== -1) {","      return true;","    } else {","      Session.set('displayMessage', 'Error & Please enter a valid email address.');","      return false;","    }","}","","function isValidPassword(val, field) {","  if (val.length >= 6) {","    return true;","  } else {","    Session.set('displayMessage', 'Error & Your password should be 6 characters or longer.');","    return false;","  }","}","","function isNotEmpty(val, field) {","  // if null or empty, return false","  if (!val || val === ''){","    Session.set('displayMessage', 'Error & Please fill in all required fields.');","    return false;","  }","  return true;","}","","// Login Form Helpers","Template.loginForm.helpers({","","  loginForm: function(){","    if (!Session.get('formView'))","      return true;","  },","","  createAccount: function(){","    return Session.equals('formView', 'createAccountForm');","  },","","  passwordRecovery: function(){","    return Session.equals('formView', 'passwordRecoveryForm');","  }","","});","","// On successful login, hide the overlay button. And","// if we are in the create project flow, then create","// the project and move to the project view.","function onLogin(err){","  if (err) {","    Session.set('displayMessage', 'Login Error &' + err.reason);","    return;","  }","","  if (Session.get('createProjectFlow'))","    createProject();","","  Session.set('overlay', null);","}","","// Create a project if we are in 'createProjectFlow'.","function createProject(){","  var videoObject = Session.get('createProjectFlow');","","  var newProject = {","    user: Meteor.userId(),","    created: new Date(),","    type: videoObject.type,","    url : videoObject.url","  };","","  if (videoObject.type === 'html') {","    newProject.name = videoObject.name;","  }","","  // actually insert new object into database","  var newVideo = Videos.insert(newProject);","  Router.navigate('project/' + newVideo);","","  delete Subtitler.videoNode;","  Session.set('currentVideo', newVideo);","  Session.set('loadingError', null);","  Session.set('currentView', 'app');","  Session.set('createProjectFlow', null);","}","","","// Login Form Events","Template.loginForm.events({","","  'submit #login-form' : function(e, t) {","    e.preventDefault();","    var email = trimInput(t.find('#login-email').value.toLowerCase())","      , password = t.find('#login-password').value;","","    if (isNotEmpty(email, 'loginError')","        && isNotEmpty(password, 'loginError'))","    {","      Meteor.loginWithPassword(email, password, function(err){","        onLogin(err);","      });","    }","","    return false;","  },","","  'click #forgot-password' : function(e, t) {","    Session.set('formView', 'passwordRecoveryForm');","  },","","  'click #create-account' : function(e, t) {","    Session.set('formView', 'createAccountForm');","  },","","  'click a.google' : function(e, t){","    Meteor.loginWithGoogle(function(err){","      onLogin(err);","    });","  },","","  'click a.facebook' : function(e, t){","    Meteor.loginWithFacebook(function(err){","     onLogin(err);","    });","  },","","  'click a.twitter' : function(e, t){","    Meteor.loginWithTwitter(function(err){","      onLogin(err);","    });","  }","","});","","// Reset our Session variables when the template","// is destroyed.","Template.loginForm.destroyed = function(){","  Session.set('formView', null);","};","","// Create an account and login the user.","Template.createAccountForm.events({","","  'submit #register-form' : function(e, t) {","    var email = trimInput(t.find('#account-email').value.toLowerCase())","      , password = t.find('#account-password').value;","","    if (isNotEmpty(email, 'accountError')","        && isNotEmpty(password, 'accountError')","        && isEmail(email, 'accountError')","        && isValidPassword(password, 'accountError'))","    {","      Session.set('loading', true);","      Accounts.createUser({email: email, password : password}, function(err){","        if (err && err.error === 403) {","          Session.set('displayMessage', 'Account Creation Error &' + err.reason);","          Session.set('loading', false);","        } else {","          if (Session.get('createProjectFlow')) createProject();","          Session.set('overlay', null);","        }","        Session.set('loading', false);","      });","    }","    return false;","  }","","});","","Template.passwordRecoveryForm.helpers({","","  resetToken: function(){","    return Session.get('resetPassword');","  }","","});","","Template.passwordRecoveryForm.events({","","  'submit #recovery-form' : function(e, t) {","      var email = trimInput(t.find('#recovery-email').value);","      if (isNotEmpty(email, 'recoveryError') && isEmail(email, 'recoveryError')) {","        Session.set('loading', true);","        Accounts.forgotPassword({email: email}, function(err){","        if (err)","          Session.set('displayMessage', 'Password Reset Error & ' + err.reason);","        else {","          Session.set('displayMessage', 'Email Sent & Please check your email to reset your password.');","          Session.set('passwordView', null);","          Router.navigate('');","        }","        Session.set('loading', false);","      });","      }","      return false;","    },","","    'submit #new-password' : function(e, t) {","      var pw = t.find('#new-password-password').value;","      if (isNotEmpty(pw) && isValidPassword(pw)) {","        Session.set('loading', true);","        Accounts.resetPassword(Session.get('resetPassword'), pw, function(err){","          if (err)","            Session.set('displayMessage', 'Password Reset Error & '+ err.reason);","          else {","            Session.set('currentView', 'library');","            Session.set('resetPassword', null);","            Router.navigate('library');","          }","          Session.set('loading', false);","        });","      }","    return false;","    }"]},{"action":"insertText","range":{"start":{"row":235,"column":0},"end":{"row":235,"column":3}},"text":"});"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":80,"column":0},"end":{"row":80,"column":1}},"text":"<"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":80,"column":1},"end":{"row":80,"column":2}},"text":"!"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":80,"column":2},"end":{"row":80,"column":3}},"text":"-"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":80,"column":3},"end":{"row":80,"column":4}},"text":"-"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":80,"column":3},"end":{"row":80,"column":4}},"text":"-"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":80,"column":2},"end":{"row":80,"column":3}},"text":"-"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":80,"column":1},"end":{"row":80,"column":2}},"text":"!"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":80,"column":0},"end":{"row":80,"column":1}},"text":"<"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":80,"column":0},"end":{"row":80,"column":1}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":80,"column":1},"end":{"row":80,"column":2}},"text":"*"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":105,"column":1},"end":{"row":106,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":106,"column":0},"end":{"row":106,"column":1}},"text":"*"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":106,"column":1},"end":{"row":106,"column":2}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":78,"column":31},"end":{"row":79,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":79,"column":0},"end":{"row":79,"column":2}},"text":"  "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":79,"column":2},"end":{"row":79,"column":40}},"text":"Router.navigate('project/' + newVideo)"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":79,"column":19},"end":{"row":79,"column":39}},"text":"project/' + newVideo"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":79,"column":19},"end":{"row":79,"column":20}},"text":"'"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":79,"column":19},"end":{"row":79,"column":31}},"text":"/majorEvents"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":79,"column":33},"end":{"row":79,"column":34}},"text":";"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":7,"column":15},"end":{"row":7,"column":32}},"text":"createAccountForm"},{"action":"insertText","range":{"start":{"row":7,"column":15},"end":{"row":7,"column":24}},"text":"loginPage"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":57,"column":39},"end":{"row":57,"column":56}},"text":"createAccountForm"},{"action":"insertText","range":{"start":{"row":57,"column":39},"end":{"row":57,"column":48}},"text":"loginPage"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":134,"column":29},"end":{"row":134,"column":46}},"text":"createAccountForm"},{"action":"insertText","range":{"start":{"row":134,"column":29},"end":{"row":134,"column":38}},"text":"loginPage"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":164,"column":9},"end":{"row":164,"column":26}},"text":"createAccountForm"},{"action":"insertText","range":{"start":{"row":164,"column":9},"end":{"row":164,"column":18}},"text":"loginPage"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":237,"column":0},"end":{"row":237,"column":3}},"text":"});"},{"action":"removeLines","range":{"start":{"row":12,"column":0},"end":{"row":237,"column":0}},"nl":"\n","lines":["// Validators, helpers","//","","// Trim Input","function trimInput(val) {","  return val.replace(/^\\s*|\\s*$/g, \"\");","}","","// Validations","function isEmail(val, field) {","  if (val.indexOf('@') !== -1) {","      return true;","    } else {","      Session.set('displayMessage', 'Error & Please enter a valid email address.');","      return false;","    }","}","","function isValidPassword(val, field) {","  if (val.length >= 6) {","    return true;","  } else {","    Session.set('displayMessage', 'Error & Your password should be 6 characters or longer.');","    return false;","  }","}","","function isNotEmpty(val, field) {","  // if null or empty, return false","  if (!val || val === ''){","    Session.set('displayMessage', 'Error & Please fill in all required fields.');","    return false;","  }","  return true;","}","","// Login Form Helpers","Template.loginForm.helpers({","","  loginForm: function(){","    if (!Session.get('formView'))","      return true;","  },","","  createAccount: function(){","    return Session.equals('formView', 'loginPage');","  },","","  passwordRecovery: function(){","    return Session.equals('formView', 'passwordRecoveryForm');","  }","","});","","// On successful login, hide the overlay button. And","// if we are in the create project flow, then create","// the project and move to the project view.","function onLogin(err){","  if (err) {","    Session.set('displayMessage', 'Login Error &' + err.reason);","    return;","  }","","  if (Session.get('createProjectFlow'))","    createProject();","","  Session.set('overlay', null);","  Router.navigate('/majorEvents');","}","/*","// Create a project if we are in 'createProjectFlow'.","function createProject(){","  var videoObject = Session.get('createProjectFlow');","","  var newProject = {","    user: Meteor.userId(),","    created: new Date(),","    type: videoObject.type,","    url : videoObject.url","  };","","  if (videoObject.type === 'html') {","    newProject.name = videoObject.name;","  }","","  // actually insert new object into database","  var newVideo = Videos.insert(newProject);","  Router.navigate('project/' + newVideo);","","  delete Subtitler.videoNode;","  Session.set('currentVideo', newVideo);","  Session.set('loadingError', null);","  Session.set('currentView', 'app');","  Session.set('createProjectFlow', null);","}","*/","","","// Login Form Events","Template.loginForm.events({","","  'submit #login-form' : function(e, t) {","    e.preventDefault();","    var email = trimInput(t.find('#login-email').value.toLowerCase())","      , password = t.find('#login-password').value;","","    if (isNotEmpty(email, 'loginError')","        && isNotEmpty(password, 'loginError'))","    {","      Meteor.loginWithPassword(email, password, function(err){","        onLogin(err);","      });","    }","","    return false;","  },","","  'click #forgot-password' : function(e, t) {","    Session.set('formView', 'passwordRecoveryForm');","  },","","  'click #create-account' : function(e, t) {","    Session.set('formView', 'loginPage');","  },","","  'click a.google' : function(e, t){","    Meteor.loginWithGoogle(function(err){","      onLogin(err);","    });","  },","","  'click a.facebook' : function(e, t){","    Meteor.loginWithFacebook(function(err){","     onLogin(err);","    });","  },","","  'click a.twitter' : function(e, t){","    Meteor.loginWithTwitter(function(err){","      onLogin(err);","    });","  }","","});","","// Reset our Session variables when the template","// is destroyed.","Template.loginForm.destroyed = function(){","  Session.set('formView', null);","};","","// Create an account and login the user.","Template.loginPage.events({","","  'submit #register-form' : function(e, t) {","    var email = trimInput(t.find('#account-email').value.toLowerCase())","      , password = t.find('#account-password').value;","","    if (isNotEmpty(email, 'accountError')","        && isNotEmpty(password, 'accountError')","        && isEmail(email, 'accountError')","        && isValidPassword(password, 'accountError'))","    {","      Session.set('loading', true);","      Accounts.createUser({email: email, password : password}, function(err){","        if (err && err.error === 403) {","          Session.set('displayMessage', 'Account Creation Error &' + err.reason);","          Session.set('loading', false);","        } else {","          if (Session.get('createProjectFlow')) createProject();","          Session.set('overlay', null);","        }","        Session.set('loading', false);","      });","    }","    return false;","  }","","});","","Template.passwordRecoveryForm.helpers({","","  resetToken: function(){","    return Session.get('resetPassword');","  }","","});","","Template.passwordRecoveryForm.events({","","  'submit #recovery-form' : function(e, t) {","      var email = trimInput(t.find('#recovery-email').value);","      if (isNotEmpty(email, 'recoveryError') && isEmail(email, 'recoveryError')) {","        Session.set('loading', true);","        Accounts.forgotPassword({email: email}, function(err){","        if (err)","          Session.set('displayMessage', 'Password Reset Error & ' + err.reason);","        else {","          Session.set('displayMessage', 'Email Sent & Please check your email to reset your password.');","          Session.set('passwordView', null);","          Router.navigate('');","        }","        Session.set('loading', false);","      });","      }","      return false;","    },","","    'submit #new-password' : function(e, t) {","      var pw = t.find('#new-password-password').value;","      if (isNotEmpty(pw) && isValidPassword(pw)) {","        Session.set('loading', true);","        Accounts.resetPassword(Session.get('resetPassword'), pw, function(err){","          if (err)","            Session.set('displayMessage', 'Password Reset Error & '+ err.reason);","          else {","            Session.set('currentView', 'library');","            Session.set('resetPassword', null);","            Router.navigate('library');","          }","          Session.set('loading', false);","        });","      }","    return false;","    }"]}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":12,"column":0},"end":{"row":12,"column":36}},"text":"Template.login.rendered = function()"},{"action":"insertText","range":{"start":{"row":12,"column":36},"end":{"row":13,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":13,"column":0},"end":{"row":15,"column":0}},"lines":["{","    Accounts._loginButtonsSession.set('dropdownVisible', true);"]},{"action":"insertText","range":{"start":{"row":15,"column":0},"end":{"row":15,"column":2}},"text":"};"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":12,"column":9},"end":{"row":12,"column":14}},"text":"login"},{"action":"insertText","range":{"start":{"row":12,"column":9},"end":{"row":12,"column":18}},"text":"loginPage"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":11,"column":0},"end":{"row":11,"column":1}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":11,"column":1},"end":{"row":11,"column":2}},"text":"f"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":11,"column":2},"end":{"row":11,"column":4}},"text":"()"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":11,"column":3},"end":{"row":11,"column":4}},"text":"U"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":11,"column":4},"end":{"row":11,"column":5}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":11,"column":5},"end":{"row":11,"column":6}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":11,"column":6},"end":{"row":11,"column":7}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":11,"column":0},"end":{"row":11,"column":8}},"text":"if(User)"},{"action":"insertText","range":{"start":{"row":11,"column":0},"end":{"row":11,"column":1}},"text":"="}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":11,"column":0},"end":{"row":11,"column":1}},"text":"="}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":11,"column":0},"end":{"row":11,"column":23}},"text":"Template.login.events({"},{"action":"insertText","range":{"start":{"row":11,"column":23},"end":{"row":12,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":12,"column":0},"end":{"row":15,"column":0}},"lines":["  'click #logout-button': function() {","    Meteor.logout();","  }"]},{"action":"insertText","range":{"start":{"row":15,"column":0},"end":{"row":15,"column":3}},"text":"});"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":3},"end":{"row":16,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":16,"column":0},"end":{"row":16,"column":1}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":16,"column":1},"end":{"row":16,"column":2}},"text":"*"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":20,"column":2},"end":{"row":21,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":21,"column":0},"end":{"row":21,"column":1}},"text":"*"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":21,"column":1},"end":{"row":21,"column":2}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":3},"end":{"row":16,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":10,"column":0},"end":{"row":11,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":11,"column":0},"end":{"row":12,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":13,"column":9},"end":{"row":13,"column":14}},"text":"login"},{"action":"insertText","range":{"start":{"row":13,"column":9},"end":{"row":13,"column":18}},"text":"loginPage"}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":5,"column":27},"end":{"row":5,"column":27},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":20,"state":"comment_regex_allowed","mode":"ace/mode/javascript"}},"timestamp":1411272358929,"hash":"9a5df718955c71272ab3d7b7c754e9043e0d8a45"}