Hospital = new Meteor.Collection("hospital");
MajorEvent = new Meteor.Collection("hospitalvisit");
Drug = new Meteor.Collection("drugs");
DrugUsage = new Meteor.Collection("drugUsage");

Meteor.startup(function () {
	/* TODO remove this bit */
	Hospital.remove({});
	HospitalVisit.remove({});
	Drug.remove({});
	DrugUsage.remove({});
	
	
	if (Hospital.find().count() === 0) {
		var timestamp = new Date();
		
		Hospital.insert({name: "Grady", streetaddress: "80 Jesse Hill Jr Dr SE", city: "Atlanta", state: "GA", zip: 30303, lat: 33.752062, long: -84.382198});
		Hospital.insert({name: "Duluth Medical", streetaddress: "3620 Howell Ferry Rd", city: "Duluth", state: "GA", zip: 30096, lat: 34.001413, long: -84.163569});
		Hospital.insert({name: "Sutter Medical Center", streetaddress: "3325 Chanate Rd", city: "Santa Rosa", state: "CA", zip: 95404, lat: 38.469572, long: -122.707625});
		
		var h = Hospital.find({name: "Grady"}).fetch();
		
		Drug.insert({name: "Fentanyl", chemical: "", normalDosage: "", sideEffects: "", personalEffect: "GOOD", personalEffectNotes: "extremely effective" });
		Drug.insert({name: "Propofol", chemical: "", normalDosage: "", sideEffects: "", personalEffect: "GOOD", personalEffectNotes: "reacted wel"});
		Drug.insert({name: "Ketamine", chemical: "", normalDosage: "", sideEffects: "", personalEffect: "BAD", personalEffectNotes: "caused drug induced psychosis.  DO NOT TAKE"});
		
		var d = Drug.find({name: "Fentanyl"}).fetch();
		
		MajorEvent.insert({time: "1 pm", date: "3/3/2014", hospitalId: h._id, otherLocation: "In the Grady trauma ER they performed the reduction on my right shoulder back in.  Afterwards both my left and right shoulders would sublux", tags: "Shoulder", notes: "", drugs: d._id+""});
		MajorEvent.insert({time: "5 pm", date: "5/3/2014", hospitalId: h._id, otherLocation: "They put your shoulder back in at Gwinnett Medical Center - Duluth ER.", tags: "Shoulder", notes: "", drugs: d._id+""})l
		MajorEvent.insert({time: "1 am", date: "8/30/2014", hospitalId: h._id, otherLocation: "In the Grady trauma ER they performed the reduction on my right shoulder back in.  Afterwards both my left and right shoulders would sublux", tags: "Shoulder", notes: "", drugs: d._id+""});
		
	}
});