var Dictionary = require('./Dictionary');

var pbook = new Dictionary();
pbook.add('Mike', 123);
pbook.add('David', 345);
pbook.add('Linda', 567);
pbook.add('Xin', 789);

pbook.showAll();

console.log('count : ', pbook.count());

console.log('show sort: ');
pbook.showSort();