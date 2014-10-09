var Stack = require('../stack');

// 3.佩兹糖果盒题目
var box = new Stack();
box.push('red');
box.push('yellow');
box.push('white');
box.push('white');
box.push('yellow');
box.push('white');
box.push('yellow');
box.push('yellow');
box.push('red');
box.push('red');
box.push('white');

console.log('box: ',box.dataStore);

function filterYellow (box) {
	var s = new Stack();

	while (box.length() > 0) {
		var poped = box.pop();

		if (poped !== 'yellow') {
			s.push(poped);
		}
	}

	while (s.length() > 0) {
		box.push(s.pop());
	}

	return box;
}

console.log('filterYellow: ', filterYellow(box).dataStore);