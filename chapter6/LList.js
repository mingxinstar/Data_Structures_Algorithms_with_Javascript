/**
 * 链表类的实现方法，当前链表为双向链表
 */

/**
 * Node类，用来表示节点
 * @param {[type]} element [description]
 */
var  Node = function (element) {
	this.element = element;
	this.next = null;
	this.previous = null;
}

/**
 * 链表类
 */
var LList = function ()  {
	this.head = new Node('head');
}

/**
 * 链表查找方法
 * @param  {[type]} item [description]
 * @return {[type]}      [description]
 * 从头节点开始一直往后寻找，如果到最后都没有找到，则返回最后的next指向的null
 */
LList.prototype.find = function(item) {
	var currNode = this.head;

	while (currNode && currNode.element != item) {
		currNode = currNode.next;
	}

	return currNode;
};

/**
 * 查找所需节点的前一个节点
 * @param  {[type]} item [description]
 * @return {[type]}      [description]
 */
// 在双向链表中无用
// LList.prototype.findPrevious = function(item) {
// 	var currNode = this.head;

// 	while (currNode && currNode.next != null && currNode.next.element != item) {
// 		currNode = currNode.next;
// 	}

// 	return currNode;
// };

LList.prototype.findLast = function() {
	var currNode = this.head;

	while (currNode && currNode.next !== null) {
		currNode = currNode.next;
	}

	return currNode;
};

LList.prototype.insert = function(element, item) {
	var newNode = new Node(element),
		currNode = this.find(item);

	if (!currNode) {
		return;
	}

	newNode.next = currNode.next;
	newNode.previous = currNode;
	currNode.next = newNode;
};

/**
 * 单向链表删除方法
 * @param  {[type]} item [description]
 * @return {[type]}      [description]
 */
// LList.prototype.remove = function(item) {
// 	var prevNode = this.findPrevious(item);

// 	if (prevNode) {
// 		prevNode.next = prevNode.next.next;
// 	}
// };
/**
 * 双向链表删除方法
 * @param  {[type]} item [description]
 * @return {[type]}      [description]
 */
LList.prototype.remove = function(item) {
	var currNode = this.find(item);

	if (currNode) {
		currNode.previous.next = currNode.next;
		currNode.next.previous = currNode.previous;
		currNode.next = null;
		currNode.previous = null;
	}
};

LList.prototype.display = function() {
	var currNode = this.head;

	while (currNode.next != null) {
		console.log(currNode.next.element); //为了不显示头结点
		currNode = currNode.next;
	}
};

/**
 * 反向显示链表
 * @return {[type]} [description]
 */
LList.prototype.displayRev = function() {
	var currNode = this.findLast();

	while (currNode.previous !== null) {
		console.log(currNode.element);
		currNode = currNode.previous;
	}
};

module.exports = exports = LList;