var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  //input: item
  //result: {item} add it to the data set
  //complexities:  adding an existing value should not increase the set size
  //pass in value as key, value in _storage obj

  this._storage[item] = item;
  
};

setPrototype.contains = function(item) {

  return (this._storage[item] === item);

};

setPrototype.remove = function(item) {

  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
