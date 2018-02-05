var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var events = require('events');

var ObjectId = require('mongodb').ObjectID;
var eventEm = new events.EventEmitter;

function getFoodSchedule() {
	var url = 'mongodb://localhost:27017/food';

	MongoClient.connect(url, function (err, db) {
		assert.equal(err, null);

	var cursor = db.collection('foodSchedule').find();
	cursor.each (function(err, doc) {
		assert.equal(err, null);
		if (null  != doc) {
			eventEm.emit('gotdata', doc);
		} else {
			console.log('[EVENT] close');
			eventEm.emit('close', 'done');
		}
	});
	});
}

var data = []
eventEm.on('gotdata', function (message) {
	console.log('[EVENT] gotdata');
	data.push(message);
});

eventEm.on('close', function(message) {
});

function getData() {
	var tmpData = data;
	data = [];
	return JSON.stringify(tmpData, null, 4);
}

exports.getFoodSchedule = getFoodSchedule;
exports.eventEm = eventEm;
exports.data = data;
exports.getData = getData;
