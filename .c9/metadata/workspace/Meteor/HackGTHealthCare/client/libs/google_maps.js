{"filter":false,"title":"google_maps.js","tooltip":"/Meteor/HackGTHealthCare/client/libs/google_maps.js","undoManager":{"mark":100,"position":100,"stack":[[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":51,"column":80},"end":{"row":51,"column":81}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":51,"column":81},"end":{"row":51,"column":82}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":51,"column":82},"end":{"row":51,"column":83}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":51,"column":83},"end":{"row":51,"column":84}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":51,"column":84},"end":{"row":51,"column":85}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":51,"column":85},"end":{"row":51,"column":86}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":51,"column":86},"end":{"row":51,"column":87}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":51,"column":87},"end":{"row":51,"column":89}},"text":"()"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":51,"column":90},"end":{"row":51,"column":91}},"text":";"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":51,"column":61},"end":{"row":51,"column":62}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":53,"column":11},"end":{"row":54,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":54,"column":0},"end":{"row":54,"column":8}},"text":"        "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":54,"column":8},"end":{"row":55,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":55,"column":0},"end":{"row":55,"column":8}},"text":"        "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":58,"column":6},"end":{"row":59,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":59,"column":0},"end":{"row":59,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":59,"column":4},"end":{"row":60,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":60,"column":0},"end":{"row":60,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":60,"column":4},"end":{"row":60,"column":88}},"text":"google.maps.event.addListener(marker,'click', (function(marker,content,infowindow){ "},{"action":"insertText","range":{"start":{"row":60,"column":88},"end":{"row":61,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":61,"column":0},"end":{"row":91,"column":0}},"lines":["        return function() {","        ","        /* close the previous info-window */","       closeInfos();","        ","           infowindow.setContent(content);","           infowindow.open(map,marker);","        ","        /* keep the handle, in order to close it on next click event */","   infos[0]=infowindow;","        ","        };","    })(marker,content,infowindow)); ","","  }","  }","","function closeInfos(){"," ","   if(infos.length > 0){"," ","      /* detach the info-window from the marker ... undocumented in the API docs */","      infos[0].set(\"marker\", null);"," ","      /* and close it */","      infos[0].close();"," ","      /* blank the array */","      infos.length = 0;","   }"]},{"action":"insertText","range":{"start":{"row":91,"column":0},"end":{"row":91,"column":1}},"text":"}"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":54,"column":0},"end":{"row":54,"column":8}},"text":"        "},{"action":"removeText","range":{"start":{"row":55,"column":0},"end":{"row":55,"column":8}},"text":"        "},{"action":"removeText","range":{"start":{"row":59,"column":0},"end":{"row":59,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":60,"column":41},"end":{"row":60,"column":42}},"text":" "},{"action":"insertText","range":{"start":{"row":60,"column":68},"end":{"row":60,"column":69}},"text":" "},{"action":"insertText","range":{"start":{"row":60,"column":77},"end":{"row":60,"column":78}},"text":" "},{"action":"removeText","range":{"start":{"row":60,"column":89},"end":{"row":60,"column":90}},"text":"{"},{"action":"insertText","range":{"start":{"row":60,"column":90},"end":{"row":60,"column":91}},"text":"{"},{"action":"insertText","range":{"start":{"row":61,"column":27},"end":{"row":62,"column":0}},"text":"\n"},{"action":"removeText","range":{"start":{"row":64,"column":0},"end":{"row":64,"column":4}},"text":"    "},{"action":"removeText","range":{"start":{"row":63,"column":8},"end":{"row":64,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":64,"column":0},"end":{"row":64,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":64,"column":11},"end":{"row":64,"column":12}},"text":" "},{"action":"removeText","range":{"start":{"row":65,"column":0},"end":{"row":65,"column":8}},"text":"        "},{"action":"insertText","range":{"start":{"row":66,"column":11},"end":{"row":66,"column":12}},"text":" "},{"action":"insertText","range":{"start":{"row":67,"column":11},"end":{"row":67,"column":12}},"text":" "},{"action":"insertText","range":{"start":{"row":67,"column":32},"end":{"row":67,"column":33}},"text":" "},{"action":"removeText","range":{"start":{"row":68,"column":0},"end":{"row":68,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":68,"column":0},"end":{"row":69,"column":0}},"text":"\n"},{"action":"removeText","range":{"start":{"row":69,"column":4},"end":{"row":70,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":70,"column":3},"end":{"row":70,"column":12}},"text":"         "},{"action":"insertText","range":{"start":{"row":70,"column":20},"end":{"row":70,"column":21}},"text":" "},{"action":"insertText","range":{"start":{"row":70,"column":22},"end":{"row":70,"column":23}},"text":" "},{"action":"removeText","range":{"start":{"row":71,"column":0},"end":{"row":71,"column":8}},"text":"        "},{"action":"insertText","range":{"start":{"row":73,"column":14},"end":{"row":73,"column":15}},"text":" "},{"action":"insertText","range":{"start":{"row":73,"column":23},"end":{"row":73,"column":24}},"text":" "},{"action":"removeText","range":{"start":{"row":73,"column":37},"end":{"row":73,"column":38}},"text":" "},{"action":"removeText","range":{"start":{"row":75,"column":0},"end":{"row":75,"column":2}},"text":"  "},{"action":"removeText","range":{"start":{"row":76,"column":0},"end":{"row":76,"column":2}},"text":"  "},{"action":"insertText","range":{"start":{"row":78,"column":21},"end":{"row":78,"column":22}},"text":" "},{"action":"removeText","range":{"start":{"row":79,"column":0},"end":{"row":79,"column":1}},"text":" "},{"action":"insertText","range":{"start":{"row":80,"column":3},"end":{"row":80,"column":4}},"text":" "},{"action":"insertText","range":{"start":{"row":80,"column":6},"end":{"row":80,"column":7}},"text":" "},{"action":"insertText","range":{"start":{"row":80,"column":25},"end":{"row":80,"column":26}},"text":" "},{"action":"removeText","range":{"start":{"row":81,"column":0},"end":{"row":81,"column":1}},"text":" "},{"action":"insertText","range":{"start":{"row":82,"column":0},"end":{"row":82,"column":2}},"text":"  "},{"action":"insertText","range":{"start":{"row":83,"column":6},"end":{"row":83,"column":8}},"text":"  "},{"action":"removeText","range":{"start":{"row":84,"column":0},"end":{"row":84,"column":1}},"text":" "},{"action":"insertText","range":{"start":{"row":85,"column":6},"end":{"row":85,"column":8}},"text":"  "},{"action":"insertText","range":{"start":{"row":86,"column":6},"end":{"row":86,"column":8}},"text":"  "},{"action":"removeText","range":{"start":{"row":87,"column":0},"end":{"row":87,"column":1}},"text":" "},{"action":"insertText","range":{"start":{"row":88,"column":6},"end":{"row":88,"column":8}},"text":"  "},{"action":"insertText","range":{"start":{"row":89,"column":6},"end":{"row":89,"column":8}},"text":"  "},{"action":"insertText","range":{"start":{"row":90,"column":0},"end":{"row":90,"column":1}},"text":" "},{"action":"removeText","range":{"start":{"row":93,"column":0},"end":{"row":93,"column":4}},"text":"    "},{"action":"removeText","range":{"start":{"row":94,"column":0},"end":{"row":94,"column":4}},"text":"    "},{"action":"removeText","range":{"start":{"row":95,"column":0},"end":{"row":95,"column":1}},"text":" "},{"action":"removeText","range":{"start":{"row":95,"column":4},"end":{"row":95,"column":7}},"text":"   "},{"action":"removeText","range":{"start":{"row":96,"column":4},"end":{"row":96,"column":8}},"text":"    "},{"action":"removeText","range":{"start":{"row":97,"column":0},"end":{"row":97,"column":2}},"text":"  "},{"action":"removeText","range":{"start":{"row":97,"column":8},"end":{"row":97,"column":10}},"text":"  "},{"action":"removeText","range":{"start":{"row":98,"column":0},"end":{"row":98,"column":4}},"text":"    "},{"action":"removeText","range":{"start":{"row":99,"column":0},"end":{"row":99,"column":3}},"text":"   "},{"action":"removeText","range":{"start":{"row":99,"column":8},"end":{"row":99,"column":9}},"text":" "},{"action":"removeText","range":{"start":{"row":100,"column":0},"end":{"row":100,"column":4}},"text":"    "},{"action":"removeText","range":{"start":{"row":102,"column":4},"end":{"row":102,"column":8}},"text":"    "},{"action":"removeText","range":{"start":{"row":103,"column":0},"end":{"row":103,"column":1}},"text":" "},{"action":"removeText","range":{"start":{"row":103,"column":8},"end":{"row":103,"column":11}},"text":"   "},{"action":"removeText","range":{"start":{"row":104,"column":8},"end":{"row":104,"column":12}},"text":"    "},{"action":"removeText","range":{"start":{"row":105,"column":0},"end":{"row":105,"column":2}},"text":"  "},{"action":"removeText","range":{"start":{"row":105,"column":4},"end":{"row":105,"column":6}},"text":"  "},{"action":"removeText","range":{"start":{"row":107,"column":0},"end":{"row":107,"column":4}},"text":"    "},{"action":"removeText","range":{"start":{"row":108,"column":0},"end":{"row":108,"column":3}},"text":"   "},{"action":"removeText","range":{"start":{"row":108,"column":4},"end":{"row":108,"column":5}},"text":" "},{"action":"removeText","range":{"start":{"row":110,"column":0},"end":{"row":110,"column":4}},"text":"    "},{"action":"removeText","range":{"start":{"row":111,"column":0},"end":{"row":111,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":78,"column":23},"end":{"row":79,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":79,"column":27},"end":{"row":80,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":81,"column":37},"end":{"row":82,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":83,"column":25},"end":{"row":84,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":73,"column":0},"end":{"row":73,"column":37}},"text":"    })(marker, content, infowindow));"},{"action":"removeLines","range":{"start":{"row":61,"column":0},"end":{"row":73,"column":0}},"nl":"\n","lines":["        return function() {","","            /* close the previous info-window */","            closeInfos();","","            infowindow.setContent(content);","            infowindow.open(map, marker);","","            /* keep the handle, in order to close it on next click event */","            infos[0] = infowindow;","","        };"]},{"action":"removeText","range":{"start":{"row":60,"column":4},"end":{"row":60,"column":91}},"text":"google.maps.event.addListener(marker, 'click', (function(marker, content, infowindow) {"},{"action":"removeText","range":{"start":{"row":60,"column":4},"end":{"row":61,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":54,"column":0},"end":{"row":54,"column":87}},"text":"google.maps.event.addListener(marker, 'click', (function(marker, content, infowindow) {"},{"action":"insertText","range":{"start":{"row":54,"column":87},"end":{"row":55,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":55,"column":0},"end":{"row":67,"column":0}},"lines":["        return function() {","","            /* close the previous info-window */","            closeInfos();","","            infowindow.setContent(content);","            infowindow.open(map, marker);","","            /* keep the handle, in order to close it on next click event */","            infos[0] = infowindow;","","        };"]},{"action":"insertText","range":{"start":{"row":67,"column":0},"end":{"row":67,"column":37}},"text":"    })(marker, content, infowindow));"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":53,"column":11},"end":{"row":54,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":54,"column":0},"end":{"row":54,"column":8}},"text":"        "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":56,"column":27},"end":{"row":57,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":58,"column":25},"end":{"row":59,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":60,"column":41},"end":{"row":61,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":62,"column":34},"end":{"row":63,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":69,"column":0},"end":{"row":74,"column":0}},"nl":"\n","lines":["","    ","","}","}"]}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":79,"column":1},"end":{"row":79,"column":2}},"text":","}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":70,"column":19},"end":{"row":70,"column":20}},"text":":"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":70,"column":20},"end":{"row":70,"column":21}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":70,"column":21},"end":{"row":70,"column":22}},"text":"f"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":70,"column":22},"end":{"row":70,"column":23}},"text":"u"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":70,"column":23},"end":{"row":70,"column":24}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":70,"column":24},"end":{"row":70,"column":25}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":70,"column":25},"end":{"row":70,"column":26}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":70,"column":26},"end":{"row":70,"column":27}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":70,"column":27},"end":{"row":70,"column":28}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":70,"column":0},"end":{"row":70,"column":9}},"text":"function "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":55,"column":0},"end":{"row":55,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":55,"column":4},"end":{"row":55,"column":8}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":56,"column":8},"end":{"row":56,"column":12}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":57,"column":12},"end":{"row":57,"column":16}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":58,"column":11},"end":{"row":58,"column":12}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":58,"column":8},"end":{"row":58,"column":12}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":58,"column":8},"end":{"row":58,"column":9}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":58,"column":8},"end":{"row":58,"column":12}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":58,"column":12},"end":{"row":58,"column":16}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":59,"column":12},"end":{"row":59,"column":16}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":60,"column":12},"end":{"row":60,"column":16}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":61,"column":12},"end":{"row":61,"column":16}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":62,"column":12},"end":{"row":62,"column":16}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":63,"column":8},"end":{"row":63,"column":12}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":64,"column":4},"end":{"row":64,"column":8}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":54,"column":0},"end":{"row":54,"column":8}},"text":"        "},{"action":"insertText","range":{"start":{"row":70,"column":0},"end":{"row":70,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":71,"column":0},"end":{"row":71,"column":2}},"text":"  "},{"action":"insertText","range":{"start":{"row":71,"column":6},"end":{"row":71,"column":8}},"text":"  "},{"action":"insertText","range":{"start":{"row":72,"column":0},"end":{"row":72,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":73,"column":0},"end":{"row":73,"column":1}},"text":" "},{"action":"insertText","range":{"start":{"row":73,"column":9},"end":{"row":73,"column":12}},"text":"   "},{"action":"insertText","range":{"start":{"row":74,"column":0},"end":{"row":74,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":75,"column":8},"end":{"row":75,"column":12}},"text":"    "},{"action":"insertText","range":{"start":{"row":76,"column":0},"end":{"row":76,"column":2}},"text":"  "},{"action":"insertText","range":{"start":{"row":76,"column":10},"end":{"row":76,"column":12}},"text":"  "},{"action":"insertText","range":{"start":{"row":77,"column":8},"end":{"row":77,"column":12}},"text":"    "},{"action":"insertText","range":{"start":{"row":78,"column":0},"end":{"row":78,"column":1}},"text":" "},{"action":"insertText","range":{"start":{"row":78,"column":5},"end":{"row":78,"column":8}},"text":"   "},{"action":"insertText","range":{"start":{"row":79,"column":0},"end":{"row":79,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":81,"column":0},"end":{"row":81,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":82,"column":0},"end":{"row":82,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":83,"column":0},"end":{"row":83,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":84,"column":4},"end":{"row":84,"column":8}},"text":"    "},{"action":"insertText","range":{"start":{"row":85,"column":8},"end":{"row":85,"column":12}},"text":"    "},{"action":"insertText","range":{"start":{"row":86,"column":0},"end":{"row":86,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":87,"column":0},"end":{"row":87,"column":1}},"text":" "},{"action":"insertText","range":{"start":{"row":87,"column":9},"end":{"row":87,"column":12}},"text":"   "},{"action":"insertText","range":{"start":{"row":88,"column":0},"end":{"row":88,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":90,"column":4},"end":{"row":90,"column":8}},"text":"    "},{"action":"insertText","range":{"start":{"row":91,"column":0},"end":{"row":91,"column":2}},"text":"  "},{"action":"insertText","range":{"start":{"row":91,"column":10},"end":{"row":91,"column":12}},"text":"  "},{"action":"insertText","range":{"start":{"row":92,"column":8},"end":{"row":92,"column":12}},"text":"    "},{"action":"insertText","range":{"start":{"row":93,"column":4},"end":{"row":93,"column":8}},"text":"    "},{"action":"insertText","range":{"start":{"row":95,"column":0},"end":{"row":95,"column":3}},"text":"   "},{"action":"insertText","range":{"start":{"row":95,"column":7},"end":{"row":95,"column":8}},"text":" "},{"action":"insertText","range":{"start":{"row":96,"column":4},"end":{"row":96,"column":8}},"text":"    "},{"action":"insertText","range":{"start":{"row":98,"column":0},"end":{"row":98,"column":2}},"text":"  "},{"action":"insertText","range":{"start":{"row":98,"column":6},"end":{"row":98,"column":8}},"text":"  "},{"action":"insertText","range":{"start":{"row":99,"column":0},"end":{"row":99,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":79,"column":0},"end":{"row":79,"column":6}},"text":"    },"},{"action":"removeLines","range":{"start":{"row":69,"column":0},"end":{"row":79,"column":0}},"nl":"\n","lines":["","    closeInfos: funtion() {","        if (infos.length > 0) {","            /* detach the info-window from the marker ... undocumented in the API docs */","            infos[0].set(\"marker\", null);","            /* and close it */","            infos[0].close();","            /* blank the array */","            infos.length = 0;","        }"]},{"action":"removeText","range":{"start":{"row":68,"column":6},"end":{"row":69,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":48,"column":11},"end":{"row":49,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":49,"column":0},"end":{"row":49,"column":8}},"text":"        "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":49,"column":8},"end":{"row":49,"column":9}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":49,"column":9},"end":{"row":49,"column":10}},"text":"*"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":55,"column":0},"end":{"row":55,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":55,"column":4},"end":{"row":55,"column":8}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":55,"column":8},"end":{"row":55,"column":9}},"text":"*"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":55,"column":9},"end":{"row":55,"column":10}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":56,"column":38},"end":{"row":56,"column":39}},"text":"m"},{"action":"insertText","range":{"start":{"row":56,"column":38},"end":{"row":56,"column":39}},"text":"g"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":56,"column":39},"end":{"row":56,"column":40}},"text":"M"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":56,"column":66},"end":{"row":56,"column":67}},"text":"m"},{"action":"insertText","range":{"start":{"row":56,"column":66},"end":{"row":56,"column":67}},"text":"g"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":56,"column":67},"end":{"row":56,"column":68}},"text":"M"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":56,"column":75},"end":{"row":56,"column":76}},"text":"m"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":56,"column":76},"end":{"row":56,"column":77}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":56,"column":77},"end":{"row":56,"column":78}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":56,"column":78},"end":{"row":56,"column":79}},"text":"k"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":56,"column":79},"end":{"row":56,"column":80}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":56,"column":80},"end":{"row":56,"column":81}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":56,"column":81},"end":{"row":56,"column":82}},"text":"."}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":47,"column":28},"end":{"row":47,"column":29}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":47,"column":29},"end":{"row":47,"column":30}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":47,"column":30},"end":{"row":47,"column":31}},"text":"f"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":47,"column":31},"end":{"row":47,"column":32}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":47,"column":32},"end":{"row":47,"column":33}},"text":"C"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":47,"column":33},"end":{"row":47,"column":34}},"text":"c"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":47,"column":44},"end":{"row":47,"column":45}},"text":"g"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":47,"column":43},"end":{"row":47,"column":44}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":47,"column":42},"end":{"row":47,"column":43}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":47,"column":41},"end":{"row":47,"column":42}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":47,"column":40},"end":{"row":47,"column":41}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":47,"column":39},"end":{"row":47,"column":40}},"text":"S"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":55,"column":0},"end":{"row":55,"column":10}},"text":"        */"},{"action":"removeText","range":{"start":{"row":54,"column":11},"end":{"row":55,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":54,"column":11},"end":{"row":55,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":55,"column":0},"end":{"row":55,"column":8}},"text":"        "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":55,"column":8},"end":{"row":55,"column":9}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":55,"column":9},"end":{"row":55,"column":10}},"text":"*"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":49,"column":0},"end":{"row":49,"column":10}},"text":"        /*"},{"action":"removeText","range":{"start":{"row":48,"column":11},"end":{"row":49,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":48,"column":11},"end":{"row":49,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":49,"column":0},"end":{"row":49,"column":8}},"text":"        "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":66,"column":0},"end":{"row":66,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":66,"column":4},"end":{"row":66,"column":8}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":66,"column":8},"end":{"row":66,"column":9}},"text":"*"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":66,"column":9},"end":{"row":66,"column":10}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":55,"column":10},"end":{"row":55,"column":11}},"text":"*"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":66,"column":9},"end":{"row":66,"column":10}},"text":"*"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":66,"column":9},"end":{"row":66,"column":10}},"text":"*"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":55,"column":10},"end":{"row":55,"column":11}},"text":"*"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":66,"column":0},"end":{"row":66,"column":10}},"text":"        */"},{"action":"removeLines","range":{"start":{"row":55,"column":0},"end":{"row":66,"column":0}},"nl":"\n","lines":["        /*","        google.maps.event.addListener(gMarker, 'click', (function(gMarker, marker.content, infowindow) {","            return function() {","                /* close the previous info-window */","                closeInfos();","                infowindow.setContent(content);","                infowindow.open(map, marker);","                /* keep the handle, in order to close it on next click event */","                infos[0] = infowindow;","            };","        })(marker, content, infowindow));"]},{"action":"removeText","range":{"start":{"row":54,"column":11},"end":{"row":55,"column":0}},"text":"\n"}]}]]},"ace":{"folds":[],"scrolltop":540,"scrollleft":0,"selection":{"start":{"row":54,"column":11},"end":{"row":54,"column":11},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":16,"state":"no_regex","mode":"ace/mode/javascript"}},"timestamp":1411287369468,"hash":"76c514f645ea490a4f15fca82d00ff511840e173"}