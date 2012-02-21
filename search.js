var http = require('http'),
	EventEmitter = require('events').EventEmitter;
	querystring = require('querystring');

module.exports = new EventEmitter();

module.exports.parseAnswer = function (answer)
{
	var answerObj = JSON.parse(answer);
	var ret = "";
	for(i in answerObj.results)
	{
		ret = ret + answerObj.results[i].from_user + '\n';
		ret = ret + answerObj.results[i].text + '\n';
	}
	return ret;
};

module.exports.request = function (reqString) {
	var options = {
		hostname : 'search.twitter.com',
		port : 80,
		path : '/search.json?q=' + encodeURIComponent(reqString),
		method : 'GET'
	};

	var answer = "";

	var req = http.request(options, function(res) {
		
		res.on('data', function(dat) {
			answer = answer + dat;
		});

		res.on('end', function(){	// emmit-data
			module.exports.emit('answer', answer);	
		});
	});

	req.on('error', function(e) {
		require('util').puts(e);
	});

	req.end();
}
