var hashTable = require('./hashTable');

function getRandomInt (min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function genStuData (arr) {
	for (var i = 0, l = arr.length; i < l; i++) {
		var num = '';
		for (var j = 0; j < 9; j++) {
			num += Math.floor(Math.random() * 10);
		}

		num += getRandomInt(50, 100);

		arr[i] = num;
	}
}

var students = new Array(10);

genStuData(students);

console.log(students);

var hTable = new hashTable();
for (var i = 0; i < students.length; i++) {
	hTable.put(students[i]);
}
hTable.showDistro();