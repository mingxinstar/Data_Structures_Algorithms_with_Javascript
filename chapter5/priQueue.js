var Queue = require('./queue');

var PriQueue = Queue;

PriQueue.prototype.dequeue = function() {
	if (this.dataStore.length === 0) {
		return null;
	}

	var priority = this.dataStore[0].code,
		index = 0;

	for (var i = 0, l = this.dataStore.length; i < l; i++) {
		if (this.dataStore[i].code < priority) {
			priority = this.dataStore[i].code;
			index = i;
		}
	}

	return this.dataStore.splice(index, 1)[0];
};

PriQueue.prototype.toString = function() {
	var str = '';

	for (var i = 0, l = this.dataStore.length; i < l; i++) {
		str += ('name : '+this.dataStore[i].name+' code : '+this.dataStore[i].code+'\n');
	}

	return str;
};

module.exports = exports = PriQueue;