var hashTable = require('./hashTable');

var ary = ['David', 'Jennifer', 'Donnie', 'Raymond', 'Cynthia', 'Mike', 'Clayton', 'Danny', 'Jonathan'],
	hTable = new hashTable();

for (var i = 0, l = ary.length; i < l; i++) {
	hTable.put(ary[i]);
}

hTable.showDistro();

