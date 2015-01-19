/**
 * 集合类构造
 */

var Set = function () {
    this.dataStore = [];
}

Set.prototype.add = function(data) {
    if (this.dataStore.indexOf(data) < 0) {
        this.dataStore.push(data);
        return true;
    } else {
        return false;
    }
};

Set.prototype.remove = function(data) {
    var pos = this.dataStore.indexOf(data);

    if (pos > -1) {
        this.dataStore.splice(pos, 1);
        return true;
    } else {
        return false;
    }
};

Set.prototype.show = function() {
    return this.dataStore;
};

Set.prototype.contains = function(data) {
    return this.dataStore.indexOf(data) > -1;
};

/**
 * 求并集
 * @param  {[type]} set [description]
 * @return {[type]}     [description]
 */
Set.prototype.union = function(set) {
    var tempSet = new Set();

    for (var i = 0, l = this.dataStore.length; i < l; i++) {
        tempSet.add(this.dataStore[i]);
    }

    for (var i = 0, l = set.dataStore.length; i < l; i++) {
        if (!tempSet.contains(set.dataStore[i])) {
            tempSet.add(set.dataStore[i]);
        }
    }

    return tempSet;
};

/**
 * 求交集
 * @param  {[type]} set [description]
 * @return {[type]}     [description]
 */
Set.prototype.intersect = function(set) {
    var tempSet = new Set();

    for (var i = 0, l = set.dataStore.length; i < l; i++) {
        if (this.contains(set.dataStore[i])) {
            tempSet.add(set.dataStore[i]);
        }
    }

    return tempSet;
};

/**
 * 获得数据长度
 * @return {[type]} [description]
 */
Set.prototype.size = function() {
    return this.dataStore.length;
};

/**
 * 判断是否是子集
 * @param  {[type]} set [description]
 * @return {[type]}     [description]
 */
Set.prototype.subset = function(set) {
    if (this.size() > set.size()) {
        return false;
    }

    for (var i = 0, l = this.size(); i < l; i++) {
        if (!set.contains(this.dataStore[i])) {
            return false;
        }
    }

    return true;
};

/**
 * 获取补集
 * @param  {[type]} set [description]
 * @return {[type]}     [description]
 */
Set.prototype.difference = function(set) {
    var tempSet = new Set();

    for (var i = 0, l = this.size(); i < l; i++) {
        if (!set.contains(this.dataStore[i])) {
            tempSet.add(this.dataStore[i]);
        }
    }

    return tempSet;
};

module.exports = Set;