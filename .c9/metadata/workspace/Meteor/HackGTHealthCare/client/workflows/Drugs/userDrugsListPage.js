{"filter":false,"title":"userDrugsListPage.js","tooltip":"/Meteor/HackGTHealthCare/client/workflows/Drugs/userDrugsListPage.js","undoManager":{"mark":10,"position":10,"stack":[[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":24,"column":0},"end":{"row":24,"column":18}},"text":"data: function() {"},{"action":"insertText","range":{"start":{"row":24,"column":18},"end":{"row":25,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":25,"column":0},"end":{"row":35,"column":0}},"lines":["      var d = UserDrugs.findOne({","        _id: this.params.id","      });","      if (d.personalEffect == \"Good\") {","        d.label = \"label-success\";","      }","      else if (d.personalEffect == \"Bad\") {","        d.label = \"label-danger\";","      }","      return d;"]},{"action":"insertText","range":{"start":{"row":35,"column":0},"end":{"row":35,"column":5}},"text":"    }"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":16,"column":43},"end":{"row":17,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":17,"column":0},"end":{"row":17,"column":6}},"text":"      "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":6},"end":{"row":18,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":18,"column":0},"end":{"row":18,"column":6}},"text":"      "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":18,"column":4},"end":{"row":18,"column":6}},"text":"  "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":18,"column":4},"end":{"row":18,"column":22}},"text":"data: function() {"},{"action":"insertText","range":{"start":{"row":18,"column":22},"end":{"row":19,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":19,"column":0},"end":{"row":29,"column":0}},"lines":["      var d = UserDrugs.findOne({","        _id: this.params.id","      });","      if (d.personalEffect == \"Good\") {","        d.label = \"label-success\";","      }","      else if (d.personalEffect == \"Bad\") {","        d.label = \"label-danger\";","      }","      return d;"]},{"action":"insertText","range":{"start":{"row":29,"column":0},"end":{"row":29,"column":5}},"text":"    }"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":29,"column":3},"end":{"row":29,"column":5}},"text":" }"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":6},"end":{"row":17,"column":8}},"text":" }"},{"action":"removeText","range":{"start":{"row":17,"column":0},"end":{"row":17,"column":7}},"text":"       "},{"action":"insertText","range":{"start":{"row":17,"column":0},"end":{"row":17,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":29,"column":2},"end":{"row":29,"column":3}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":29,"column":0},"end":{"row":29,"column":2}},"text":"  "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":28,"column":15},"end":{"row":29,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":5},"end":{"row":17,"column":6}},"text":","}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":25,"column":22},"end":{"row":25,"column":22},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1411304318146,"hash":"09efd55afd0b9b313a66848f44828658fe4c2d3c"}