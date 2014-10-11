var Queue = require('../queue');

var Dequeue = Queue;

/**
 * 添加新元素
 * @param  {Object/String/Number}  element [description]
 * @param  {Boolean} isBack  [description]
 * @return {[type]}          [description]
 */
Dequeue.prototype.enqueue = function(element, isBack) {
	this.dataStore[isBack ? 'push' : 'unshift'](element);
};

/**
 * 从两端删除元素
 * @param  {Boolean} isBack [description]
 * @return {[type]}         [description]
 */
Dequeue.prototype.dequeue = function(isBack) {
	return this.dataStore[isBack ? 'pop' : 'shift']();
};

function test () {
	var dq = new Dequeue();

	dq.enqueue('1', true);
	dq.enqueue('2', true);
	dq.enqueue('3', true);

	console.log('enqueue back :');
	console.log(dq.toString());

	dq.enqueue('4');
	dq.enqueue('5');
	dq.enqueue('6');
	dq.enqueue('7');

	console.log('enqueue front :');
	console.log(dq.toString());

	dq.dequeue();
	dq.dequeue();

	console.log('dequeue front :');
	console.log(dq.toString());
	
	dq.dequeue(true);
	dq.dequeue(true);

	console.log('dequeue back :');
	console.log(dq.toString());
}

// test();

module.exports = exports = Dequeue;