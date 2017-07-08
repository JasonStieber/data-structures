var BinarySearchTree = function(value, parent) {
  var obj = Object.create(BinarySearchTree.prototype);
  obj.left = null;
  obj.right = null;
  obj.parent = parent;
  obj.value = value; 
  return obj;
};


BinarySearchTree.prototype.insert = function(value) {
  var direc = null;
  this.value < value ? direc = 'right' : direc = 'left';
  if (this[direc] !== null) {
    this[direc].insert(value);
  } else {
    this[direc] = BinarySearchTree(value, this);
  }
  return 0;
};

BinarySearchTree.prototype.contains = function(value) {
  var direc = null;
  var element = this;
  do {
    if (element.value === null) {
      return fasle;
    } else if (element.value === value) {
      return true;
    }
    element.value < value ? direc = 'right' : direc = 'left';
    element = element[direc];
  } while (element !== null);
  return false;
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  var element = this;
  cb(this.value);
  if (this.right !== null) {
    this.right.depthFirstLog(cb);
  }
  if (this.left !== null) {
    this.left.depthFirstLog(cb);
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
