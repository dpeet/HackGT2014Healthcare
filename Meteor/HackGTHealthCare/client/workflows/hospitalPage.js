Router.map(function(){
  this.route('hospitalPage', {
    path: '/hospitals',
    template: 'hospitalPage',
    waitOn: function(){
      return Meteor.subscribe('hospital');
    }
  });
});

Template.map.rendered = function() {
    if (! Session.get('map'))
        gmaps.initialize();
 
    Deps.autorun(function() {
        var hs = Hospital.find().fetch();
 
        _.each(hs, function(h) {
            if (typeof h.lat !== 'undefined' &&
                typeof h.long !== 'undefined') {
 
                var objMarker = {
                    id: h._id,
                    lat: h.lat,
                    lng: h.long,
                    title: h.name
                };
 
                // check if marker already exists
                if (!gmaps.markerExists('id', objMarker.id))
                    gmaps.addMarker(objMarker);
 
            }
        });
    });
}

Template.map.destroyed = function() {
    Session.set('map', false);
}