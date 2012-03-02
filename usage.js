var util = require('util'),
	search = require('./search.js');

search.request('foobar', function(answer){
	
	util.puts(answer); // The JSON String

	util.puts(search.parseAnswer(answer)); // Username \n Tweet \n ...
});
