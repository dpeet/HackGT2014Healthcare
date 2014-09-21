Meteor.startup(function() {
  /* TODO remove this bit */
  Hospitals.remove({});
  MajorEvents.remove({});
  UserDrugs.remove({});
  DrugUsage.remove({});


  if ((MajorEvents.find().count() == 0)) {
    console.log('No records in MajorEvents collection.  Bootstrapping some data.');
    
    var timestamp = new Date();
		
		Hospitals.insert({
		  name: "Grady", 
		  streetaddress: "80 Jesse Hill Jr Dr SE", 
		  city: "Atlanta", 
		  state: "GA", 
		  zip: 30303, 
		  lat: 33.752062, 
		  long: -84.382198});
		  
		Hospitals.insert({name: "Duluth Medical", streetaddress: "3620 Howell Ferry Rd", city: "Duluth", state: "GA", zip: 30096, lat: 34.001413, long: -84.163569});
		Hospitals.insert({name: "Sutter Medical Center", streetaddress: "3325 Chanate Rd", city: "Santa Rosa", state: "CA", zip: 95404, lat: 38.469572, long: -122.707625});
		
		var h = Hospitals.find({name: "Grady"}).fetch();
		
		UserDrugs.insert({name: "Fentanyl", chemicalName: "", normalDosage: "100cc", sideEffects: "", personalEffect: "GOOD", notes: "extremely effective" });
		UserDrugs.insert({name: "Propofol", chemicalName: "", normalDosage: "10cc/hr?", sideEffects: "", personalEffect: "GOOD", notes: "reacted well"});
		UserDrugs.insert({name: "Ketamine", chemicalName: "", normalDosage: "??", sideEffects: "", personalEffect: "BAD", notes: "caused drug induced psychosis.  DO NOT TAKE"});
		
		var d = UserDrugs.find({name: "Fentanyl"}).fetch();

    var data = [{
        "title": "Motorcycle Accident - Grady",
        "date": "3/3/2014",
        "time": "1 pm",
        "tags": "Shoulder",
        "hospitalId": h[0]._id,
        "otherLocation": "",
        "notes": "In the Grady trauma ER they performed the reduction on my right shoulder back in.  Afterwards both my left and right shoulders would sublux",
        "drugs": d[0]._id + ""
      },

      {
        "title": "Hockey Dislocation - Grady",
        "date": "5/3/2014",
        "time": "5 pm",
        "tags": "Shoulder",
        "hospitalId": h[0]._id,
        "otherLocation": "",
        "notes": "They put your shoulder back in at Gwinnett Medical Center - Duluth ER.",
        "drugs": d[0]._id + ""
      },

      {
        "title": "Midnight Dislocation - Santa Rosa",
        "date": "8/30/2014",
        "time": "1 am",
        "tags": "Shoulder",
        "hospitalId": h[0]._id,
        "otherLocation": "",
        "notes": "In the Grady trauma ER they performed the reduction on my right shoulder back in.  Afterwards both my left and right shoulders would sublux",
        "drugs": d[0]._id + ""
      }

    ];


    console.log('Adding records to MajorEvents collection.');
    for (var i = 0; i < data.length; i++) {
      MajorEvents.insert({
        title: data[i].title,
        date: data[i].date,
        time: data[i].time,
        tags: data[i].tags,
        hospitalId: data[i].hospitalId,
        otherLocation: data[i].otherLocation,
        notes: data[i].notes,
        drugs: data[i].drugs,
        createdAt: new Date()
      });

    }
    console.log('Records successfully added to MajorEvents collection.');
  }
  console.log('MajorEvents collection initialized and ready.');
});