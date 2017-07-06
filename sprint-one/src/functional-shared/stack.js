// var Stack = function() {
//   let constructor = {};
//   constructor.size = 0;
//   constructor.storage = {};
//   _.extend(constructor, stackMethods);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
//   // constructor.push = stackMethods.push;
//   // constructor.pop = stackMethods.pop;
//   constructor.size = stackMethods.size.bind(this);
//   return constructor;
  
//   // Hey! Rewrite in the new style. Your code will wind up looking very similar,
//   // but try not not reference your old code in writing the new style.
// };

// var stackMethods = {};

// //stackMethods.size = 0;

// //stackMethods.storage = {};

// stackMethods.push = function(value) {
//   this.storage[this.size] = value;
//   this.size++;
// };

// stackMethods.pop = function() {
//   this.size--;
//   return this.storage[this.size]; 
// };

// stackMethods.size = function() {
//   return this.size;
// };
var Stack = function() {
  let constructor = {};
  constructor.pos = 0;
  constructor.storage = {};
  _.extend(constructor, stackMethods);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
  // constructor.push = stackMethods.push;
  // constructor.pop = stackMethods.pop;
  //  constructor.size = stackMethods.size.bind(this);
  return constructor;
  
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var stackMethods = {};

//stackMethods.size = 0;

//stackMethods.storage = {};

stackMethods.push = function(value) {
  this.pos++;
  this.storage[this.pos] = value;
  
};

stackMethods.pop = function() {
  this.pos--;
  return this.storage[this.pos]; 
};

stackMethods.size = function() {
  return this.pos;
};

var baller  = Stack();
baller.push("batman");
console.log(baller);
console.log(baller.size);
console.log(baller.pop());
