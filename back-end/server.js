var express = require('express');
var app = express();

app.get('/api', function(req, res) {
	console.log(req.query);
	res.json({  });
});

app.listen(8080);