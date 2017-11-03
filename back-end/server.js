var express = require('express');
var app = express();

app.get('/api', function(req, res) {
	console.log(req.query);
	res.set('Access-Control-Allow-Origin', '*');
	res.json({
		href: 'http://example.com',
		text: 'Machine learning Text',
  		subText: 'Machine learning course by MIT.'
  });
});

app.listen(8080);