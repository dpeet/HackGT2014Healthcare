{"filter":false,"title":"google_maps.js","tooltip":"/Meteor/HackGTHealthCare/client/libs/google_maps.js","undoManager":{"mark":15,"position":15,"stack":[[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":0},"end":{"row":0,"column":9}},"text":"gmaps = {"},{"action":"insertText","range":{"start":{"row":0,"column":9},"end":{"row":1,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":1,"column":0},"end":{"row":12,"column":0}},"lines":["    // map object","    map: null,"," ","    // google markers objects","    markers: [],"," ","    // google lat lng objects","    latLngs: [],"," ","    // our formatted marker data objects","    markerData: []"]},{"action":"insertText","range":{"start":{"row":12,"column":0},"end":{"row":12,"column":1}},"text":"}"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":11,"column":18},"end":{"row":12,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":12,"column":0},"end":{"row":12,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":12,"column":4},"end":{"row":13,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":13,"column":0},"end":{"row":13,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":4},"end":{"row":13,"column":58}},"text":"// add a marker given our formatted marker data object"},{"action":"insertText","range":{"start":{"row":13,"column":58},"end":{"row":14,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":14,"column":0},"end":{"row":27,"column":0}},"lines":["    addMarker: function(marker) {","        var gLatLng = new google.maps.LatLng(marker.lat, marker.lng);","        var gMarker = new google.maps.Marker({","            position: gLatLng,","            map: this.map,","            title: marker.title,","            // animation: google.maps.Animation.DROP,","            icon:'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'","        });","        this.latLngs.push(gLatLng);","        this.markers.push(gMarker);","        this.markerData.push(marker);","        return gMarker;"]},{"action":"insertText","range":{"start":{"row":27,"column":0},"end":{"row":27,"column":5}},"text":"    }"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":11,"column":18},"end":{"row":11,"column":19}},"text":","}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":12,"column":4},"end":{"row":12,"column":61}},"text":" // calculate and move the bound box based on our markers"},{"action":"insertText","range":{"start":{"row":12,"column":61},"end":{"row":13,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":13,"column":0},"end":{"row":19,"column":0}},"lines":["    calcBounds: function() {","        var bounds = new google.maps.LatLngBounds();","        for (var i = 0, latLngLength = this.latLngs.length; i < latLngLength; i++) {","            bounds.extend(this.latLngs[i]);","        }","        this.map.fitBounds(bounds);"]},{"action":"insertText","range":{"start":{"row":19,"column":0},"end":{"row":19,"column":6}},"text":"    },"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":19,"column":6},"end":{"row":20,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":20,"column":0},"end":{"row":20,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":12,"column":4},"end":{"row":12,"column":5}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":12,"column":4},"end":{"row":13,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":13,"column":0},"end":{"row":13,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":12,"column":4},"end":{"row":12,"column":39}},"text":"// check if a marker already exists"},{"action":"insertText","range":{"start":{"row":12,"column":39},"end":{"row":13,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":13,"column":0},"end":{"row":19,"column":0}},"lines":["    markerExists: function(key, val) {","        _.each(this.markers, function(storedMarker) {","            if (storedMarker[key] == val)","                return true;","        });","        return false;"]},{"action":"insertText","range":{"start":{"row":19,"column":0},"end":{"row":19,"column":6}},"text":"    },"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":19,"column":6},"end":{"row":20,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":20,"column":0},"end":{"row":20,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":11,"column":19},"end":{"row":12,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":12,"column":0},"end":{"row":12,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":45,"column":5},"end":{"row":45,"column":6}},"text":","}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":45,"column":6},"end":{"row":46,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":46,"column":0},"end":{"row":46,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":46,"column":4},"end":{"row":46,"column":25}},"text":"// initialize the map"},{"action":"insertText","range":{"start":{"row":46,"column":25},"end":{"row":47,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":47,"column":0},"end":{"row":62,"column":0}},"lines":["    initialize: function() {","        console.log(\"[+] Intializing Google Maps...\");","        var mapOptions = {","            zoom: 12,","            center: new google.maps.LatLng(53.565, 10.001),","            mapTypeId: google.maps.MapTypeId.HYBRID","        };"," ","        this.map = new google.maps.Map(","            document.getElementById('map-canvas'),","            mapOptions","        );"," ","        // global flag saying we intialized already","        Session.set('map', true);"]},{"action":"insertText","range":{"start":{"row":62,"column":0},"end":{"row":62,"column":5}},"text":"    }"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":45,"column":6},"end":{"row":46,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":46,"column":0},"end":{"row":46,"column":4}},"text":"    "}]}]]},"ace":{"folds":[],"scrolltop":180,"scrollleft":0,"selection":{"start":{"row":52,"column":59},"end":{"row":52,"column":59},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":11,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1411259439353,"hash":"4cf201a4a97ef901f0077ade1e990090b57c9236"}