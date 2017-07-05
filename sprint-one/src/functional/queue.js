var Queue = function() {
  var someInstance = {};
  var nowServing = 0;
  var lastInLine = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    lastInLine++;
    storage[lastInLine] = value;
  };

  someInstance.dequeue = function() {
    if (lastInLine <= nowServing) {
      return 0;
    } else {
      nowServing++;
      return storage[nowServing];
    }
  
  };

  someInstance.size = function() {
    if (lastInLine <= nowServing) {
      return 0;
    }
    return lastInLine - nowServing;
    
  };

  return someInstance;
};
