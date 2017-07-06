var Stack = function() {
  let constructor = {};
  let size = 0;
  let storage = {};
  // _.extend(constructor, stackMethods);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
  constructor.push = stackMethods.push;
  constructor.pop = stackMethods.pop;
  constructor.size = stackMethods.size;
  return constructor;
  
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.size] = value;
  this.size++;
};

stackMethods.pop = function() {
  this.size--;
  return this.storage[this.size]; 
};

stackMethods.size = function() {
  return this.size;
};



