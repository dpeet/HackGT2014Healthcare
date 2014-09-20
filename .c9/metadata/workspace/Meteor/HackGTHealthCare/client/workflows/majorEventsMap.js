{"changed":true,"filter":false,"title":"majorEventsMap.js","tooltip":"/Meteor/HackGTHealthCare/client/workflows/majorEventsMap.js","value":"\nRouter.map(function(){\n  this.route('majorEventPreviewPage', {\n    path: '/majorEvent/:id',\n    template: 'majorEventPreviewPage',\n    waitOn: function(){\n      return Meteor.subscribe('majorEvents');\n    },\n    data: function () {\n      return MajorEvents.findOne({_id: this.params.id});\n    },\n  });\n});\nTemplate.majorEventPreviewPage.events({\n  'click #majorEventEditButton':function(){\n    Router.go('/editmajorEvent/' + this._id);\n  },\n  'click #majorEventDeleteButton':function(){\n    if(confirm('Are you sure you want to delete ' + this.title +  \"?\")){\n      MajorEvents.remove({_id: this._id});\n      Router.go('/');\n    }\n  }\n});\nTemplate.majorEventPreviewPage.helpers({\n\n});\n","undoManager":{"mark":-1,"position":0,"stack":[[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":0},"end":{"row":1,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":1,"column":0},"end":{"row":27,"column":0}},"lines":["Router.map(function(){","  this.route('majorEventPreviewPage', {","    path: '/majorEvent/:id',","    template: 'majorEventPreviewPage',","    waitOn: function(){","      return Meteor.subscribe('majorEvents');","    },","    data: function () {","      return MajorEvents.findOne({_id: this.params.id});","    },","  });","});","Template.majorEventPreviewPage.events({","  'click #majorEventEditButton':function(){","    Router.go('/editmajorEvent/' + this._id);","  },","  'click #majorEventDeleteButton':function(){","    if(confirm('Are you sure you want to delete ' + this.title +  \"?\")){","      MajorEvents.remove({_id: this._id});","      Router.go('/');","    }","  }","});","Template.majorEventPreviewPage.helpers({","","});"]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":27,"column":0},"end":{"row":27,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1411249541106}