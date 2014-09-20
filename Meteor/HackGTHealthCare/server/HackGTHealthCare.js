Hospital = new Meteor.Collection("hospital");
HospitalVisit = new Meteor.Collection("hospitalvisit");

Meteor.startup(function () {
	if (Hospital.find().count() === 0) {
		var timestamp = new Date();
		Hospital.insert({name: "Grady", streetaddress: "", city: "", state: "", zip: ""});
		var h = Hospital.find().fetch();
		HospitalVisit.insert({time: "", date: ""})
	}
});