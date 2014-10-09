var Stack = require('../stack');

// 1.判断括号是否匹配

function isBracketBalance (expression) {
	var ls = new Stack(),
		rs = new Stack(),
		isBalance = true;

	for (var i = 0; i < expression.length; i++) {
		var str = expression[i];

		if (str === '(') {
			ls.push(i);
		} else if (str === ')') {
			if (ls.length() === 0) {
				isBalance = false;
				rs.push(i);
			} else {
				ls.pop();
			}
		}
	}

	if (ls.length() > 0) {
		isBalance = false;
	}

	return {
		isBalance : isBalance, //是否都正确匹配
		ls : ls.dataStore, //未匹配上的左括号位置
		rs : rs.dataStore //未匹配上的右括号位置
	};
}

console.log(isBracketBalance('2+2+(18*5)+(4/'));
console.log(isBracketBalance('2+2+(18*5)+(4/2)'));
console.log(isBracketBalance('2+2+(18*5)+4/2)'));
console.log(isBracketBalance('2+2+(18*5'));
console.log(isBracketBalance('2+2+(18*5+(8/2-9/3)'));
console.log(isBracketBalance('2+2+(18*5+(8/2-(9/3'));
console.log(isBracketBalance('2+2+18*5)+8/2)-9/3)'));