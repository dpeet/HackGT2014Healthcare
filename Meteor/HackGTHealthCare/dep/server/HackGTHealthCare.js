Hospital = new Meteor.Collection("hospital");
MajorEvent = new Meteor.Collection("majorEvent");
Drug = new Meteor.Collection("drug");
DrugUsage = new Meteor.Collection("drugUsage");

Meteor.startup(function () {
	/* TODO remove this bit */
	Hospital.remove({});
	MajorEvent.remove({});
	Drug.remove({});
	DrugUsage.remove({});
	
	
	if (Hospital.find().count() === 0) {
		var timestamp = new Date();
		
		Hospital.insert({name: "Grady", streetaddress: "80 Jesse Hill Jr Dr SE", city: "Atlanta", state: "GA", zip: 30303, lat: 33.752062, long: -84.382198});
		Hospital.insert({name: "Duluth Medical", streetaddress: "3620 Howell Ferry Rd", city: "Duluth", state: "GA", zip: 30096, lat: 34.001413, long: -84.163569});
		Hospital.insert({name: "Sutter Medical Center", streetaddress: "3325 Chanate Rd", city: "Santa Rosa", state: "CA", zip: 95404, lat: 38.469572, long: -122.707625});
		
		var h = Hospital.find({name: "Grady"}).fetch();
		
		Drug.insert({name: "Fentanyl", chemical: "", normalDosage: "100cc", sideEffects: "", personalEffect: "GOOD", personalEffectNotes: "extremely effective" });
		Drug.insert({name: "Propofol", chemical: "", normalDosage: "10cc/hr?", sideEffects: "", personalEffect: "GOOD", personalEffectNotes: "reacted well"});
		Drug.insert({name: "Ketamine", chemical: "", normalDosage: "??", sideEffects: "", personalEffect: "BAD", personalEffectNotes: "caused drug induced psychosis.  DO NOT TAKE"});
		
		var d = Drug.find({name: "Fentanyl"}).fetch();
		
		MajorEvent.insert({time: "1 pm", date: "3/3/2014", hospitalId: h[0]._id, otherLocation: "", tags: "Shoulder", notes: "In the Grady trauma ER they performed the reduction on my right shoulder back in.  Afterwards both my left and right shoulders would sublux", drugs: d[0]._id+""});
		MajorEvent.insert({time: "5 pm", date: "5/3/2014", hospitalId: h[0]._id, otherLocation: "", tags: "Shoulder", notes: "They put your shoulder back in at Gwinnett Medical Center - Duluth ER.", drugs: d[0]._id+""});
		MajorEvent.insert({time: "1 am", date: "8/30/2014", hospitalId: h[0]._id, otherLocation: "", tags: "Shoulder", notes: "In the Grady trauma ER they performed the reduction on my right shoulder back in.  Afterwards both my left and right shoulders would sublux", drugs: d[0]._id+""});
		
	}
});