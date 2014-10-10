/**
 * 基数排序
 */
var Queue = require('./queue');

/**
 * 扫描列表
 * @param  {Array} queues 队列列表
 * @param  {Array} nums   数字列表
 * @param  {Number} digit  表示个位或者十位(1个位，10十位)
 */
function distribute (queues, nums, digit) {
	for (var i = 0, l = nums.length; i < l; i++) {
		var num = nums[i];

		if (digit === 1) {
			queues[num%10].enqueue(num);
		} else {
			queues[Math.floor(num/10)].enqueue(num);
		}
	}
}

/**
 * 将排序过的数字重新拿出
 * @param  {[type]} queues [description]
 * @param  {[type]} nums   [description]
 */
function collect (queues, nums) {
	var index = 0;

	for (var i = 0, l = queues.length; i < l; i++) {
		var q = queues[i];

		while (!q.isEmpty()) {
			nums[index++] = q.dequeue();
		}
	}
}

function displayAry (nums) {
	var str = '';

	for (var i = 0, l = nums.length; i < l; i++) {
		str += (nums[i] + ' ');
	}

	console.log(str);
}

function test () {
	var queues = [],
		nums = [];

	for (var i = 0; i < 20; i++) {
		queues[i] = new Queue();
		nums[i] = Math.floor(Math.random() * 100);
	}

	console.log('origin : ');
	displayAry(nums);

	distribute(queues, nums, 1);
	collect(queues, nums);

	console.log('distribute first time : ');
	displayAry(nums);

	distribute(queues, nums, 10);
	collect(queues, nums);
	
	console.log('distribute sec time : ');
	displayAry(nums);
}

test();