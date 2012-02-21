var util = require('util'),
	search = require('./search.js');


// the answer is after sending a request to twitter
search.on('answer', function(answer) {

	//parseAnswer is a simple function to get Username\nTweet\n from the JSON-String
	util.puts(search.parseAnswer(answer));
	}
});

// Send a request to search for 'foobar' to the twitter Search API
search.request('foobar');
