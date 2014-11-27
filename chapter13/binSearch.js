/**
 * 二分查找
 * @param  {Array} ary  数组
 * @param  {Number} data 要查找的数字
 * @return {Number}      对应的索引值
 */
function _binSearch (ary, data)  {
	var upperBound = ary.length - 1, //上边界
		lowerBound = 0; //小边界

	while (lowerBound <= upperBound) {
		var mid = Math.floor((upperBound + lowerBound) / 2);

		console.log("mid is : ", mid);

		if (ary[mid] < data) {
			lowerBound = mid + 1;
		} else if (ary[mid] > data) {
			upperBound = mid - 1;
		} else {
			return mid;
		}
	}

	return -1;
}

var readline = require('readline'),
	rl = readline.createInterface({
		input : process.stdin,
		output : process.stdout
	});

var nums = [];

function _test () {
	for (var i = 0; i < 100; i++) {
		nums.push(Math.floor(Math.random() * 101));
	}

	nums.sort(function (a, b) {
		return a - b;
	});

	var str = '';
	for (var i = 0; i < 100; i++) {
		str += (nums[i] + " ");

		if (i % 10 === 9) {
			console.log(str);
			str = "";
		}
	}

	console.log('\n');

	_showQuestion();
}

function _showQuestion () {
	rl.question('input a number : \n', function (answer) {
		var index = _binSearch(nums, parseInt(answer, 10));

		rl.write('index is : '+index+' \n');

		_showQuestion();
	});
}


_test();