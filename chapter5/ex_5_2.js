var Queue = require('./queue'),
	fs = require('fs');

/**
 * 舞者类
 * @param {String} name 姓名
 * @param {String} sex  性别
 */
var Dancer = function (name, sex) {
	this.name = name;
	this.sex = sex;
}

/**
 * 对数据内的人按照性别进行排队
 * @param  {Object} females 你女性队列
 * @param  {Object} males   男性队列
 */
function getDancers (females, males) {
	var names = fs.readFileSync('./dancer.txt', {encoding : 'utf8'}).split('\n');

	for (var i = 0, l = names.length; i < l; i++) {
		var tmpName = names[i].trim(),
			tmpDancer = tmpName.split(' '),
			sex = tmpDancer[0],
			name = tmpDancer[1];

		if (sex === 'F') {
			females.enqueue(new Dancer(name, sex));
		} else {
			males.enqueue(new Dancer(name, sex));
		}
	}
}

/**
 * 跳舞函数，根据要求组成跳舞的人
 * @param  {Object} females 你女性队列
 * @param  {Object} males   男性队列
 */
function dance (females, males) {
	console.log('The dance partners area: ');

	while (!females.isEmpty() && !males.isEmpty()) {
		var f = females.dequeue(),
			m = males.dequeue();

		console.log('Female dancer is : ' + f.name + ' and male dancer is : '+m.name);
	}
}

var femaleDancers = new Queue(),
	maleDancers = new Queue();

getDancers(femaleDancers, maleDancers);
dance(femaleDancers, maleDancers);

if (!femaleDancers.isEmpty()) {
	console.log(femaleDancers.front().name + ' is waiting to dance');
}

if (!maleDancers.isEmpty()) {
	console.log(maleDancers.front().name + ' is waiting to dance');
}