var Queue = function() {
  var obj = {};
  obj.placeInLine = 0;
  obj.nowServing = 0;
  obj.line = {};
  _.extend(obj, queueMethods);
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  return obj;
};

var queueMethods = {};

queueMethods.size = function () {
  return this.placeInLine - this.nowServing;
};

queueMethods.dequeue = function () {
  if (this.placeInLine - this.nowServing !== 0) {
    return this.line[this.nowServing++];
  }
};

queueMethods.enqueue = function (value) {
  this.line[this.placeInLine++] = value;
};