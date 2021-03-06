gmaps = {
    // map object
    map: null,

    // google markers objects
    markers: [],

    // google lat lng objects
    latLngs: [],

    // our formatted marker data objects
    markerData: [],

    // check if a marker already exists
    markerExists: function(key, val) {
        _.each(this.markers, function(storedMarker) {
            if (storedMarker[key] == val)
                return true;
        });
        return false;
    },

    // calculate and move the bound box based on our markers
    calcBounds: function() {
        var bounds = new google.maps.LatLngBounds();
        for (var i = 0, latLngLength = this.latLngs.length; i < latLngLength; i++) {
            bounds.extend(this.latLngs[i]);
        }
        this.map.fitBounds(bounds);
    },

    // add a marker given our formatted marker data object
    addMarker: function(marker) {
        var gLatLng = new google.maps.LatLng(marker.lat, marker.lng);
        var gMarker = new google.maps.Marker({
            position: gLatLng,
            map: this.map,
            animation: google.maps.Animation.DROP,
            title: marker.title,
            icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
        });
        console.log("Added " + gMarker.title + " at " + gMarker.position);
        this.latLngs.push(gLatLng);
        this.markers.push(gMarker);
        this.markerData.push(marker);

        var infowindow = new google.maps.InfoWindow({
            content: marker.infoContent
        });
        
        google.maps.event.addListener(gMarker, 'click', function() {
            this.map.panTo(gMarker.getPosition());
            console.log("Opening Window " + gMarker.title + " at " + gMarker.getPosition());
            infowindow.open(this.map, gMarker);
        });

        return gMarker;
    },

    // initialize the map
    initialize: function() {
        console.log("[+] Intializing Google Maps...");
        var mapOptions = {
            zoom: 12,
            center: new google.maps.LatLng(37.765, -95.683),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        this.map = new google.maps.Map(
            document.getElementById('map-canvas'),
            mapOptions
        );

        // global flag saying we intialized already
        Session.set('map', true);

        console.log("[+] Intialized Google Maps...");
    }
}