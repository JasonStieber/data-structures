

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  // this._storage.each(function(item, index, collection){
  //   this.set(index, []);
  // });
  this.elements = 0;
 };

  // limitedArray.each = function(callback) {
  //   for (var i = 0; i < storage.length; i++) {
  //     callback(storage[i], i, storage);
  //   }
  // };

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this.elements++;
  this.resize();
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, [[k, v]]);
  } else {
    var innerArr = this._storage.get(index);
    for (var i = 0; i < innerArr.length; i++) {
      if (innerArr[i][0] === k) {
        innerArr[i][1] = v;
        return this._storage.set(index, innerArr);
      }
    }
    innerArr.push([k, v]);
    this._storage.set(index, innerArr);
  }
  
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuples = this._storage.get(index);
  for (var i = 0; i < tuples.length; i++) {
    if (tuples[i][0] === k) {
      return tuples[i][1];
    }
  } return undefined;
  throw 'no key here check round back batman ';
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this.elements--;
  this.resize();
  var tuples = this._storage.get(index);
  for (var i = 0; i < tuples.length; i++) {
    if (tuples[i][0] === k) {
      tuples.splice(i); 
    }
  } this._storage.set(index, tuples);
};

HashTable.prototype.resize = function () {
  if (this.elements / this._limit > 0.75) {  //size up
  }
  else if (this.elements / this._limit < 0.25) {      // size down
  }
  else {
    // throw 'You done goofed son! why no up or down??? see call to resize funtion./..... batman'; 
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


