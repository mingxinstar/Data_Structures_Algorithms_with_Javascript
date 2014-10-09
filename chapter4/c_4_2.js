var Stack = require('./stack');

/**
 * 转进制方法
 * @param  {[type]} num  [description]
 * @param  {[type]} base [description]
 * @return {[type]}      [description]
 */
function mulBase (num, base) {
	var s = new Stack();

	do {
		s.push(num % base);
		num = Math.floor(num/base);
	} while (num > 0);

	var converted = '';

	while (s.length() > 0) {
		converted += s.pop();
	}

	return converted;
}

console.log(mulBase(33, 2));
console.log(mulBase(51, 2));
console.log(mulBase(3, 2));
console.log(mulBase(3, 8));
console.log(mulBase(99, 8));