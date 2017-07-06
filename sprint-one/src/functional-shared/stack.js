// var Stack = function() {
//   let obj = {};
//   obj.size = 0;
//   obj.storage = {};
//   _.extend(obj, stackMethods);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
//   // obj.push = stackMethods.push;
//   // obj.pop = stackMethods.pop;
//   obj.size = stackMethods.size.bind(this);
//   return obj;
  
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
  let obj = {};
  obj.pos = 0;
  obj.storage = {};
  _.extend(obj, stackMethods);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
  // obj.push = stackMethods.push;
  // obj.pop = stackMethods.pop;
  //  obj.size = stackMethods.size.bind(this);
  return obj;
  
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
  if (this.pos === 0) {
    return 0;
  } let offTheTop = this.pos;
  this.pos--;
  return this.storage[offTheTop]; 
};

stackMethods.size = function() {
  return this.pos;
};

var baller = Stack();
baller.push('batman');
console.log(baller);
console.log(baller.size);
console.log(baller.pop());
