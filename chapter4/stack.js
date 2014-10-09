var Stack = function () {
	this.dataStore = [];
	this.top = 0;
}

Stack.prototype.push = function(element) {
	this.dataStore[this.top++] = element;
};

Stack.prototype.pop = function() {
	this.top--;
	return this.dataStore.pop();
};

Stack.prototype.peek = function() {
	return this.dataStore[this.top-1]
};

Stack.prototype.clear = function() {
	this.top = 0;
	delete this.dataStore;
	this.dataStore = [];
};

Stack.prototype.length = function() {
	return this.top;
};

module.exports = exports = Stack;