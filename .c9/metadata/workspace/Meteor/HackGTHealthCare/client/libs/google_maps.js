{"filter":false,"title":"google_maps.js","tooltip":"/Meteor/HackGTHealthCare/client/libs/google_maps.js","undoManager":{"mark":100,"position":100,"stack":[[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":46,"column":4},"end":{"row":46,"column":25}},"text":"// initialize the map"},{"action":"insertText","range":{"start":{"row":46,"column":25},"end":{"row":47,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":47,"column":0},"end":{"row":62,"column":0}},"lines":["    initialize: function() {","        console.log(\"[+] Intializing Google Maps...\");","        var mapOptions = {","            zoom: 12,","            center: new google.maps.LatLng(53.565, 10.001),","            mapTypeId: google.maps.MapTypeId.HYBRID","        };"," ","        this.map = new google.maps.Map(","            document.getElementById('map-canvas'),","            mapOptions","        );"," ","        // global flag saying we intialized already","        Session.set('map', true);"]},{"action":"insertText","range":{"start":{"row":62,"column":0},"end":{"row":62,"column":5}},"text":"    }"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":45,"column":6},"end":{"row":46,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":46,"column":0},"end":{"row":46,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":62,"column":33},"end":{"row":63,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":63,"column":0},"end":{"row":63,"column":8}},"text":"        "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":63,"column":8},"end":{"row":64,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":64,"column":0},"end":{"row":64,"column":54}},"text":"        console.log(\"[+] Intializing Google Maps...\");"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":64,"column":33},"end":{"row":64,"column":34}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":64,"column":33},"end":{"row":64,"column":34}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":64,"column":33},"end":{"row":64,"column":34}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":64,"column":34},"end":{"row":64,"column":35}},"text":"d"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":64,"column":35},"end":{"row":64,"column":36}},"text":"g"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":40,"column":11},"end":{"row":41,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":41,"column":0},"end":{"row":41,"column":8}},"text":"        "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":8},"end":{"row":41,"column":9}},"text":"c"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":9},"end":{"row":41,"column":10}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":10},"end":{"row":41,"column":11}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":41,"column":8},"end":{"row":41,"column":11}},"text":"con"},{"action":"insertText","range":{"start":{"row":41,"column":8},"end":{"row":41,"column":15}},"text":"console"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":15},"end":{"row":41,"column":16}},"text":"."}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":16},"end":{"row":41,"column":17}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":17},"end":{"row":41,"column":18}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":18},"end":{"row":41,"column":19}},"text":"g"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":19},"end":{"row":41,"column":21}},"text":"()"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":20},"end":{"row":41,"column":22}},"text":"\"\""}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":21},"end":{"row":41,"column":22}},"text":"A"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":22},"end":{"row":41,"column":23}},"text":"d"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":23},"end":{"row":41,"column":24}},"text":"d"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":24},"end":{"row":41,"column":25}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":25},"end":{"row":41,"column":26}},"text":"d"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":27},"end":{"row":41,"column":28}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":28},"end":{"row":41,"column":29}},"text":"+"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":29},"end":{"row":41,"column":30}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":26},"end":{"row":41,"column":27}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":31},"end":{"row":41,"column":32}},"text":"h"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":32},"end":{"row":41,"column":33}},"text":"."}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":33},"end":{"row":41,"column":34}},"text":"g"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":34},"end":{"row":41,"column":35}},"text":"m"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":35},"end":{"row":41,"column":36}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":36},"end":{"row":41,"column":37}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":37},"end":{"row":41,"column":38}},"text":"k"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":41,"column":37},"end":{"row":41,"column":38}},"text":"k"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":41,"column":36},"end":{"row":41,"column":37}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":41,"column":35},"end":{"row":41,"column":36}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":41,"column":34},"end":{"row":41,"column":35}},"text":"m"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":41,"column":33},"end":{"row":41,"column":34}},"text":"g"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":41,"column":32},"end":{"row":41,"column":33}},"text":"."}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":41,"column":31},"end":{"row":41,"column":32}},"text":"h"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":31},"end":{"row":41,"column":32}},"text":"g"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":32},"end":{"row":41,"column":33}},"text":"m"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":33},"end":{"row":41,"column":34}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":34},"end":{"row":41,"column":35}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":35},"end":{"row":41,"column":36}},"text":"k"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":41,"column":35},"end":{"row":41,"column":36}},"text":"k"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":41,"column":34},"end":{"row":41,"column":35}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":41,"column":33},"end":{"row":41,"column":34}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":41,"column":32},"end":{"row":41,"column":33}},"text":"m"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":32},"end":{"row":41,"column":33}},"text":"M"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":33},"end":{"row":41,"column":34}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":34},"end":{"row":41,"column":35}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":35},"end":{"row":41,"column":36}},"text":"k"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":36},"end":{"row":41,"column":37}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":37},"end":{"row":41,"column":38}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":38},"end":{"row":41,"column":39}},"text":"."}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":39},"end":{"row":41,"column":40}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":40},"end":{"row":41,"column":41}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":41,"column":39},"end":{"row":41,"column":41}},"text":"ti"},{"action":"insertText","range":{"start":{"row":41,"column":39},"end":{"row":41,"column":44}},"text":"title"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":44},"end":{"row":41,"column":45}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":41,"column":44},"end":{"row":41,"column":45}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":44},"end":{"row":41,"column":45}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":45},"end":{"row":41,"column":46}},"text":"+"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":46},"end":{"row":41,"column":47}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":47},"end":{"row":41,"column":49}},"text":"\"\""}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":48},"end":{"row":41,"column":49}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":49},"end":{"row":41,"column":50}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":50},"end":{"row":41,"column":51}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":52},"end":{"row":41,"column":53}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":53},"end":{"row":41,"column":54}},"text":"+"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":54},"end":{"row":41,"column":55}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":55},"end":{"row":41,"column":56}},"text":"g"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":56},"end":{"row":41,"column":57}},"text":"M"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":57},"end":{"row":41,"column":58}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":58},"end":{"row":41,"column":59}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":59},"end":{"row":41,"column":60}},"text":"k"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":60},"end":{"row":41,"column":61}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":61},"end":{"row":41,"column":62}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":62},"end":{"row":41,"column":63}},"text":"."}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":63},"end":{"row":41,"column":64}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":64},"end":{"row":41,"column":65}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":65},"end":{"row":41,"column":66}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":41,"column":63},"end":{"row":41,"column":66}},"text":"lat"},{"action":"insertText","range":{"start":{"row":41,"column":63},"end":{"row":41,"column":66}},"text":"lat"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":41,"column":65},"end":{"row":41,"column":66}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":41,"column":64},"end":{"row":41,"column":65}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":41,"column":63},"end":{"row":41,"column":64}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":63},"end":{"row":41,"column":64}},"text":"p"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":64},"end":{"row":41,"column":65}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":65},"end":{"row":41,"column":66}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":66},"end":{"row":41,"column":67}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":67},"end":{"row":41,"column":68}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":68},"end":{"row":41,"column":69}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":69},"end":{"row":41,"column":70}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":70},"end":{"row":41,"column":71}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":72},"end":{"row":41,"column":73}},"text":";"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":47},"end":{"row":41,"column":48}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":41,"column":47},"end":{"row":41,"column":48}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":48},"end":{"row":41,"column":49}},"text":" "}]}]]},"ace":{"folds":[],"scrolltop":300,"scrollleft":0,"selection":{"start":{"row":41,"column":49},"end":{"row":41,"column":49},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":20,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1411263502769,"hash":"0149e34bee346f45b854df544090f0b086e55997"}