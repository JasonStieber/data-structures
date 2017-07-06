var Queue = function() {
  var obj = Object.create(queueMethods);
  obj.placeInLine = 0;
  obj.nowServing = 0;
  obj.line = {};
  return obj;
};
  
//  this.enqueue = queueMethods.enqueue();
//   this.dequeue = queueMethods.dequeue();
// };

var queueMethods = {};

queueMethods.size = function() {
  return this.placeInLine - this.nowServing;
};

queueMethods.enqueue = function(value) {
  this.line[this.placeInLine++] = value;
};

queueMethods.dequeue = function() {
  if (this.placeInLine - this.nowServing !== 0) {
    return this.line[this.nowServing++];
  }
};

// var Queue() = queue;
// queue.dequeue();