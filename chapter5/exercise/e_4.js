var readline = require('readline'),
	PriQueue = require('../priQueue');

var rl = readline.createInterface({
		input : process.stdin,
		output : process.stdout
	}),
	pq = new PriQueue();

var Patient = function (name, code) {
	this.name = name;
	this.code = code;
}

function init () {
	showMainMenu();
}

/**
 * 显示主菜单
 * @return {[type]} [description]
 */
function showMainMenu () {
	rl.question('a.患者进入诊室\nb.患者就诊\nc.显示等待就诊患者名单\n', function (answer) {
		console.log('answer : ', answer);
		switch (answer) {
			case 'a' :
				handleEnter();
				break;
			case 'b' :
				handleTreat();
				break;
			case 'c' :
				handleShowList();
				break;
			default :
				rl.write('\n没有这个选项，请重新选择\n\n');
				showMainMenu();
				break;
		}
		// rl.close();
	});
}

/**
 * 处理患者入院
 * @return {[type]} [description]
 */
function handleEnter () {
	showNameInf();
}

/**
 * 显示输入名字提示
 * @return {[type]} [description]
 */
function showNameInf () {
	rl.question('请输入患者名字：\n', function (answer) {
		if (answer) {
			showCodeInf(answer);
		} else {
			rl.write('\n名字不能为空\n\n');
			showNameInf();
		}
	});
}

function showCodeInf (name) {
	rl.question('请输入患者优先级：\n', function (answer) {
		answer = isNumber(answer) ? parseInt(answer) : 5;
		pq.enqueue(new Patient(name, answer));

		showMainMenu();
	});
}

function isNumber(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * 处理就诊
 * @return {[type]} [description]
 */
function handleTreat () {
	var treatP = pq.dequeue();

	if (treatP) {
		rl.write('\n当前接受就诊的是: '+treatP.name+'\n\n');
	} else {
		rl.write('\n当前没有患者\n\n');
	}

	showMainMenu();
}

/**
 * 显示患者名单
 * @return {[type]} [description]
 */
function handleShowList () {
	rl.write('\n'+pq.toString()+'\n');

	showMainMenu();
}

init();