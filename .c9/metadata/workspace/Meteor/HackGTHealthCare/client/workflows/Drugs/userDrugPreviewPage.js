{"filter":false,"title":"userDrugPreviewPage.js","tooltip":"/Meteor/HackGTHealthCare/client/workflows/Drugs/userDrugPreviewPage.js","undoManager":{"mark":0,"position":0,"stack":[[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":18,"column":0},"end":{"row":18,"column":5}},"text":"    }"},{"action":"removeLines","range":{"start":{"row":8,"column":0},"end":{"row":18,"column":0}},"nl":"\n","lines":["      var d = UserDrugs.findOne({","        _id: this.params.id","      });","      if (d.personalEffect == \"Good\") {","        d.label = \"label-success\";","      }","      else if (d.personalEffect == \"Bad\") {","        d.label = \"label-danger\";","      }","      return d;"]},{"action":"insertText","range":{"start":{"row":8,"column":0},"end":{"row":8,"column":33}},"text":"      var d = UserDrugs.findOne({"},{"action":"insertText","range":{"start":{"row":8,"column":33},"end":{"row":9,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":9,"column":0},"end":{"row":18,"column":0}},"lines":["        _id: this.params.id","      });","      if (d.personalEffect == \"Good\") {","        d.label = \"label-success\";","      }","      else if (d.personalEffect == \"Bad\") {","        d.label = \"label-danger\";","      }","      return d;"]},{"action":"insertText","range":{"start":{"row":18,"column":0},"end":{"row":18,"column":5}},"text":"    }"}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":7,"column":22},"end":{"row":7,"column":22},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1411305977808,"hash":"084b0f70a86f0bb231d66acc4041063b1894e484"}