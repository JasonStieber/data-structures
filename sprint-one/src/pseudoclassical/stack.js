var Stack = function() {
  this.pos = 0;
  this.storage = {};
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Stack.prototype.size = function () {
  return this.pos;
};

Stack.prototype.push = function (value) {
  this.pos++;
  this.storage[this.pos] = value;
};

Stack.prototype.pop = function () {
  if (this.pos !== 0) {
    var top = this.pos;
    this.pos--;
    return this.storage[top];
  }
};