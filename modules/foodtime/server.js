var express = require('express');
var mongo_client = require('./mongo_client');

app = express();

var map = {}

app.get('/set/:name/:value', function(req, res) {
	console.log('req recieved: set');
	map[req.params.name] = req.params.value;
	res.end('set:' + req.params.name + '\n');	
});

app.get('/get/:name', function(req, res) {
	console.log('req recieved: get');
	res.end(map[req.params.name] + '\n');
});

app.get('/getFoodSchedule', function (req, res) {
	mongo_client.getFoodSchedule();
	mongo_client.eventEm.on('close', function(message) {
		res.end(mongo_client.getData());
	});
});

app.listen(7776);
