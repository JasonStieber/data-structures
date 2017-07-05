var Stack = function() {
  var someInstance = {};
  let size = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[size] = value; 
    size++;
    // console.log(size - 1 + ' is the locatoin of ' + storage[size - 1 ]);
  };

  someInstance.pop = function() {
    if (size === 0) {
      return 0;
    } else {
      size--;
      var theGoods = storage[size];
      console.log(theGoods);
      return theGoods;
    }  
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};