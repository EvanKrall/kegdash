$(document).ready(function () {
	document.mockData = {
		"in stock" : [
			{
				"beer" : {
					"name" : "Business Cat Ale",
					"style" : "Ale",
					"brewery" : "Ohai",
					"logo" : "http://i.imgur.com/Md7WU.jpg",
					"abv" : 5.0,
					"desc" : "A serious beer for serious cats.",
					"baUrl" : "http://beeradvocate.com/thisisafakeurl"
				},
				"kegStatus" : "in stock",
				"numLikes" : 5
			}
		],
		"on deck" : [
			{
				"beer" : {
					"name" : "Monorail",
					"style" : "Pilsner",
					"brewery" : "Ohai",
					"logo" : "http://i.imgur.com/JFOJI.png",
					"abv" : 8.4,
					"desc" : "Will get you where you want to be efficiently.",
					"baUrl" : "http://beeradvocate.com/anotherfakeurl"
				},
				"kegStatus" : "on deck",
				"numLikes" : 3
			},
			{
				"beer" : {
					"name" : "Ceiling Cat",
					"style" : "Pale ale",
					"brewery" : "Ohai",
					"logo" : "http://i.imgur.com/qqG71.jpg",
					"abv" : 3.7,
					"desc" : "Light. Bitter. Watches you masturbate.",
					"baUrl" : "http://beeradvocate.com/yetanotherfakeurl"
				},
				"kegStatus" : "on deck",
				"numLikes" : 20
			}
		],
		"on tap" : [
			{
				"beer" : {
					"name" : "Ceiling Cat",
					"style" : "Pale ale",
					"brewery" : "Ohai",
					"logo" : "http://i.imgur.com/qqG71.jpg",
					"abv" : 3.7,
					"desc" : "Light. Bitter. Watches you masturbate.",
					"baUrl" : "http://beeradvocate.com/yetanotherfakeurl"
				},
				"kegStatus" : "on tap",
				"numLikes" : 4
			}
		],
		"requested" : [
			{
				"beer" : {
					"name" : "Basement Cat",
					"style" : "Porter",
					"brewery" : "Ohai",
					"logo" : "http://i.chzbgr.com/completestore/2010/4/17/129159947345378375.jpg",
					"abv" : 3.7,
					"desc" : "Dark and aromatic. Complements Ceiling Cat, but the two can never co-exist in the same room.",
					"baUrl" : "http://beeradvocate.com/evenmorefakeurls"
				},
				"kegStatus" : "requested",
				"numLikes" : 3
			},
			{
				"beer" : {
					"name" : "Bud Light",
					"style" : "Piss water",
					"brewery" : "Budweiser",
					"logo" : "http://www.aatiffany.com/images/budlight1.jpg",
					"abv": 0.0,
					"desc" : "Terrible. Just... don't.",
					"baUrl": "http://beeradvocate.com/beer/profile/29/1320/"
				},
				"kegStatus" : "requested",
				"numLikes" : 8234
			}
		]
	};

});
