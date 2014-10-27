var LList = require('./LList');

var cities = new LList();
cities.insert('Conway', 'head');
cities.insert('Russellville', 'Conway');
cities.insert('Alma', 'Russellville');
cities.insert('Carlisle', 'Alma');

console.log('origin : ');
cities.display();

cities.remove('Russellville');

console.log('\nremoved : ');
cities.display();

console.log('\nreverse :');
cities.displayRev();