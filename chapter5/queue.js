var Queue = function () {
	this.dataStore = [];
}

Queue.prototype.enqueue = function(element) {
	this.dataStore.push(element);
};

Queue.prototype.dequeue = function() {
	return this.dataStore.shift();
};

Queue.prototype.front = function() {
	return this.dataStore[0];
};

Queue.prototype.back = function() {
	return this.dataStore[this.dataStore.length-1];
};

Queue.prototype.toString = function() {
	var str = '';

	for (var i = 0; i < this.dataStore.length; i++) {
		str += (this.dataStore[i] + '\n')
	}

	return str;
};

Queue.prototype.isEmpty = function() {
	return this.dataStore.length === 0
};

Queue.prototype.clear = function() {
	delete this.dataStore;
	this.dataStore = [];
};

module.exports = exports = Queue;