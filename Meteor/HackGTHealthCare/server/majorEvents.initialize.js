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
		Hospitals.insert({name: "GaTech Student Center Ballroom", streetaddress: "350 Ferst Dr", city: "Atlanta", state: "GA", zip: 30313, lat: 33.775258, long: -84.398707});
		
		var h1 = Hospitals.find({name: "Grady"}).fetch();
		var h2 = Hospitals.find({name: "Duluth Medical"}).fetch();
		var h3 = Hospitals.find({name: "Sutter Medical Center"}).fetch();
		var h4 = Hospitals.find({name: "GaTech Student Center Ballroom"}).fetch();
		
		UserDrugs.insert({
		  name: "Fentanyl", 
		  chemicalName: "", 
		  normalDosage: "100cc", 
		  sideEffects: "", 
		  personalEffect: "GOOD", 
		  notes: "Extremely effective anesthetic" 
		});
		
		UserDrugs.insert({name: "Propofol", chemicalName: "", normalDosage: "10cc/hr", sideEffects: "Drug induced psychosis", personalEffect: "GOOD", notes: "Reacted well, no side effects or lasting problems noticed"});
		UserDrugs.insert({name: "Ketamine", chemicalName: "", normalDosage: "", sideEffects: "", personalEffect: "BAD", notes: "Caused drug induced psychosis, and family emotional distress. Seek alternative strongly"});
		UserDrugs.insert({name: "Cookies", chemicalName: "Chocolate Chip", normalDosage: "1 Cookie", sideEffects: "Happiness", personalEffect: "GOOD", notes: "Suggested take with milk"});
		UserDrugs.insert({name: "Fig Newtons", chemicalName: "NewtonusFigians", normalDosage: "1 Sleeve", sideEffects: "Happiness", personalEffect: "GOOD", notes: "Suggested eat crumbs as well"});
		
		var d1 = UserDrugs.find({name: "Fentanyl"}).fetch();
		var d2 = UserDrugs.find({name: "Propofol"}).fetch();
		var d3 = UserDrugs.find({name: "Ketamine"}).fetch();
		
		var d4 = UserDrugs.find({name: "Cookies"}).fetch();
		var d5 = UserDrugs.find({name: "Fig Newtons"}).fetch();

    var data = [{
        "title": "Motorcycle Accident - Grady",
        "date": "3/3/2014",
        "time": "1 pm",
        "tags": "Shoulder",
        "hospitalId": h1[0]._id,
        "otherLocation": "",
        "notes": "In the Grady trauma ER they performed the reduction on my right shoulder back in.  Afterwards both my left and right shoulders would sublux",
        "drugs": d1[0]._id + "," + d2[0]._id
      },

      {"title": "Hockey Dislocation - Grady","date": "5/3/2014","time": "5 pm","tags": "Shoulder","hospitalId": h2[0]._id,"otherLocation": "","notes": "They put your shoulder back in at Gwinnett Medical Center - Duluth ER.","drugs": d1[0]._id + "," + d2[0]._id},
      {"title": "Midnight Dislocation - Santa Rosa","date": "8/30/2014","time": "1:00","tags": "Shoulder","hospitalId": h3[0]._id,"otherLocation": "","notes": "In the Grady trauma ER they performed the reduction on my right shoulder back in.  Afterwards both my left and right shoulders would sublux","drugs": d1[0]._id + "," + d3[0]._id},
      {"title": "GaTech Blood Donation","date": "2014-06-31","time": "15:00","tags": "BloodDonation","hospitalId": h4[0]._id,"otherLocation": "","notes": "Donated blood for the first time! They even gave us cookies and snacks to recover our strength","drugs": d4[0]._id + "," + d5[0]._id}
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