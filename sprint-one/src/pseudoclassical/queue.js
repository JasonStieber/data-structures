var Queue = function() {
  
  this.lastInLine = 0;
  this.nowServing = 0;
  this.storage = {};
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Queue.prototype.size = function () {
  return this.lastInLine - this.nowServing;
};

Queue.prototype.enqueue = function (value) {
  this.storage[this.lastInLine++] = value;
};

Queue.prototype.dequeue = function () {
  if (this.lastInLine - this.nowServing !== 0) {
    return this.storage[this.nowServing++];
  }
};
