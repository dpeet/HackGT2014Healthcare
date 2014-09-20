
Hospital = new Meteor.Collection("hospital");
MajorEvent = new Meteor.Collection("majorEvent");
Drug = new Meteor.Collection("drug");
DrugUsage = new Meteor.Collection("drugUsage");


Meteor.startup(function() {
  /* TODO remove this bit */
  Hospital.remove({});
  MajorEvent.remove({});
  Drug.remove({});
  DrugUsage.remove({});


  if ((MajorEvents.find().count() == 0)) {
    console.log('No records in MajorEvents collection.  Bootstrapping some data.');
    
    var timestamp = new Date();
		
		Hospital.insert({name: "Grady", streetaddress: "80 Jesse Hill Jr Dr SE", city: "Atlanta", state: "GA", zip: 30303, lat: 33.752062, long: -84.382198});
		Hospital.insert({name: "Duluth Medical", streetaddress: "3620 Howell Ferry Rd", city: "Duluth", state: "GA", zip: 30096, lat: 34.001413, long: -84.163569});
		Hospital.insert({name: "Sutter Medical Center", streetaddress: "3325 Chanate Rd", city: "Santa Rosa", state: "CA", zip: 95404, lat: 38.469572, long: -122.707625});
		
		var h = Hospital.find({name: "Grady"}).fetch();
		
		Drug.insert({name: "Fentanyl", chemical: "", normalDosage: "100cc", sideEffects: "", personalEffect: "GOOD", personalEffectNotes: "extremely effective" });
		Drug.insert({name: "Propofol", chemical: "", normalDosage: "10cc/hr?", sideEffects: "", personalEffect: "GOOD", personalEffectNotes: "reacted well"});
		Drug.insert({name: "Ketamine", chemical: "", normalDosage: "??", sideEffects: "", personalEffect: "BAD", personalEffectNotes: "caused drug induced psychosis.  DO NOT TAKE"});
		
		var d = Drug.find({name: "Fentanyl"}).fetch();

    var data = [{
        title: "Motorcycle Accident - Grady",
        date: "3/3/2014",
        time: "1 pm",
        tags: "Shoulder",
        hospitalId: h[0]._id,
        otherLocation: "",
        notes: "In the Grady trauma ER they performed the reduction on my right shoulder back in.  Afterwards both my left and right shoulders would sublux",
        drugs: d[0]._id + ""
      },

      {
        title: "Hockey Dislocation - Grady",
        date: "5/3/2014",
        time: "5 pm",
        tags: "Shoulder",
        hospitalId: h[0]._id,
        otherLocation: "",
        notes: "They put your shoulder back in at Gwinnett Medical Center - Duluth ER.",
        drugs: d[0]._id + ""
      },

      {
        title: "Midnight Dislocation - Santa Rosa",
        date: "8/30/2014",
        time: "1 am",
        tags: "Shoulder",
        hospitalId: h[0]._id,
        otherLocation: "",
        notes: "In the Grady trauma ER they performed the reduction on my right shoulder back in.  Afterwards both my left and right shoulders would sublux",
        drugs: d[0]._id + ""
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


      /*
          // and add some data
          var data = [
            {   "FirstName":"Essie",
              "LastName":"Vaill",
              "Company":"Litronic Industries",
              "Address":"14225 Hancock Dr",
              "City":"Anchorage",
              "County":"Anchorage",
              "State":"AK",
              "Zip":99515,
              "Phone":"907-345-0962",
              "Fax":"907-345-1215",
              "Email":"essie@vaill.com",
              "Web":"http://www.essievaill.com"},

            {"FirstName":"Cruz","LastName":"Roudabush","Company":"Meridian Products","Address":"2202 S Central Ave","City":"Phoenix","County":"Maricopa","State":"AZ","Zip":85004,"Phone":"602-252-4827","Fax":"602-252-4009","Email":"cruz@roudabush.com","Web":"http://www.cruzroudabush.com"},
            {"FirstName":"Billie","LastName":"Tinnes","Company":"D & M Plywood Inc","Address":"28 W 27th St","City":"New York","County":"New York","State":"NY","Zip":10001,"Phone":"212-889-5775","Fax":"212-889-5764","Email":"billie@tinnes.com","Web":"http://www.billietinnes.com"},
            {"FirstName":"Rosemarie","LastName":"Fifield","Company":"Technology Services","Address":"3131 N Nimitz Hwy  #-105","City":"Honolulu","County":"Honolulu","State":"HI","Zip":96819,"Phone":"808-836-8966","Fax":"808-836-6008","Email":"rosemarie@fifield.com","Web":"http://www.rosemariefifield.com"},
            {"FirstName":"Bernard","LastName":"Laboy","Company":"Century 21 Keewaydin Prop","Address":"22661 S Frontage Rd","City":"Channahon","County":"Will","State":"IL","Zip":60410,"Phone":"815-467-0487","Fax":"815-467-1244","Email":"bernard@laboy.com","Web":"http://www.bernardlaboy.com"},
            {"FirstName":"Sue","LastName":"Haakinson","Company":"Kim Peacock Beringhause","Address":"9617 N Metro Pky W","City":"Phoenix","County":"Maricopa","State":"AZ","Zip":85051,"Phone":"602-953-2753","Fax":"602-953-0355","Email":"sue@haakinson.com","Web":"http://www.suehaakinson.com"},
            {"FirstName":"Valerie","LastName":"Pou","Company":"Sea Port Record One Stop Inc","Address":"7475 Hamilton Blvd","City":"Trexlertown","County":"Lehigh","State":"PA","Zip":18087,"Phone":"610-395-8743","Fax":"610-395-6995","Email":"valerie@pou.com","Web":"http://www.valeriepou.com"},
            {"FirstName":"Lashawn","LastName":"Hasty","Company":"Kpff Consulting Engineers","Address":"815 S Glendora Ave","City":"West Covina","County":"Los Angeles","State":"CA","Zip":91790,"Phone":"626-960-6738","Fax":"626-960-1503","Email":"lashawn@hasty.com","Web":"http://www.lashawnhasty.com"},
            {"FirstName":"Marianne","LastName":"Earman","Company":"Albers Technologies Corp","Address":"6220 S Orange Blossom Trl","City":"Orlando","County":"Orange","State":"FL","Zip":32809,"Phone":"407-857-0431","Fax":"407-857-2506","Email":"marianne@earman.com","Web":"http://www.marianneearman.com"},
            {"FirstName":"Justina","LastName":"Dragaj","Company":"Uchner, David D Esq","Address":"2552 Poplar Ave","City":"Memphis","County":"Shelby","State":"TN","Zip":38112,"Phone":"901-327-5336","Fax":"901-327-2911","Email":"justina@dragaj.com","Web":"http://www.justinadragaj.com"},
            {"FirstName":"Mandy","LastName":"Mcdonnell","Company":"Southern Vermont Surveys","Address":"343 Bush St Se","City":"Salem","County":"Marion","State":"OR","Zip":97302,"Phone":"503-371-8219","Fax":"503-371-1118","Email":"mandy@mcdonnell.com","Web":"http://www.mandymcdonnell.com"},
            {"FirstName":"Conrad","LastName":"Lanfear","Company":"Kahler, Karen T Esq","Address":"49 Roche Way","City":"Youngstown","County":"Mahoning","State":"OH","Zip":44512,"Phone":"330-758-0314","Fax":"330-758-3536","Email":"conrad@lanfear.com","Web":"http://www.conradlanfear.com"},
            {"FirstName":"Cyril","LastName":"Behen","Company":"National Paper & Envelope Corp","Address":"1650 S Harbor Blvd","City":"Anaheim","County":"Orange","State":"CA","Zip":92802,"Phone":"714-772-5050","Fax":"714-772-3859","Email":"cyril@behen.com","Web":"http://www.cyrilbehen.com"},
            {"FirstName":"Shelley","LastName":"Groden","Company":"Norton, Robert L Esq","Address":"110 Broadway St","City":"San Antonio","County":"Bexar","State":"TX","Zip":78205,"Phone":"210-229-3017","Fax":"210-229-9757","Email":"shelley@groden.com","Web":"http://www.shelleygroden.com"},
            {"FirstName":"Rosalind","LastName":"Krenzke","Company":"Waldein Manufacturing","Address":"7000 Bass Lake Rd  #-200","City":"Minneapolis","County":"Hennepin","State":"MN","Zip":55428,"Phone":"763-537-4194","Fax":"763-537-3885","Email":"rosalind@krenzke.com","Web":"http://www.rosalindkrenzke.com"},
            {"FirstName":"Davis","LastName":"Brevard","Company":"Transit Trading Corp","Address":"6715 Tippecanoe Rd","City":"Canfield","County":"Mahoning","State":"OH","Zip":44406,"Phone":"330-533-6346","Fax":"330-533-8211","Email":"davis@brevard.com","Web":"http://www.davisbrevard.com"},
            {"FirstName":"Winnie","LastName":"Reich","Company":"Pacific Seating Co","Address":"1535 Hawkins Blvd","City":"El Paso","County":"El Paso","State":"TX","Zip":79925,"Phone":"915-771-2730","Fax":"915-771-5729","Email":"winnie@reich.com","Web":"http://www.winniereich.com"},
            {"FirstName":"Trudy","LastName":"Worlds","Company":"Shapiro, Mark R Esq","Address":"24907 Tibbitts Aven  #-b","City":"Valencia","County":"Los Angeles","State":"CA","Zip":91355,"Phone":"661-257-3083","Fax":"661-257-0924","Email":"trudy@worlds.com","Web":"http://www.trudyworlds.com"},
            {"FirstName":"Deshawn","LastName":"Inafuku","Company":"Telair Div Of Teleflex Inc","Address":"3508 Leopard St","City":"Corpus Christi","County":"Nueces","State":"TX","Zip":78408,"Phone":"361-884-8433","Fax":"361-884-3985","Email":"deshawn@inafuku.com","Web":"http://www.deshawninafuku.com"},
            {"FirstName":"Cary","LastName":"Mccamey","Company":"Williams Scotsman","Address":"100 E Broad St","City":"Columbus","County":"Franklin","State":"OH","Zip":43215,"Phone":"614-225-0900","Fax":"614-225-1612","Email":"cary@mccamey.com","Web":"http://www.carymccamey.com"},
            {"FirstName":"Haley","LastName":"Rocheford","Company":"Davis, Robert L Esq","Address":"6030 Greenwood Plaza Blvd","City":"Englewood","County":"Arapahoe","State":"CO","Zip":80111,"Phone":"303-689-7729","Fax":"303-689-5219","Email":"haley@rocheford.com","Web":"http://www.haleyrocheford.com"},
            {"FirstName":"Fannie","LastName":"Steese","Company":"Chiapete, W Richard Esq","Address":"926 E Park Ave","City":"Tallahassee","County":"Leon","State":"FL","Zip":32301,"Phone":"850-222-8103","Fax":"850-222-0105","Email":"fannie@steese.com","Web":"http://www.fanniesteese.com"},
            {"FirstName":"Roger","LastName":"Seid","Company":"Yoshida, Gerald C Esq","Address":"3738 N Monroe St","City":"Tallahassee","County":"Leon","State":"FL","Zip":32303,"Phone":"850-422-1535","Fax":"850-422-8152","Email":"roger@seid.com","Web":"http://www.rogerseid.com"},
            {"FirstName":"Dollie","LastName":"Daquino","Company":"Jd Edwards & Co","Address":"1005 Congress Ave","City":"Austin","County":"Travis","State":"TX","Zip":78701,"Phone":"512-478-9636","Fax":"512-478-9874","Email":"dollie@daquino.com","Web":"http://www.dolliedaquino.com"},
            {"FirstName":"Eva","LastName":"Seahorn","Company":"Saunders Appraisal Inc","Address":"3 Northern Blvd","City":"Amherst","County":"Hillsborough","State":"NH","Zip":03031,"Phone":"603-673-6072","Fax":"603-673-5009","Email":"eva@seahorn.com","Web":"http://www.evaseahorn.com"},
            {"FirstName":"Mamie","LastName":"Mcintee","Company":"Jacobs, Brian Realtor","Address":"2810 Jacobs Ave","City":"Eureka","County":"Humboldt","State":"CA","Zip":95501,"Phone":"707-443-0621","Fax":"707-443-9147","Email":"mamie@mcintee.com","Web":"http://www.mamiemcintee.com"},
            {"FirstName":"Lyndon","LastName":"Bellerdine","Company":"A B C Lock & Key","Address":"200 California St","City":"San Francisco","County":"San Francisco","State":"CA","Zip":94111,"Phone":"415-705-1956","Fax":"415-705-2887","Email":"lyndon@bellerdine.com","Web":"http://www.lyndonbellerdine.com"},
            {"FirstName":"Lashonda","LastName":"Derouen","Company":"Travel Agent Magazine","Address":"101 Royal St","City":"Alexandria","County":"Alexandria City","State":"VA","Zip":22314,"Phone":"703-684-3394","Fax":"703-684-0307","Email":"lashonda@derouen.com","Web":"http://www.lashondaderouen.com"},
            {"FirstName":"Jacklyn","LastName":"Emayo","Company":"Super 8 Motel Temple","Address":"101 Us Highway 46","City":"Fairfield","County":"Essex","State":"NJ","Zip":07004,"Phone":"973-882-3960","Fax":"973-882-1908","Email":"jacklyn@emayo.com","Web":"http://www.jacklynemayo.com"},
            {"FirstName":"Rubin","LastName":"Crotts","Company":"Misko, Charles G Esq","Address":"303 N Indian Canyon Dr","City":"Palm Springs","County":"Riverside","State":"CA","Zip":92262,"Phone":"760-327-0337","Fax":"760-327-0929","Email":"rubin@crotts.com","Web":"http://www.rubincrotts.com"},
            {"FirstName":"Boris","LastName":"Catino","Company":"Dream Homes Usa Inc","Address":"645 Church St","City":"Norfolk","County":"Norfolk City","State":"VA","Zip":23510,"Phone":"757-627-8408","Fax":"757-627-6195","Email":"boris@catino.com","Web":"http://www.boriscatino.com"},
            {"FirstName":"Jannie","LastName":"Bowditch","Company":"Lindsays Landing Rv Pk & Mrna","Address":"1102 Main St","City":"Grandview","County":"Jackson","State":"MO","Zip":64030,"Phone":"816-765-0961","Fax":"816-765-3469","Email":"jannie@bowditch.com","Web":"http://www.janniebowditch.com"},
            {"FirstName":"Colin","LastName":"Altonen","Company":"Smith, Arthur D Esq","Address":"1201 18th St","City":"Denver","County":"Denver","State":"CO","Zip":80202,"Phone":"303-292-5477","Fax":"303-292-4239","Email":"colin@altonen.com","Web":"http://www.colinaltonen.com"},
            {"FirstName":"Kerry","LastName":"Evertt","Company":"Washington Crossing Inn","Address":"337 S North Lake Blvd","City":"Altamonte Springs","County":"Seminole","State":"FL","Zip":32701,"Phone":"407-332-9851","Fax":"407-332-1718","Email":"kerry@evertt.com","Web":"http://www.kerryevertt.com"},
            {"FirstName":"Kathie","LastName":"Argenti","Company":"Microtel Franchise & Dev Corp","Address":"410 Front St","City":"Brainerd","County":"Crow Wing","State":"MN","Zip":56401,"Phone":"218-828-9253","Fax":"218-828-1401","Email":"kathie@argenti.com","Web":"http://www.kathieargenti.com"},
            {"FirstName":"Henrietta","LastName":"Cintora","Company":"Keyes, Judith Droz Esq","Address":"1063 Fm Wzzw","City":"Milton","County":"Cabell","State":"WV","Zip":25541,"Phone":"304-743-5440","Fax":"304-743-7475","Email":"henrietta@cintora.com","Web":"http://www.henriettacintora.com"},
            {"FirstName":"Mariano","LastName":"Maury","Company":"Donut & Sandwich Shop","Address":"1092 Saint Georges Ave","City":"Rahway","County":"Union","State":"NJ","Zip":07065,"Phone":"732-388-1579","Fax":"732-388-9355","Email":"mariano@maury.com","Web":"http://www.marianomaury.com"},
            {"FirstName":"Lottie","LastName":"Voll","Company":"Mason, Joseph G Esq","Address":"55 E 10th Ave","City":"Eugene","County":"Lane","State":"OR","Zip":97401,"Phone":"541-342-7282","Fax":"541-342-4657","Email":"lottie@voll.com","Web":"http://www.lottievoll.com"},
            {"FirstName":"Ofelia","LastName":"Sheffler","Company":"Rimpsey Agency","Address":"628 Pacific Ave","City":"Oxnard","County":"Ventura","State":"CA","Zip":93030,"Phone":"805-483-7161","Fax":"805-483-5693","Email":"ofelia@sheffler.com","Web":"http://www.ofeliasheffler.com"},
            {"FirstName":"Gaston","LastName":"Cieloszyk","Company":"Center For Hope Hospice Inc","Address":"1160 Wccs","City":"Homer City","County":"Indiana","State":"PA","Zip":15748,"Phone":"724-479-0355","Fax":"724-479-7077","Email":"gaston@cieloszyk.com","Web":"http://www.gastoncieloszyk.com"},
            {"FirstName":"Karla","LastName":"Ken","Company":"Nicollet Process Engineering","Address":"2135 11th St","City":"Rockford","County":"Winnebago","State":"IL","Zip":61104,"Phone":"815-968-0369","Fax":"815-968-7904","Email":"karla@ken.com","Web":"http://www.karlaken.com"},
            {"FirstName":"Avery","LastName":"Parbol","Company":"Schlackman, William H","Address":"22343 Se Stark St","City":"Gresham","County":"Multnomah","State":"OR","Zip":97030,"Phone":"503-666-1948","Fax":"503-666-9241","Email":"avery@parbol.com","Web":"http://www.averyparbol.com"},
            {"FirstName":"John","LastName":"Chipley","Company":"Manpower Temporary Services","Address":"2 Horizon Rd  #-2","City":"Fort Lee","County":"Bergen","State":"NJ","Zip":07024,"Phone":"201-224-7741","Fax":"201-224-7282","Email":"john@chipley.com","Web":"http://www.johnchipley.com"},
            {"FirstName":"Luella","LastName":"Pliner","Company":"United Waste Systems","Address":"3437 N 12th Ave","City":"Pensacola","County":"Escambia","State":"FL","Zip":32503,"Phone":"850-434-2521","Fax":"850-434-5228","Email":"luella@pliner.com","Web":"http://www.luellapliner.com"},
            {"FirstName":"Elvira","LastName":"Blumenthal","Company":"Stell Mortgage Investors","Address":"108 Washington St","City":"Keokuk","County":"Lee","State":"IA","Zip":52632,"Phone":"319-524-6237","Fax":"319-524-9435","Email":"elvira@blumenthal.com","Web":"http://www.elvirablumenthal.com"},
            {"FirstName":"Tyree","LastName":"Courrege","Company":"Stitch Craft","Address":"13201 Northwest Fwy","City":"Houston","County":"Harris","State":"TX","Zip":77040,"Phone":"713-690-9216","Fax":"713-690-4043","Email":"tyree@courrege.com","Web":"http://www.tyreecourrege.com"},
            {"FirstName":"Ramon","LastName":"Amaral","Company":"Air Academy Federal Credit Un","Address":"700 W Highway 287","City":"Lander","County":"Fremont","State":"WY","Zip":82520,"Phone":"307-332-2667","Fax":"307-332-3893","Email":"ramon@amaral.com","Web":"http://www.ramonamaral.com"},
            {"FirstName":"Wilfredo","LastName":"Gidley","Company":"Mclaughlin, John F Esq","Address":"2255 Kuhio Ave  #-1203","City":"Honolulu","County":"Honolulu","State":"HI","Zip":96815,"Phone":"808-924-2610","Fax":"808-924-7666","Email":"wilfredo@gidley.com","Web":"http://www.wilfredogidley.com"},
            {"FirstName":"Gracie","LastName":"Ehn","Company":"P C Systems","Address":"Kahala","City":"Honolulu","County":"Honolulu","State":"HI","Zip":96816,"Phone":"808-247-8624","Fax":"808-247-7982","Email":"gracie@ehn.com","Web":"http://www.gracieehn.com"},
            {"FirstName":"Dorthy","LastName":"Alexy","Company":"Frank Siviglia & Co","Address":"Pearlridge","City":"Aiea","County":"Honolulu","State":"HI","Zip":96701,"Phone":"808-247-4421","Fax":"808-247-7192","Email":"dorthy@alexy.com","Web":"http://www.dorthyalexy.com"},
            {"FirstName":"Bertie","LastName":"Luby","Company":"Puckett, Dennis L Esq","Address":"Windward","City":"Kaneohe","County":"Honolulu","State":"HI","Zip":96744,"Phone":"808-247-8062","Fax":"808-247-2529","Email":"bertie@luby.com","Web":"http://www.bertieluby.com"},
            {"FirstName":"Rudy","LastName":"Kuhle","Company":"General Insurcorp Inc","Address":"1418 3rd Ave","City":"New York","County":"New York","State":"NY","Zip":10028,"Phone":"212-628-9987","Fax":"212-628-1234","Email":"rudy@kuhle.com","Web":"http://www.rudykuhle.com"},
            {"FirstName":"Gale","LastName":"Nolau","Company":"Lust, C James Esq","Address":"104 N Aurora St","City":"Ithaca","County":"Tompkins","State":"NY","Zip":14850,"Phone":"607-277-1567","Fax":"607-277-6524","Email":"gale@nolau.com","Web":"http://www.galenolau.com"},
            {"FirstName":"Kenya","LastName":"Bruni","Company":"Hurley, Thomas J Jr","Address":"280 N Midland Ave","City":"Saddle Brook","County":"Bergen","State":"NJ","Zip":07663,"Phone":"201-646-9077","Fax":"201-646-8526","Email":"kenya@bruni.com","Web":"http://www.kenyabruni.com"},
            {"FirstName":"Tricia","LastName":"Kruss","Company":"Edwards, Elwood L","Address":"4685 Ne 14th St","City":"Des Moines","County":"Polk","State":"IA","Zip":50313,"Phone":"515-262-3267","Fax":"515-262-6264","Email":"tricia@kruss.com","Web":"http://www.triciakruss.com"},
            {"FirstName":"Mack","LastName":"Jurasin","Company":"Sherman, Michael D Esq","Address":"1180 Dora Hwy","City":"Pulaski","County":"Pulaski","State":"VA","Zip":24301,"Phone":"540-980-4958","Fax":"540-980-2978","Email":"mack@jurasin.com","Web":"http://www.mackjurasin.com"},
            {"FirstName":"Margarito","LastName":"Kornbau","Company":"Acker Knitting Mills Inc","Address":"303 W 15th St","City":"Austin","County":"Travis","State":"TX","Zip":78701,"Phone":"512-478-0371","Fax":"512-478-4449","Email":"margarito@kornbau.com","Web":"http://www.margaritokornbau.com"},
            {"FirstName":"Lucien","LastName":"Iurato","Company":"Anderson Consulting","Address":"3918 16th Ave","City":"Brooklyn","County":"Kings","State":"NY","Zip":11218,"Phone":"718-871-7952","Fax":"718-871-3483","Email":"lucien@iurato.com","Web":"http://www.lucieniurato.com"},
            {"FirstName":"Jarvis","LastName":"Galas","Company":"Younghans & Burke","Address":"307 E President St","City":"Savannah","County":"Chatham","State":"GA","Zip":31401,"Phone":"912-236-8524","Fax":"912-236-8705","Email":"jarvis@galas.com","Web":"http://www.jarvisgalas.com"},
            {"FirstName":"Billie","LastName":"Cowley","Company":"Spears, Robert M Esq","Address":"1700 Street Rd","City":"Warrington","County":"Bucks","State":"PA","Zip":18976,"Phone":"215-548-0842","Fax":"215-548-4706","Email":"billie@cowley.com","Web":"http://www.billiecowley.com"},
            {"FirstName":"Jacinto","LastName":"Gawron","Company":"Matt Kokkonen Insurance Agency","Address":"1740 House","City":"Lumberville","County":"Bucks","State":"PA","Zip":18933,"Phone":"215-297-0120","Fax":"215-297-5442","Email":"jacinto@gawron.com","Web":"http://www.jacintogawron.com"},
            {"FirstName":"Enrique","LastName":"Oroark","Company":"Callaghan, Kathleen M Esq","Address":"34 W 17th St","City":"New York","County":"New York","State":"NY","Zip":10011,"Phone":"212-366-5568","Fax":"212-366-6877","Email":"enrique@oroark.com","Web":"http://www.enriqueoroark.com"},
            {"FirstName":"Alva","LastName":"Pennigton","Company":"Citizens Savings Bank","Address":"1275 County Road 210 W","City":"Jacksonville","County":"Saint Johns","State":"FL","Zip":32259,"Phone":"904-260-2345","Fax":"904-260-3735","Email":"alva@pennigton.com","Web":"http://www.alvapennigton.com"},
            {"FirstName":"Socorro","LastName":"Balandran","Company":"Mooring","Address":"401 S Main St","City":"Greensburg","County":"Westmoreland","State":"PA","Zip":15601,"Phone":"724-834-6908","Fax":"724-834-8831","Email":"socorro@balandran.com","Web":"http://www.socorrobalandran.com"},
            {"FirstName":"Nadia","LastName":"Wilshire","Company":"Midwest Undercar Distributors","Address":"1801 West Ave S","City":"La Crosse","County":"La Crosse","State":"WI","Zip":54601,"Phone":"608-788-4965","Fax":"608-788-5946","Email":"nadia@wilshire.com","Web":"http://www.nadiawilshire.com"},
            {"FirstName":"Lynda","LastName":"Caraway","Company":"Lowe Art Museum","Address":"1822 Spring Garden St","City":"Philadelphia","County":"Philadelphia","State":"PA","Zip":19130,"Phone":"215-564-3171","Fax":"215-564-2241","Email":"lynda@caraway.com","Web":"http://www.lyndacaraway.com"},
            {"FirstName":"Saundra","LastName":"Mcaulay","Company":"Rcf Inc","Address":"2401 Cleveland Rd W","City":"Huron","County":"Erie","State":"OH","Zip":44839,"Phone":"419-433-5558","Fax":"419-433-9756","Email":"saundra@mcaulay.com","Web":"http://www.saundramcaulay.com"},
            {"FirstName":"Allan","LastName":"Schwantd","Company":"Micro Wire Products","Address":"406 Ne 3rd St","City":"McMinnville","County":"Yamhill","State":"OR","Zip":97128,"Phone":"503-434-9666","Fax":"503-434-3863","Email":"allan@schwantd.com","Web":"http://www.allanschwantd.com"},
            {"FirstName":"Wilmer","LastName":"Constantineau","Company":"Nutra Source","Address":"1745 W 18th Ave","City":"Eugene","County":"Lane","State":"OR","Zip":97402,"Phone":"541-345-4729","Fax":"541-345-4884","Email":"wilmer@constantineau.com","Web":"http://www.wilmerconstantineau.com"},
            {"FirstName":"Savannah","LastName":"Kesich","Company":"Wbnd Am","Address":"221 Main","City":"Park City","County":"Summit","State":"UT","Zip":84060,"Phone":"435-645-0986","Fax":"435-645-9504","Email":"savannah@kesich.com","Web":"http://www.savannahkesich.com"},
            {"FirstName":"Dwain","LastName":"Cuttitta","Company":"Kintech Stamping Inc","Address":"1919 Connecticut Ave Nw","City":"Washington","County":"District of Columbia","State":"DC","Zip":20009,"Phone":"202-265-7854","Fax":"202-265-9475","Email":"dwain@cuttitta.com","Web":"http://www.dwaincuttitta.com"},
            {"FirstName":"Krystle","LastName":"Stika","Company":"Signature Inn","Address":"3730 Fm","City":"Houston","County":"Harris","State":"TX","Zip":77068,"Phone":"281-537-5324","Fax":"281-537-3235","Email":"krystle@stika.com","Web":"http://www.krystlestika.com"},
            {"FirstName":"Felipe","LastName":"Gould","Company":"Black, Ronald H","Address":"2308 Bienville Blvd","City":"Ocean Springs","County":"Jackson","State":"MS","Zip":39564,"Phone":"228-875-2811","Fax":"228-875-6402","Email":"felipe@gould.com","Web":"http://www.felipegould.com"},
            {"FirstName":"Steve","LastName":"Schorr","Company":"Midwest Fire Protection Inc","Address":"1810 N King St","City":"Honolulu","County":"Honolulu","State":"HI","Zip":96819,"Phone":"808-842-7045","Fax":"808-842-7338","Email":"steve@schorr.com","Web":"http://www.steveschorr.com"},
            {"FirstName":"Naomi","LastName":"Caetano","Company":"Bashlin Industries Inc","Address":"50 Spring St  #-1","City":"Cresskill","County":"Bergen","State":"NJ","Zip":07626,"Phone":"201-569-3572","Fax":"201-569-5795","Email":"naomi@caetano.com","Web":"http://www.naomicaetano.com"},
            {"FirstName":"Melody","LastName":"Saddat","Company":"Richards, Edward W Esq","Address":"3540 S 84th St","City":"Omaha","County":"Douglas","State":"NE","Zip":68124,"Phone":"402-397-0581","Fax":"402-397-8391","Email":"melody@saddat.com","Web":"http://www.melodysaddat.com"},
            {"FirstName":"Mitchel","LastName":"Harnar","Company":"Copycat Quick Print","Address":"1810 Pioneer Ave","City":"Cheyenne","County":"Laramie","State":"WY","Zip":82001,"Phone":"307-632-0256","Fax":"307-632-2516","Email":"mitchel@harnar.com","Web":"http://www.mitchelharnar.com"},
            {"FirstName":"Sharlene","LastName":"Circelli","Company":"Calibron Systems Inc","Address":"4018 W Clearwater Ave","City":"Kennewick","County":"Benton","State":"WA","Zip":99336,"Phone":"509-783-5167","Fax":"509-783-7346","Email":"sharlene@circelli.com","Web":"http://www.sharlenecircelli.com"},
            {"FirstName":"Sean","LastName":"Bonnet","Company":"Corporate Alternatives Inc","Address":"3043 Ridge Rd","City":"Lansing","County":"Cook","State":"IL","Zip":60438,"Phone":"708-474-4766","Fax":"708-474-0011","Email":"sean@bonnet.com","Web":"http://www.seanbonnet.com"},
            {"FirstName":"Travis","LastName":"Brockert","Company":"Santa Cruz Title Co","Address":"7828 N 19th Ave","City":"Phoenix","County":"Maricopa","State":"AZ","Zip":85021,"Phone":"602-995-1362","Fax":"602-995-0966","Email":"travis@brockert.com","Web":"http://www.travisbrockert.com"},
            {"FirstName":"Candice","LastName":"Bruckman","Company":"Fernando Foods Inc","Address":"611 1st Ave N","City":"Humboldt","County":"Humboldt","State":"IA","Zip":50548,"Phone":"515-332-0809","Fax":"515-332-9083","Email":"candice@bruckman.com","Web":"http://www.candicebruckman.com"},
            {"FirstName":"Mabel","LastName":"Weeden","Company":"Pepsi Cola Gen Bottlers Inc","Address":"300 E Phillips St","City":"Richardson","County":"Dallas","State":"TX","Zip":75081,"Phone":"972-235-5619","Fax":"972-235-1843","Email":"mabel@weeden.com","Web":"http://www.mabelweeden.com"},
            {"FirstName":"Armando","LastName":"Papik","Company":"Cryogenic Society Of America","Address":"615 W Markham St","City":"Little Rock","County":"Pulaski","State":"AR","Zip":72201,"Phone":"501-376-4154","Fax":"501-376-0608","Email":"armando@papik.com","Web":"http://www.armandopapik.com"},
            {"FirstName":"Raphael","LastName":"Bickel","Company":"S Shamash & Sons Inc","Address":"550 N Brand Blvd  #-800","City":"Glendale","County":"Los Angeles","State":"CA","Zip":91203,"Phone":"818-246-1195","Fax":"818-246-4734","Email":"raphael@bickel.com","Web":"http://www.raphaelbickel.com"},
            {"FirstName":"Darren","LastName":"Merlin","Company":"Pozzuolo & Perkiss Pc","Address":"550 N Edward St","City":"Decatur","County":"Macon","State":"IL","Zip":62522,"Phone":"217-428-0453","Fax":"217-428-1491","Email":"darren@merlin.com","Web":"http://www.darrenmerlin.com"},
            {"FirstName":"Francis","LastName":"Soo","Company":"Allen Industrial Supply","Address":"218 W Main St","City":"Sparta","County":"Monroe","State":"WI","Zip":54656,"Phone":"608-269-7306","Fax":"608-269-3359","Email":"francis@soo.com","Web":"http://www.francissoo.com"},
            {"FirstName":"Mitzi","LastName":"Ihenyen","Company":"Helm, Norman O","Address":"979 3rd Ave","City":"New York","County":"New York","State":"NY","Zip":10022,"Phone":"212-838-8303","Fax":"212-838-3221","Email":"mitzi@ihenyen.com","Web":"http://www.mitziihenyen.com"},
            {"FirstName":"Kathleen","LastName":"Beresnyak","Company":"R & E Associates","Address":"100 W 25th Ave","City":"San Mateo","County":"San Mateo","State":"CA","Zip":94403,"Phone":"650-349-6809","Fax":"650-349-5962","Email":"kathleen@beresnyak.com","Web":"http://www.kathleenberesnyak.com"},
            {"FirstName":"Adela","LastName":"Cervantsz","Company":"Arizona Awards","Address":"102 5th St N","City":"Clanton","County":"Chilton","State":"AL","Zip":35045,"Phone":"205-755-4137","Fax":"205-755-1034","Email":"adela@cervantsz.com","Web":"http://www.adelacervantsz.com"},
            {"FirstName":"Randal","LastName":"Gansen","Company":"Quik Print","Address":"1 First Federal Plz","City":"Rochester","County":"Monroe","State":"NY","Zip":14614,"Phone":"585-238-8558","Fax":"585-238-7764","Email":"randal@gansen.com","Web":"http://www.randalgansen.com"},
            {"FirstName":"Alyssa","LastName":"Biasotti","Company":"Johnson Hardware Co","Address":"22 James St","City":"Middletown","County":"Orange","State":"NY","Zip":10940,"Phone":"845-343-1878","Fax":"845-343-5354","Email":"alyssa@biasotti.com","Web":"http://www.alyssabiasotti.com"},
            {"FirstName":"Janet","LastName":"Schaffter","Company":"Hall, Camden M Esq","Address":"131 Rimbach St","City":"Hammond","County":"Lake","State":"IN","Zip":46320,"Phone":"219-853-9283","Fax":"219-853-9329","Email":"janet@schaffter.com","Web":"http://www.janetschaffter.com"},
            {"FirstName":"Armando","LastName":"Kolm","Company":"Cooper & Cooper Cpas","Address":"201 N Main St","City":"Anderson","County":"Anderson","State":"SC","Zip":29621,"Phone":"864-260-3642","Fax":"864-260-9205","Email":"armando@kolm.com","Web":"http://www.armandokolm.com"},
            {"FirstName":"Gil","LastName":"Scarpa","Company":"Hughes, James D Esq","Address":"12 E Broad St","City":"Hazleton","County":"Luzerne","State":"PA","Zip":18201,"Phone":"570-459-9281","Fax":"570-459-5191","Email":"gil@scarpa.com","Web":"http://www.gilscarpa.com"},
            {"FirstName":"Vanessa","LastName":"Lewallen","Company":"Fargo Glass & Paint Co","Address":"5 E Main","City":"Centerburg","County":"Knox","State":"OH","Zip":43011,"Phone":"740-625-8098","Fax":"740-625-1696","Email":"vanessa@lewallen.com","Web":"http://www.vanessalewallen.com"},
            {"FirstName":"Burton","LastName":"Brining","Company":"Corcoran Machine Company","Address":"135 E Liberty St","City":"Wooster","County":"Wayne","State":"OH","Zip":44691,"Phone":"330-262-5481","Fax":"330-262-7555","Email":"burton@brining.com","Web":"http://www.burtonbrining.com"},
            {"FirstName":"Rosalie","LastName":"Krigger","Company":"Aaron, William Esq","Address":"330 Route 211 E","City":"Middletown","County":"Orange","State":"NY","Zip":10940,"Phone":"845-343-2313","Fax":"845-343-2979","Email":"rosalie@krigger.com","Web":"http://www.rosaliekrigger.com"},
            {"FirstName":"Tammie","LastName":"Schwartzwalde","Company":"Cox, Thomas E","Address":"415 Center St","City":"Ironton","County":"Lawrence","State":"OH","Zip":45638,"Phone":"740-532-5488","Fax":"740-532-0319","Email":"tammie@schwartzwalde.com","Web":"http://www.tammieschwartzwalde.com"},
            {"FirstName":"Darrin","LastName":"Neiss","Company":"Delaney, James J Jr","Address":"101 W Central Blvd","City":"Kewanee","County":"Henry","State":"IL","Zip":61443,"Phone":"309-852-5127","Fax":"309-852-8638","Email":"darrin@neiss.com","Web":"http://www.darrinneiss.com"},
            {"FirstName":"Rosalia","LastName":"Kennemur","Company":"Reagan, Thomas J Esq","Address":"222 S 10th St","City":"Oakdale","County":"Allen","State":"LA","Zip":71463,"Phone":"318-335-5586","Fax":"318-335-1873","Email":"rosalia@kennemur.com","Web":"http://www.rosaliakennemur.com"},
            {"FirstName":"Callie","LastName":"Leboeuf","Company":"Town Motors","Address":"100 S 2nd Ave","City":"Alpena","County":"Alpena","State":"MI","Zip":49707,"Phone":"989-354-3344","Fax":"989-354-3712","Email":"callie@leboeuf.com","Web":"http://www.callieleboeuf.com"},
            {"FirstName":"Joey","LastName":"Bolick","Company":"Utility Trailer Sales","Address":"7700 N Council Rd","City":"Oklahoma City","County":"Oklahoma","State":"OK","Zip":73132,"Phone":"405-728-5972","Fax":"405-728-5244","Email":"joey@bolick.com","Web":"http://www.joeybolick.com"}];


          console.log('Adding records to MajorEvents collection.');
          for (var i = 0; i < data.length; i++) {
            MajorEvents.insert({
              FirstName:   data[i].FirstName,
              LastName:  data[i].LastName,
              FullName: data[i].FirstName + ' ' + data[i].LastName,
              Company:  data[i].Company,
              Address:  data[i].Address,
              City:  data[i].City,
              County:  data[i].County,
              State:  data[i].State,
              Zip:  data[i].Zip,
              Phone:  data[i].Phone,
              Fax:  data[i].Fax,
              Email:  data[i].Email,
              Web:  data[i].Web,
              createdAt: new Date()
            });
            */
    }
    console.log('Not even 500 records successfully added to MajorEvents collection.');
  }
  console.log('MajorEvents collection initialized and ready.');
});