var Stack = function() {
  var obj = Object.create(stackMethods);
  obj.pos = 0;
  obj.storage = {};
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  return obj;
};

var stackMethods = {};

stackMethods.size = function () {
  return this.pos;
};

stackMethods.push = function (value) {
  this.pos++;  
  this.storage[this.pos] = value;
};

stackMethods.pop = function() {
  if (this.pos !== 0 ) {
    var top = this.pos;
    this.pos--;
    return this.storage[top];
  }
};